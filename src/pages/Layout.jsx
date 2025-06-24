import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PopularCalculators from "../components/PopularCalculators";
import CategoryFilter from "../components/CategoryFilter";
import CalculatorCategories from "../components/CalculatorCategories";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CALCULATOR_CATEGORIES } from "../constants/calculator";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories =
    selectedCategory === "all"
      ? CALCULATOR_CATEGORIES
      : CALCULATOR_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  const searchFilteredCategories = filteredCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subtypes.some((subtype) =>
        subtype.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleCalculatorClick = (path) => {
    navigate(path);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {location.pathname === "/" ? (
        <>
          {/* Only show HeroSection on home route */}
          <HeroSection
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </>
      ) : (
        <div className="pt-14 px-4 sm:px-6 lg:px-28">
          <Outlet />
        </div>
      )}
      <PopularCalculators onCalculatorClick={handleCalculatorClick} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <CalculatorCategories
        categories={searchFilteredCategories}
        onCalculatorClick={handleCalculatorClick}
      />
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
