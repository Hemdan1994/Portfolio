"use client";

import { createContext, useContext, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";

type Attribute = 'class' | 'data-theme' | 'data-mode';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  forcedTheme?: string;
  attribute?: Attribute | Attribute[];
};

export function ThemeProvider({ 
  children,
  defaultTheme = "dark",
  storageKey = "theme",
  attribute = "class",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      attribute={attribute}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const useTheme = useNextTheme;