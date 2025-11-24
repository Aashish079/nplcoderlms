"use client"
import { useUser } from '@clerk/nextjs'
import { useContext, useEffect } from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'
import AddNewCourseDialog from '@/components/AddNewCourseDialog'
import Link from 'next/link'
import { Plus, BookOpen, TrendingUp } from 'lucide-react'

export default function WorkspacePage() {
  const { user } = useUser()
  const { userDetail } = useContext(UserDetailContext)

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  const firstName = user?.firstName || 'Learner'

  const handleCourseCreate = (courseData) => {
    console.log('Course Data:', courseData)
    // TODO: Implement API call to create course
    alert('Course creation will be implemented soon!')
  }

  return (
    <div>
      {/* Greeting Section */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#DC143C] to-[#003893] p-8 text-white shadow-lg">
        <h2 className="mb-2 text-3xl font-bold">
          {getGreeting()}, {firstName}! 👋
        </h2>
        <p className="text-white/90">
          Welcome back to your learning journey. Ready to continue where you left off?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Courses Enrolled</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hours Learned</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Courses
          </h3>
          <AddNewCourseDialog onCourseCreate={handleCourseCreate}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DC143C] to-[#003893] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Plus className="h-5 w-5" />
              Create New Course
            </button>
          </AddNewCourseDialog>
        </div>

        {/* Empty State */}
        <div className="rounded-xl bg-white p-12 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043] text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No courses yet
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start your learning journey by creating or enrolling in a course
          </p>
          <div className="flex gap-4 justify-center">
            <AddNewCourseDialog onCourseCreate={handleCourseCreate}>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#DC143C] to-[#003893] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Create Course
              </button>
            </AddNewCourseDialog>
            <Link href="/workspace/courses">
              <button className="px-6 py-3 rounded-lg bg-white dark:bg-[#24293d] border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Browse Courses
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
        <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Quick Actions
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/workspace/courses">
            <button className="w-full flex flex-col items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 p-6 transition-all hover:border-[#DC143C] hover:bg-gray-50 dark:hover:bg-[#24293d] hover:shadow-lg">
              <svg
                className="h-8 w-8 text-[#DC143C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="font-semibold text-gray-900 dark:text-white">
                Browse Courses
              </span>
            </button>
          </Link>

          <button className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 p-6 transition-all hover:border-[#003893] hover:bg-gray-50 dark:hover:bg-[#24293d] hover:shadow-lg">
            <svg
              className="h-8 w-8 text-[#003893]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">My Progress</span>
          </button>

          <button className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 p-6 transition-all hover:border-[#DC143C] hover:bg-gray-50 dark:hover:bg-[#24293d] hover:shadow-lg">
            <svg
              className="h-8 w-8 text-[#DC143C]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">
              Certificates
            </span>
          </button>

          <Link href="/workspace/settings">
            <button className="w-full flex flex-col items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 p-6 transition-all hover:border-[#003893] hover:bg-gray-50 dark:hover:bg-[#24293d] hover:shadow-lg">
              <svg
                className="h-8 w-8 text-[#003893]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold text-gray-900 dark:text-white">Settings</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
