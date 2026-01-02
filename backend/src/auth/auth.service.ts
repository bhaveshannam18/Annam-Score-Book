import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string, res: Response) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user._id, email: user.email, role: user.role };

    // Tokens
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // Store REFRESH TOKEN in HttpOnly cookie
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // remove password before sending user object
    const { password: _, ...userWithoutPassword } = user.toObject();

    // Send ACCESS TOKEN in response (frontend stores in memory)
    return res.json({
      user: userWithoutPassword,
      accessToken,
    });
  }

  async refresh(refreshToken: string, res: Response) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);
      const user = await this.usersService.findByEmail(payload.email);
      if (!user) throw new UnauthorizedException();

      const newAccessToken = this.jwtService.sign(
        { sub: user._id, email: user.email, role: user.role },
        { expiresIn: '15m' },
      );

      return res.json({ accessToken: newAccessToken });
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(res: Response) {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    return res.json({ message: 'Logged out successfully' });
  }
}
