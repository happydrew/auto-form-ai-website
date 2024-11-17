import { ClipboardCheck, MousePointer } from 'lucide-react'

export default function Promotile() {
  return (
    <div className="w-[440px] h-[280px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 z-0">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>
      <div className="z-10 flex flex-col items-center">
        <div className="text-3xl font-bold mb-2">AutoFormAI</div>
        <div className="text-lg mb-4">One-Click Form Filling</div>
        <div className="flex items-center justify-center mb-4">
          <MousePointer className="w-8 h-8 mr-2 animate-bounce" />
          <ClipboardCheck className="w-12 h-12" />
        </div>
        <div className="text-sm text-center max-w-[200px]">
          Intelligent form recognition & secure data matching
        </div>
      </div>
    </div>
  )
}