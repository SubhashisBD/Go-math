import React, { useReducer, useContext, createContext } from "react";
import Mockdata from "./Mockdata";

export const SET_ACTIVE_SUBJECT = "SET_ACTIVE_SUBJECT";
export const SET_FILTERS = "SET_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SET_OPEN_DROPDOWN = "SET_OPEN_DROPDOWN";

export const setActiveSubject = (subject) => ({
  type: SET_ACTIVE_SUBJECT,
  payload: subject,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const setOpenDropdown = (dropdown) => ({
  type: SET_OPEN_DROPDOWN,
  payload: dropdown,
});

export const initialState = {
  activeSubject: "Physics",
  openDropdown: null,
  filters: {
    class: [],
    units: [],
    status: "",
    weakChapters: false,
  },
  subjects: [
    {
      id: "Physics",
      name: "Physics PYQs",
      icon: "Zap",
      bgColor: "bg-orange-500",
    },
    {
      id: "Chemistry",
      name: "Chemistry PYQs",
      icon: "Activity",
      bgColor: "bg-green-500",
    },
    {
      id: "Mathematics",
      name: "Mathematics PYQs",
      icon: "Calculator",
      bgColor: "bg-blue-500",
    },
  ],
};

export const subjectReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_SUBJECT:
      return {
        ...state,
        activeSubject: action.payload,
        openDropdown: null,
        filters: {
          class: [],
          units: [],
          status: "",
          weakChapters: false,
        },
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          class: [],
          units: [],
          status: "",
          weakChapters: false,
        },
      };
    case SET_OPEN_DROPDOWN:
      return {
        ...state,
        openDropdown:
          state.openDropdown === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

const SubjectContext = createContext();

export const useSubjectStore = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error("useSubjectStore must be used within a SubjectProvider");
  }
  return context;
};

export const SubjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(subjectReducer, initialState);

  const store = {
    state,
    dispatch,
    Mockdata,

    setActiveSubject: (subject) => dispatch(setActiveSubject(subject)),
    setFilters: (filters) => dispatch(setFilters(filters)),
    clearFilters: () => dispatch(clearFilters()),
    setOpenDropdown: (dropdown) => dispatch(setOpenDropdown(dropdown)),
  };

  return (
    <SubjectContext.Provider value={store}>{children}</SubjectContext.Provider>
  );
};
