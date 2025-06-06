import React from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  options,
  selectedValues,
  isOpen,
  onToggle,
  onSelectMultiple,
  onSelectSingle,
  type = "multi",
  darkMode = false,
}) => {
  const renderBadge = () => {
    if (type === "multi" && selectedValues.length > 0) {
      return (
        <Badge
          variant="secondary"
          className="ml-1 h-4 px-1 text-xs bg-blue-100 text-blue-800"
        >
          {selectedValues.length}
        </Badge>
      );
    }
    return null;
  };

  const getDisplayLabel = () => {
    if (type === "single") {
      return selectedValues || label;
    }
    return label;
  };

   return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={onToggle}
        className={`flex items-center gap-2 rounded-lg
          ${darkMode
            ? "bg-[#222E3F] border border-[#3A4661] text-[#E6EAF3] hover:bg-[#26324A]"
            : "bg-white border border-[#D1D8E0] text-gray-900 hover:bg-gray-50"}
        `}
      >
        {typeof getDisplayLabel === "function" ? getDisplayLabel() : label}
        {typeof renderBadge === "function" ? renderBadge() : null}
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-1 w-56 rounded-xl shadow-lg z-20
          ${darkMode ? "bg-[#26324A] border border-[#3A4661] text-[#E6EAF3]" : "bg-white border border-[#D1D8E0]"}
        `}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                if (type === "multi") {
                  onSelectMultiple(option);
                } else {
                  onSelectSingle(option);
                }
              }}
              className={`
                px-3 py-2 cursor-pointer flex items-center gap-2 rounded
                ${darkMode
                  ? selectedValues.includes && selectedValues.includes(option)
                    ? "bg-[#222E3F] text-white"
                    : "hover:bg-[#222E3F]"
                  : selectedValues.includes && selectedValues.includes(option)
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-50"}
              `}
            >
              <input
                type={type === "multi" ? "checkbox" : "radio"}
                checked={
                  type === "multi"
                    ? selectedValues.includes(option)
                    : selectedValues === option
                }
                onChange={() => {}}
                className={type === "multi" ? "rounded" : "rounded-full"}
              />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;