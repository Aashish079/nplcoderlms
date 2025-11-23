import { SignedIn, SignedOut } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SignedIn>{redirect('/dashboard')}</SignedIn>
      <SignedOut>
        <main className="min-h-screen bg-white dark:bg-[#24293d]">
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Welcome to NPLCoder LMS
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Empowering Nepali students through quality tech education and resources. 
                  Start your learning journey today.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/sign-in">
                    <button className="px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-[#DC143C] to-[#003893] font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="px-8 py-4 rounded-2xl text-gray-900 dark:text-white bg-white dark:bg-[#2C3043] border-2 border-gray-300 dark:border-gray-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#2C3043] border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Quality Courses
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access comprehensive courses designed for Nepali students
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#2C3043] border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Track Progress
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monitor your learning journey with detailed analytics
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#2C3043] border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Community Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join a vibrant community of learners and mentors
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </SignedOut>
    </>
  )
}
