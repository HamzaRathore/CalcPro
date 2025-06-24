
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CalculatorCategories = ({ categories, onCalculatorClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 pb-20">
      <div className="space-y-12">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <div key={category.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div variant="secondary" className="hidden md:block md:text-xs md:bg-gray-300 md:font-semibold md:rounded-xl md:px-2 md:py-0.5 ">
                  {category.count} tools
                </div>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.subtypes.map((subtype, index) => (
                  <Link
                  to={subtype.path}
                    key={index}
                    className={`${category.bgColor} rounded-xl p-4 hover:shadow-md transition-all duration-200 h-[80px] cursor-pointer group border border-transparent hover:border-gray-200`}
                    // onClick={() => onCalculatorClick(subtype.path)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium ${category.textColor} group-hover:text-gray-900 transition-colors`}>
                          {subtype.name}
                        </h4>
                        {subtype.popular && (
                          <div variant="secondary" className="text-xs mt-1">
                            Popular
                          </div>
                        )}
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 ${category.textColor} group-hover:translate-x-1 transition-transform`}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}


export default CalculatorCategories