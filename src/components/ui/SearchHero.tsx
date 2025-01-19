import React from 'react';
import { Search } from 'lucide-react';

const SearchHero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 py-20 px-4 bg-white">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
          সহজ বাংলায়
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold text-blue-600">
          নির্ভরযোগ্য স্বাস্থ্য তথ্য
        </h2>
      </div>
      <div className="w-full max-w-2xl relative">
        <input
          type="text"
          placeholder="কোন বিষয়ে খোঁজ করবেন লিখুন..."
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base"
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchHero;
