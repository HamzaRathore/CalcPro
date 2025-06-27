import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import { NAVIGATION_LINKS, SITE_CONFIG } from "../constants/calculator";
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) =>
              link.type === "route" ? (
                <RouterLink
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth
                  duration={500}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors hover:cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              )
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute bg-white w-[100%] left-0 px-4 py-4 border-t border-gray-300">
            {NAVIGATION_LINKS.map((link) =>
              link.type === "route" ? (
                <RouterLink
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth
                  duration={500}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.name}
                </ScrollLink>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
