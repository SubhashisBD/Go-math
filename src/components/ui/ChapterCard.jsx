import React from "react";
import { Card, CardContent } from "./card";
import { ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import { getChapterIcon } from "../../app/utils/iconUtils";

const ChapterCard = ({ item, darkMode }) => {
  const ChapterIcon = getChapterIcon(item.chapter);
  const totalQuestions = Object.values(item.yearWiseQuestionCount).reduce(
    (a, b) => a + b,
    0
  );
  const score2025 = item.yearWiseQuestionCount[2025] || 0;
  const score2024 = item.yearWiseQuestionCount[2024] || 0;

  const getTrendIcon = () => {
    if (score2025 > score2024) {
      return <TrendingUp className="w-3 h-3 text-green-400 inline ml-1" />;
    } else if (score2025 < score2024) {
      return <TrendingDown className="w-3 h-3 text-red-400 inline ml-1" />;
    }
    return null;
  };

  return (
    <Card
      className={`h-auto min-h-[56px] border rounded-xl transition-shadow cursor-pointer px-2 py-2 sm:px-4 sm:py-4
      ${
        darkMode
          ? "border-[#3A4661] bg-[#222E3F] hover:bg-[#26324A]"
          : "border-[#D1D8E0] bg-white hover:shadow-md"
      }
    `}
    >
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`w-8 h-8 p-2 rounded-lg flex items-center justify-center ${
                darkMode ? "bg-[#26324A]" : "bg-gray-100"
              }`}
            >
              <ChapterIcon
                className={`w-5 h-5 ${
                  darkMode ? "text-[#AAB4C2]" : "text-gray-600"
                }`}
              />
            </div>
            <div>
              <h3
                className={`font-medium text-sm sm:text-base truncate max-w-[180px] sm:max-w-[260px] ${
                  darkMode ? "text-[#E6EAF3]" : "text-gray-900"
                }`}
              >
                {item.chapter}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-8 w-full sm:w-auto justify-between">
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm ${
                darkMode ? "text-[#AAB4C2]" : "text-gray-600"
              }`}
            >
              <span>
                2025: {score2025}s {getTrendIcon()}
              </span>
              <span
                className={`${darkMode ? "text-[#3A4661]" : "text-gray-400"}`}
              >
                |
              </span>
              <span>2024: {score2024}s</span>
            </div>
            <div
              className={`text-xs sm:text-sm font-medium whitespace-nowrap ${
                darkMode ? "text-[#E6EAF3]" : "text-gray-900"
              }`}
            >
              {item.questionSolved}/{totalQuestions} Qs
            </div>
            <ChevronRight
              className={`w-4 h-4 ${
                darkMode ? "text-[#AAB4C2]" : "text-gray-400"
              }`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ChapterCard;
