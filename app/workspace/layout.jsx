"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutDashboard, GraduationCap, Settings } from 'lucide-react'

export default function WorkspaceLayout({ children }) {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Dashboard',
      href: '/workspace',
      icon: LayoutDashboard,
    },
    {
      name: 'My Courses',
      href: '/workspace/courses',
      icon: BookOpen,
    },
    {
      name: 'Create Course',
      href: '/workspace/create-course',
      icon: GraduationCap,
    },
    {
      name: 'Settings',
      href: '/workspace/settings',
      icon: Settings,
    },
  ]

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#24293d]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-gray-300 dark:border-gray-800 bg-white dark:bg-[#2C3043]">
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-300 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#DC143C] to-[#003893]">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Workspace
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your Learning Hub
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-[#DC143C] to-[#003893] text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
