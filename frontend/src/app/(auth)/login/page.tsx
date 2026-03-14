'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { FaGoogle } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from './page.module.scss';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const schema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setServerError('');

      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
      const response = await fetch(`${apiBaseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(result?.message)
          ? result.message[0]
          : (result?.message ?? 'Invalid credentials');
        throw new Error(errorMessage);
      }

      if (result?.accessToken) {
        localStorage.setItem('accessToken', result.accessToken);
      }

      router.push('/dashboard');
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        {/* LEFT IMAGE */}
        <div className={styles.authImagePane}>
          <DotLottieReact
            src="https://lottie.host/725c3bdc-e8f8-43ea-b402-76d468e62870/cVdMk39dDQ.lottie"
            loop
            autoplay
            className={styles.authLottie}
          />
        </div>

        {/* RIGHT FORM */}
        <div className={styles.authFormPane}>
          <h1 className={styles.authTitle}>Log in</h1>
          <p className={styles.authSubtitle}>
            Don’t have an account?{' '}
            <Link href="/signup" className={styles.authLink}>
              Create an Account
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm} autoComplete="off">
            {serverError && <p className={styles.serverErrorText}>{serverError}</p>}

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email Address</label>
              <input
                type="email"
                {...register('email')}
                className={styles.formInput}
                placeholder="you@example.com"
              />
              {errors.email && <p className={styles.formErrorText}>{errors.email.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={styles.formInput}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className={styles.formErrorText}>{errors.password.message}</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.forgotRow}>
              <Link href="#" className={styles.authLink}>
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className={styles.primaryBtn} disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Log in'}
            </button>

            <div className={styles.termsRow}>
              <input type="checkbox" required className={styles.termsCheckbox} />
              <span>
                I agree to the{' '}
                <Link href="#" className={styles.authLink}>
                  Terms & Condition
                </Link>
              </span>
            </div>

            <div className={styles.dividerRow}>
              <div className={styles.dividerLine} />
              <span>or</span>
              <div className={styles.dividerLine} />
            </div>

            <div className={styles.socialRow}>
              <button
                type="button"
                onClick={() => console.log('Hey Google')}
                className={styles.socialBtn}
              >
                <FaGoogle size={16} className={styles.socialIcon} />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
