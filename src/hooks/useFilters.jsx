import { useMemo } from "react";
import Mockdata from "../store/Mockdata";

export const useFilters = (activeSubject, filters = {}) => {
  const filterOptions = useMemo(() => {
    const subjectData = Mockdata.filter(
      (item) => item.subject === activeSubject
    );

    return {
      class: [...new Set(subjectData.map((item) => item.class))],
      units: [...new Set(subjectData.map((item) => item.unit))],
      status: ["Not Started", "In Progress", "Completed"],
    };
  }, [activeSubject, Mockdata]);

  const filteredData = useMemo(() => {
    let data = Mockdata.filter((item) => item.subject === activeSubject);

    if ((filters.class || []).length > 0) {
      data = data.filter((item) => (filters.class || []).includes(item.class));
    }

    if ((filters.units || []).length > 0) {
      data = data.filter((item) => (filters.units || []).includes(item.unit));
    }

    if (filters.status) {
      data = data.filter((item) => item.status === filters.status);
    }

    if (filters.weakChapters) {
      data = data.filter((item) => item.isWeakChapter);
    }

    return data;
  }, [activeSubject, filters, Mockdata]);

  const stats = useMemo(() => {
    const totalQuestions = filteredData.reduce((sum, item) => {
      return (
        sum +
        Object.values(item.yearWiseQuestionCount).reduce((a, b) => a + b, 0)
      );
    }, 0);

    return {
      chapters: filteredData.length,
      questions: totalQuestions,
    };
  }, [filteredData]);

  return {
    filterOptions,
    filteredData,
    stats,
  };
};
