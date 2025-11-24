import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  return (
    <>
      <SignedIn>{redirect('/dashboard')}</SignedIn>
      <SignedOut>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
          <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800">
            {/* Logo/Brand Section */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                NPLCoder LMS
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Your Gateway to Professional Learning
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-center text-gray-700 dark:text-gray-300">
                Welcome to NPLCoder Learning Management System. Access world-class courses,
                track your progress, and accelerate your career growth.
              </p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Expert-led courses and tutorials
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Track your learning progress
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Earn certificates and badges
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Link
                href="/sign-in"
                className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign In to Your Account
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                    New to NPLCoder?
                  </span>
                </div>
              </div>

              <Link
                href="/sign-up"
                className="flex w-full items-center justify-center rounded-lg border-2 border-indigo-600 bg-transparent px-4 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-indigo-400 dark:hover:bg-gray-700"
              >
                Create Free Account
              </Link>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              By continuing, you agree to NPLCoder's Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </SignedOut>
    </>
  )
}
