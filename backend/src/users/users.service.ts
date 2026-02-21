import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import {
  User,
  UserDocument,
  UserRole,
  SubscriptionPlan,
  SubscriptionStatus,
} from './schema/user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, firstName, lastName } = createUserDto;

    const existing = await this.userModel.findOne({ email });
    if (existing) {
      throw new BadRequestException('Email already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: UserRole.SCORER,
      plan: SubscriptionPlan.FREE,
      planStatus: SubscriptionStatus.INACTIVE,
    });

    const savedUser = await user.save();
    const { password: _, ...userWithoutPassword } = savedUser.toObject();
    return userWithoutPassword as any;
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
