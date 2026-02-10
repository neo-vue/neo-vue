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
