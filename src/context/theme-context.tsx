import React, { createContext, useState } from 'react'

type ThemeType = 'light' | 'dark'

type ThemeContextType = {
  theme: ThemeType
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>
}

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
})

const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const value: ThemeContextType = {
    theme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
