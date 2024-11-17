import { MousePointer, Zap, Library, FileText, ShieldCheck, Settings } from 'lucide-react'

export default function MarqueePromotile() {
  return (
    <div className="w-[1400px] h-[560px] bg-gradient-to-br from-blue-600 to-purple-700 flex overflow-hidden">
      {/* Left side: Product showcase */}
      <div className="w-2/3 p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">AutoFormAI</h1>
          <p className="text-2xl text-blue-100 mb-8">Revolutionize Your Web Form Experience</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: MousePointer, title: "One-Click Filling", description: "Instantly populate entire web forms" },
            { icon: Settings, title: "Zero Configuration", description: "Start using immediately, no setup required" },
            { icon: Library, title: "Reusable Information", description: "Store and reuse data across multiple forms" },
            { icon: Zap, title: "AI-Powered Matching", description: "Smart extraction and precise field matching" },
            { icon: FileText, title: "Complex Form Support", description: "Fill custom forms on various platforms" },
            { icon: ShieldCheck, title: "Secure & Private", description: "Local storage keeps your data safe" }
          ].map((feature, index) => (
            <div key={index} className="flex items-start bg-white/10 rounded-lg p-4">
              <feature.icon className="w-8 h-8 text-yellow-300 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right side: Visual representation */}
      <div className="w-1/3 relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-[420px] bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-200 h-8 flex items-center px-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2" />
                <div className="w-full h-8 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2" />
                <div className="w-full h-8 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2" />
                <div className="w-full h-8 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2" />
                <div className="w-full h-8 bg-gray-300 rounded" />
              </div>
              <div className="flex justify-end">
                <div className="w-1/4 h-10 bg-blue-500 rounded" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-32 right-32 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <MousePointer className="w-10 h-10 text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  )
}