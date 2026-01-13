import { SignUp } from '@clerk/nextjs'
import CodeBlock from '@/components/Codeblock'

export default function Page() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br p-4 dark:from-gray-900 dark:to-gray-800'>
      <div className='flex w-full max-w-6xl gap-8'>
        <div className='flex flex-1 items-center justify-center'>
          <SignUp />
        </div>
        <div className="hidden lg:flex flex-1 relative w-full">
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-lg p-6 shadow-xl bg-white/50 dark:bg-gray-800/50 w-full">
            <div className="flex items-center gap-2 mb-4">
              <CodeBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}