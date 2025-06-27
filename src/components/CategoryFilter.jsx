import { CALCULATOR_CATEGORIES } from '../constants/calculator'
import { useSearch } from '../context/SearchContext';
const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
   const { isSearching } = useSearch();
 if (isSearching) {
    return null;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        
        {/* All Categories Button */}
        <button
          onClick={() => onCategoryChange("all")}
          className={`rounded-full border px-4 py-2 hover:cursor-pointer ${
            selectedCategory === "all"
              ? "bg-black text-white border-black"
              : "border-gray-300 text-black"
          }`}
        >
          All Categories
        </button>

        {/* Dynamic Category Buttons */}
        {CALCULATOR_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-full border px-4 py-2 hover:cursor-pointer ${
                isSelected
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-black"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
