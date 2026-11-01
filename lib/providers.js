'use client';
import { useState, createContext, useContext } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import styled, { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../design-system/tokens';
import GlobalStyle from '../design-system/GlobalStyle';

const ThemeToggleCtx = createContext(() => {});
export const useThemeToggle = () => useContext(ThemeToggleCtx);

export default function Providers({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet());
  const [mode, setMode] = useState('light');

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  const toggle = () => setMode(m => (m === 'light' ? 'dark' : 'light'));
  const tree = (
    <ThemeToggleCtx.Provider value={toggle}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeToggleCtx.Provider>
  );

  if (typeof window !== 'undefined') return tree;
  return <StyleSheetManager sheet={sheet.instance}>{tree}</StyleSheetManager>;
}