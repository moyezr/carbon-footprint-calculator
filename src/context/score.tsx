"use client";

import {
  Context,
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

type ScoreType = {
  food: number;
  members: number;
  purchases: number;
  recycle: number;
  size: number;
  transportation: number;
  waste: number;
  water: number;
};

type ScoreContextType = {
  score: ScoreType;
  dispatch: Dispatch<{
    value: number;
    type: string;
  }>;
};

const initialState = {
  food: 0,
  members: 0,
  purchases: 0,
  recycle: 0,
  size: 0,
  transportation: 0,
  waste: 0,
  water: 0,
};

const ScoreContext = createContext<ScoreContextType | null>(null);

const reducerFn = (
  state: ScoreType,
  action: { value: number; type: string }
) => {
  switch (action.type) {
    case "MEMBERS":
      return { ...state, members: action.value };
    case "SIZE":
      return { ...state, size: action.value };
    case "FOOD":
      return { ...state, food: action.value };
    case "WATER":
      return { ...state, water: action.value };
    case "PURCHASES":
      return { ...state, purchases: action.value };
    case "WASTE":
      return { ...state, waste: action.value };
    case "RECYCLE":
      return { ...state, recycle: action.value };
    case "TRANSPORTATION":
      return { ...state, transportation: action.value };
    default:
      return state;
  }
};

export const ScoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  console.log("SCORE -> ", state);

  return (
    <ScoreContext.Provider value={{ score: state, dispatch }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => useContext(ScoreContext) as ScoreContextType;
