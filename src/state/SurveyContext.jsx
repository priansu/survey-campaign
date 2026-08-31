import React, { createContext, useContext, useMemo, useReducer } from "react";
import { surveyReducer, initialState } from "./surveyReducer";

const SurveyContext = createContext(null);

export function SurveyProvider({ children }) {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  // Generic setter for any nested field: set(["styling","ctaButton","fontSize"], 18)
  const set = (path, value) => dispatch({ type: "SET_PATH", path, value });

  const value = useMemo(() => ({ state, dispatch, set }), [state]);

  return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>;
}

export function useSurvey() {
  const ctx = useContext(SurveyContext);
  if (!ctx) throw new Error("useSurvey must be used within a SurveyProvider");
  return ctx;
}
