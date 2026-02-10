import { useTheme } from '../theme';

export function generateDefaultsProps(defaultValues?: any) {
  const { theme } = useTheme();
  return {
    color: {
      type: String,
      default: defaultValues?.color ?? theme.value?.schemeColors?.dark,
    },
    backgroundColor: {
      type: String,
      default: defaultValues?.backgroundColor ?? theme.value?.schemeColors?.light,
    },
    rounded: {
      type: [Boolean, String],
      default: defaultValues?.rounded ?? false,
    },
    shadow: {
      type: [Boolean, String],
      default: defaultValues?.shadow ?? true,
    },
    border: {
      type: [Boolean, String],
      default: defaultValues?.border ?? null,
    },
    width: {
      type: String,
      default: defaultValues?.width ?? null,
    },
    height: {
      type: String,
      default: defaultValues?.height ?? null,
    },
    padding: {
      type: String,
      default: defaultValues?.padding ?? null,
    },
  };
}
