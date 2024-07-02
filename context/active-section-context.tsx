"use client";
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";
type ActiveSectionContextProviderProps = {
  children:ReactNode;
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection:Dispatch<SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick:Dispatch<SetStateAction<number>>
}
//initialization for the context
export const ActiveSectionContext =
createContext<ActiveSectionContextType | null>(null);
//creating a function provider 
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); 
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
// using the context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      )
    }
  return context;
}
