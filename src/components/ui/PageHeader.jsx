import React from 'react';
import { getIconComponent } from '../../app/utils/iconUtils';

const PageHeader = ({ currentSubject, darkMode }) => {
  const IconComponent = getIconComponent(currentSubject?.icon);

  return (
    <div className="pt-4 pb-2 sm:pt-6 sm:pb-4">
      <div className="flex items-center justify-center gap-2">
        <div className={`w-8 h-8 flex items-center justify-center ${currentSubject?.bgColor} rounded-lg`}>
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        <h2 className={`text-lg sm:text-2xl font-bold ${darkMode ? "text-[#E6EAF3]" : "text-gray-900"}`}>
          {currentSubject?.name} 
        </h2>
      </div>
      <p className={`text-xs sm:text-[14px] font-normal gap-1 text-center mt-2 sm:mt-4 ${darkMode ? "text-[#AAB4C2]" : "text-[#505D79]"}`}>
        Chapter-wise Collection of {currentSubject?.name} 
      </p>
    </div>
  );
};

export default PageHeader;