"use client"
import { Plus } from 'lucide-react'
import { useState } from 'react'
import AddNewCourseDialog from '@/components/AddNewCourseDialog'

export default function CreateCoursePage() {
  const handleCourseCreate = (courseData) => {
    console.log('Course Data:', courseData)
    // TODO: Implement API call to create course
    alert('Course creation will be implemented soon!')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Create New Course
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Use AI to generate a comprehensive course curriculum
        </p>
      </div>

      <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-[#2C3043]">
        {/* Course Creator Info */}
        <div className="text-center py-12">
          <Plus className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            AI Course Creator
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Enter your course details and let AI generate the perfect curriculum
          </p>
          <AddNewCourseDialog onCourseCreate={handleCourseCreate}>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#DC143C] to-[#003893] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Start Creating Course
            </button>
          </AddNewCourseDialog>
        </div>
      </div>
    </div>
  )
}
