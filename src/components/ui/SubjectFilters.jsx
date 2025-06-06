import React, { useState,useEffect } from "react";
import { SubjectProvider, useSubjectStore } from "../../store/SubjectStore";
import { useFilters } from "../../hooks/useFilters";
import PageHeader from "./PageHeader";
import SubjectSidebar from "./SubjectSidebar";
import FilterBar from "./FilterBar";
import ChapterList from "./ChapterList";
import { Sun, Moon } from "lucide-react";

const SubjectFiltersContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { state, setActiveSubject, setFilters, clearFilters, setOpenDropdown } =
    useSubjectStore();

  const { activeSubject, openDropdown, filters, subjects, Mockdata } = state;

  const { filterOptions, filteredData, stats } = useFilters(
    activeSubject,
    filters,
    Mockdata
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    return () => document.body.classList.remove("dark-mode");
  }, [darkMode]);




  const handleSubjectChange = (subjectId) => {
    setActiveSubject(subjectId);
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMultiSelectFilter = (filterType, value) => {
    const currentValues = filters[filterType];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setFilters({ [filterType]: newValues });
  };

  const handleSingleSelectFilter = (filterType, value) => {
    const newValue = filters[filterType] === value ? "" : value;
    setFilters({ [filterType]: newValue });
  };

  const handleWeakChaptersToggle = () => {
    setFilters({ weakChapters: !filters.weakChapters });
  };

  const getActiveFiltersCount = () => {
    return (
      filters.class.length +
      filters.units.length +
      (filters.status ? 1 : 0) +
      (filters.weakChapters ? 1 : 0)
    );
  };

  const currentSubject = subjects.find((s) => s.id === activeSubject);

  return (
  <div
    className={`${
      darkMode ? "text-[#E6EAF3]" : "text-black"
    } max-w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1360px] mx-auto min-h-screen transition-colors`}
  >
      <button
        aria-label="Toggle dark mode"
        className={`
          fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow
          border border-gray-300
          ${
            darkMode ? "bg-[#26324A] text-yellow-300" : "bg-white text-gray-700"
          }
          transition
        `}
        onClick={() => setDarkMode((d) => !d)}
      >
        {darkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-6">
     
        <div className="w-full lg:w-[272px] ml-1 lg:block">
          <SubjectSidebar
            subjects={subjects}
            activeSubject={activeSubject}
            onSubjectChange={handleSubjectChange}
            darkMode={darkMode}
          />
        </div>
        
        <div
          className={`flex-1 w-full lg:w-[848px] border-0 lg:border ${
            darkMode
              ? "lg:border-[#3A4661] bg-[#26324A]"
              : "border-[#D1D8E0] bg-white"
          } transition-colors`}
        >
          <PageHeader currentSubject={currentSubject} darkMode={darkMode} />
          <div className="p-2 sm:p-4">
            <FilterBar
              filterOptions={filterOptions}
              filters={filters}
              openDropdown={openDropdown}
              onDropdownToggle={handleDropdownToggle}
              onMultiSelectFilter={handleMultiSelectFilter}
              onSingleSelectFilter={handleSingleSelectFilter}
              onWeakChaptersToggle={handleWeakChaptersToggle}
              onClearFilters={clearFilters}
              activeFiltersCount={getActiveFiltersCount()}
              darkMode={darkMode}
            />
            <ChapterList
              filteredData={filteredData}
              stats={stats}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubjectFilters = () => {
  return (
    <SubjectProvider>
      <SubjectFiltersContent />
    </SubjectProvider>
  );
};

export default SubjectFilters;
