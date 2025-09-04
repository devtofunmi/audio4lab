"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from 'react-toastify';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Login successful!");
        router.push("/dashboard");
      } else {
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm mx-auto">
        <div className="animate-slide-in">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2 text-white">
              Welcome Back to Audio4Lab
            </h1>
            <p className="text-gray-400 mb-4">
              Sign in to continue your music creation experience
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium mb-1 text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium mb-1 text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 font-semibold cursor-pointer transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="my-4 flex items-center">
              <div className="flex-1 border-t border-gray-600"></div>
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full px-6 py-2.5 cursor-pointer bg-[#171717] border-2 border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/onboarding"
                className="text-white hover:underline font-semibold"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}