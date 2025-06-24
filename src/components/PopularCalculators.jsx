import { ArrowRight } from "lucide-react";
import { CALCULATOR_CATEGORIES } from "../constants/calculator";
import { Link } from "react-router-dom";

const PopularCalculators = ({ onCalculatorClick }) => {
  const popularCalculators = CALCULATOR_CATEGORIES.flatMap((cat) =>
    cat.subtypes
      .filter((sub) => sub.popular)
      .map((sub) => ({
        ...sub,
        category: cat.title,
        icon: cat.icon,
        gradient: cat.gradient,
      }))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔥 Most Popular
        </h2>
        <p className="text-gray-600">The calculators everyone loves to use</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
        {popularCalculators.slice(0, 8).map((calc, index) => {
          const IconComponent = calc.icon;
          return (
            <Link
              to={calc.path}
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 flex flex-col justify-between h-full min-h-[230px]"
            >
              <div className="flex flex-col gap-2">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${calc.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-base leading-snug">
                  {calc.name}
                </h3>
                <p className="text-sm text-gray-500">{calc.category}</p>
              </div>

              <div className="mt-auto pt-2 flex items-center text-blue-600 text-sm font-medium">
                <span>Try now</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCalculators;
