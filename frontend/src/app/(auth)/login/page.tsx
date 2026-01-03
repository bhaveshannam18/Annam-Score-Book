"use client";

import { useState } from "react";
import Link from "next/link";

import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-red-700 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl">
        {/* LEFT IMAGE */}
        <div className="hidden md:block relative m-1">
          <img
            src="images/TeamIndia1.jpg"
            alt="Login Visual"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-1">Log in</h1>
          <p className="text-sm text-gray-500 mb-8">
            Don’t have an account?{" "}
            <Link href="/signup" className="font-medium text-black underline">
              Create an Account
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-full px-4 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-full py-3 text-sm font-medium hover:opacity-90"
            >
              Log in
            </button>

            <div className="flex items-center gap-2 text-sm mt-2">
              <input
                type="checkbox"
                required
                className="h-4 w-4 accent-black"
              />
              <span>
                I agree to the{" "}
                <Link href="#" className="underline">
                  Terms & Condition
                </Link>
              </span>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="px-3 text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => console.log("Hey Google")}
                className="border rounded-full py-2.5 px-6 text-sm flex items-center justify-center gap-2 text-black"
              >
                <FaGoogle size={16} className="text-current" />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
