"use client"

export default function CoursesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Browse Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore available courses and enroll in new learning paths
        </p>
      </div>

      <div className="rounded-xl bg-white p-12 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043] text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <svg
              className="h-8 w-8 text-gray-400"
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
        </div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Course catalog coming soon
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          We're working on bringing you an amazing collection of courses
        </p>
      </div>
    </div>
  )
}
