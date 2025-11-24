"use client"
import { useUser } from '@clerk/nextjs'

export default function SettingsPage() {
  const { user } = useUser()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account and preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Profile Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={user?.fullName || ''}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#24293d] text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user?.primaryEmailAddress?.emailAddress || ''}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#24293d] text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Preferences
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Additional settings coming soon...
          </p>
        </div>
      </div>
    </div>
  )
}
