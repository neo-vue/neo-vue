import { App, Ref, ShallowReactive } from 'vue';

export type NeoVue = {
  install(app: any, options: any): any;
};

declare module 'vue' {
  interface ComponentCustomProperties {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }
}

export type NeoOptions = {
  theme: NeoTheme;
};

export type NeoTheme = {
  scheme?: 'light' | 'dark';
  schemeColors?: {
    dark: string;
    light: string;
  };
  primary?: string;
  secondary?: string;
  accent?: string;
  error?: string;
  info?: string;
  success?: string;
  warning?: string;
  borderColor?: string;
  shadowColor?: string;
};

export function useTheme(): {
  theme: Ref<NeoTheme>;
  darkMode: Ref<boolean>;
  setTheme: (newTheme: NeoTheme) => void;
  setDarkMode: (value: boolean) => void;
};

export const NeoVue: NeoVue;
