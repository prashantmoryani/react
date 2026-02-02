import React, { createContext, useContext } from "react";

export const themeContext = createContext()

export const ThemeContextProvider = themeContext.Provider

export const useTheme = () => useContext(themeContext)