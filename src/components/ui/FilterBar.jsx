import React from "react";
import { Button } from "./button";
import FilterDropdown from "./FilterDropdown";

const FilterBar = ({
  filterOptions,
  filters,
  openDropdown,
  onDropdownToggle,
  onMultiSelectFilter,
  onSingleSelectFilter,
  onWeakChaptersToggle,
  onClearFilters,
  activeFiltersCount,
  darkMode, 
}) => {
  
  const darkBtn =
    "bg-[#222E3F] border border-[#3A4661] text-[#E6EAF3] hover:bg-[#26324A]";
  const lightBtn =
    "bg-white border border-[#D1D8E0] text-gray-900 hover:bg-gray-50";

  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
      <FilterDropdown
        label="Class"
        options={filterOptions.class}
        selectedValues={filters.class}
        isOpen={openDropdown === "class"}
        onToggle={() => onDropdownToggle("class")}
        onSelectMultiple={(value) => onMultiSelectFilter("class", value)}
        type="multi"
        darkMode={darkMode}
      />

      <FilterDropdown
        label="Units"
        options={filterOptions.units}
        selectedValues={filters.units}
        isOpen={openDropdown === "units"}
        onToggle={() => onDropdownToggle("units")}
        onSelectMultiple={(value) => onMultiSelectFilter("units", value)}
        type="multi"
        darkMode={darkMode}
      />

      <FilterDropdown
        label="Status"
        options={filterOptions.status}
        selectedValues={filters.status}
        isOpen={openDropdown === "status"}
        onToggle={() => onDropdownToggle("status")}
        onSelectSingle={(value) => onSingleSelectFilter("status", value)}
        type="single"
        darkMode={darkMode}
      />

      <Button
        variant={filters.weakChapters ? "default" : "outline"}
        onClick={onWeakChaptersToggle}
        className={`flex items-center gap-2 rounded-lg
          ${darkMode ? darkBtn : lightBtn}
          ${filters.weakChapters ? "bg-orange-500 hover:bg-orange-600 text-white border-none" : ""}
        `}
      >
        Weak Chapters
      </Button>

      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          onClick={onClearFilters}
          className={`flex items-center gap-2 ${darkMode ? "text-[#AAB4C2]" : "text-gray-600"} hover:text-gray-800`}
        >
          Clear All ({activeFiltersCount})
        </Button>
      )}
    </div>
  );
};

export default FilterBar;