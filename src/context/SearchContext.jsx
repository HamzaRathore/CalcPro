import React, { createContext, useState, useContext } from 'react';
const SearchContext = createContext(null); 

// Provider Component 
export const SearchProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearching(term.length > 0);
  };

  const value = {
    isSearching,
    searchTerm,
    handleSearch, 
   
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};


export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};