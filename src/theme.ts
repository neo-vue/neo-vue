import { NeoOptions, NeoTheme } from './types';
import { ref, watch } from 'vue';

const theme = ref<NeoTheme>({});
const darkMode = ref(false);

export function useTheme() {
  return { theme, darkMode, setTheme, setDarkMode };
}

export function setTheme(newTheme: NeoTheme) {
  theme.value = newTheme;
}

export function setDarkMode(value: boolean) {
  darkMode.value = value;
}

/**
 * Initializes the theme for NeoVue components.
 * Sets CSS variables based on the provided options or defaults.
 * @param {NeoOptions} options - The options to configure the theme.
 */
export function initTheme(options?: NeoOptions) {
  if (options?.theme) {
    const _theme = options.theme;
    theme.value!.primary = _theme.primary ?? defaultTheme.primary;
    theme.value!.secondary = _theme.secondary ?? defaultTheme.secondary;
    theme.value!.accent = _theme.accent ?? defaultTheme.accent;
    theme.value!.error = _theme.error ?? defaultTheme.error;
    theme.value!.info = _theme.info ?? defaultTheme.info;
    theme.value!.success = _theme.success ?? defaultTheme.success;
    theme.value!.warning = _theme.warning ?? defaultTheme.warning;
    theme.value!.borderColor = _theme.borderColor ?? defaultTheme.borderColor;
    theme.value!.shadowColor = _theme.shadowColor ?? defaultTheme.shadowColor;
    theme.value!.schemeColors = _theme.schemeColors ?? defaultTheme.schemeColors;
  } else {
    setDefaultTheme();
  }
}

const defaultTheme: NeoTheme = {
  primary: '#1e88e5',
  secondary: '#424242',
  accent: '#82b1ff',
  error: '#fad2d2',
  info: '#d2eefa',
  success: '#e1fad2',
  warning: '#ffdcad',
  borderColor: '#2C3143',
  shadowColor: '#2C3143',
  schemeColors: {
    dark: 'black',
    light: 'white',
  },
};

function setDefaultTheme() {
  theme.value = defaultTheme;
}

watch(
  () => theme,
  (newTheme) => {
    if (newTheme) {
      document.documentElement.style.setProperty('--neo-primary', newTheme.value!.primary || defaultTheme.primary!);
      document.documentElement.style.setProperty(
        '--neo-secondary',
        newTheme.value!.secondary || defaultTheme.secondary!,
      );
      document.documentElement.style.setProperty('--neo-accent', newTheme.value!.accent || defaultTheme.accent!);
      document.documentElement.style.setProperty('--neo-error', newTheme.value!.error || defaultTheme.error!);
      document.documentElement.style.setProperty('--neo-info', newTheme.value!.info || defaultTheme.info!);
      document.documentElement.style.setProperty('--neo-success', newTheme.value!.success || defaultTheme.success!);
      document.documentElement.style.setProperty('--neo-warning', newTheme.value!.warning || defaultTheme.warning!);
      document.documentElement.style.setProperty(
        '--neo-border-color',
        newTheme.value!.borderColor || defaultTheme.borderColor!,
      );
      document.documentElement.style.setProperty(
        '--neo-shadow-color',
        newTheme.value!.shadowColor || defaultTheme.shadowColor!,
      );
      document.documentElement.style.setProperty(
        '--neo-scheme-dark-color',
        newTheme.value!.schemeColors?.dark || defaultTheme.schemeColors?.dark!,
      );
      document.documentElement.style.setProperty(
        '--neo-scheme-light-color',
        newTheme.value!.schemeColors?.light || defaultTheme.schemeColors?.light!,
      );
    }
  },
  { deep: true },
);
