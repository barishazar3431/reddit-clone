import React, { useContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: (event?: React.SyntheticEvent) => void;
};

const initialContext: ThemeContextType = {
  isDarkTheme: false,
  toggleDarkTheme: () => {},
};

const ThemeContext = React.createContext(initialContext);

export default function ThemeProvider({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const isUserThemeDark = localStorage.getItem('theme') === 'dark';
      setIsDarkTheme(isUserThemeDark);
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setIsDarkTheme(isSystemThemeDark);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  return themeContext;
}
