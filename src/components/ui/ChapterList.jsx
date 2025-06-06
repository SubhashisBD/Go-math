import React from 'react';
import { Button } from './button';
import { ArrowUpDown } from 'lucide-react';
import ChapterCard from './ChapterCard';

const ChapterList = ({ filteredData, stats, darkMode }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <span className={`text-xs sm:text-sm ${darkMode ? "text-[#AAB4C2]" : "text-gray-600"}`}>
          Showing all chapters ({stats.chapters})
        </span>
        <Button variant="ghost" className={`flex items-center gap-2 ${darkMode ? "text-blue-300" : "text-blue-600"} px-2 py-1 sm:px-3 sm:py-2`}>
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Button>
      </div>

      <div className="space-y-2">
        {filteredData.map((item, index) => (
          <ChapterCard key={index} item={item} darkMode={darkMode} />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className={`${darkMode ? "text-[#3A4661]" : "text-gray-400"} mb-2`}>No chapters found</div>
          <div className={`text-sm ${darkMode ? "text-[#AAB4C2]" : "text-gray-500"}`}>Try adjusting your filters</div>
        </div>
      )}
    </div>
  );
};

export default ChapterList;