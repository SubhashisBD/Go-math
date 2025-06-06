import React from "react";
import { ChevronRight } from "lucide-react";
import { getIconComponent } from "../../app/utils/iconUtils";

const SubjectSidebar = ({ subjects, activeSubject, onSubjectChange, darkMode }) => {
  return (
    <div className={`w-full lg:w-[272px] space-y-2 ${darkMode ? "bg-[#222E3F]" : "bg-white"}`}>
      <div className="py-6">
        <div className="h-6 gap-4 pb-4 flex items-center justify-center">
          <img className="w-5 h-5" src="./logo.png " alt="Jee-logo" />
          <h1 className={`text-xl font-bold ${darkMode ? "text-[#E6EAF3]" : "text-[#101319]"}`}>JEE Main</h1>
        </div>
        <p className={`text-xs gap-1 text-center ${darkMode ? "text-[#AAB4C2]" : "text-[#505D79]"}`}>
          2025 - 2009 | 173 Papers | 15825 Qs
        </p>
      </div>
      <div className="flex flex-row lg:flex-col gap-2 justify-center lg:justify-start">
        {subjects.map((subject) => {
          const SubjectIcon = getIconComponent(subject.icon);
          const isActive = activeSubject === subject.id;
          return (
            <div
              key={subject.id}
              onClick={() => onSubjectChange(subject.id)}
              className={`
                flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors
                ${isActive
                  ? darkMode
                    ? "bg-[#FF6B00] text-white"
                    : "bg-gray-900 text-white"
                  : darkMode
                    ? "bg-[#26324A] text-[#E6EAF3] border border-[#3A4661] hover:bg-[#2C3954]"
                    : "bg-white border hover:bg-gray-50"}
                w-full lg:w-auto min-w-[90px]
              `}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-8 h-8 rounded-lg flex items-center justify-center text-white
                    ${subject.bgColor}
                  `}
                >
                  <SubjectIcon className="w-4 h-4" />
                </div>
                <span className="font-medium hidden lg:inline">{subject.name}</span>
                <span className="font-medium lg:hidden">{subject.name.split(' ')[0]}</span>
              </div>
              <ChevronRight className="w-5 h-5 opacity-60 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectSidebar;