import { Search, Sparkles, Target, Zap, Layers } from "lucide-react"

const HeroSection = ({ searchTerm, onSearchChange }) =>{
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>30+ Professional Calculators</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Calculate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Anything
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Professional-grade calculators for every need. From basic math to complex scientific computations, we've got
            you covered.
          </p>

          {/* Search */}
          <div className="max-w-lg flex mx-auto relative mb-12">
            <Search className="absolute left-[4%] top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search any calculator..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className=" pl-12 pr-4 py-4 h-10 w-96 md:w-[100%] text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 shadow-lg"
            />
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-green-500" />
              <span>99.9% Accurate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Layers className="h-4 w-4 text-blue-500" />
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HeroSection