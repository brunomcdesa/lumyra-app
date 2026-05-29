import { Platform, type TextStyle, type ViewStyle } from 'react-native';

/**
 * Tokens visuais do Lumyra — sage × lilás × branco perolado.
 * Fonte única da verdade (espelha docs/design/styles.css). Não inventar valores fora daqui (G6).
 */

export const colors = {
  // Primária — verde pastel (sage). green-500 passa AA-large em branco; usar green-700 em texto pequeno.
  green: {
    50: '#F1F6F2',
    100: '#E2EEE6',
    200: '#C5DDCC',
    300: '#A4C8B0',
    400: '#82B193',
    500: '#5C8A6F',
    600: '#4A7259',
    700: '#3B5A47',
    800: '#2D4435',
    900: '#1F2F25',
  },
  // Acento — lilás pastel
  lilac: {
    50: '#F7F4FB',
    100: '#EEE6F4',
    200: '#DECDE9',
    300: '#C6AEDA',
    400: '#AA8FC8',
    500: '#9173B5',
    600: '#785A98',
    700: '#5F477A',
    800: '#46365D',
    900: '#322747',
  },
  // Neutros — base branco perolado, levemente quentes
  ink: {
    900: '#1F1C28',
    800: '#2D2A38',
    700: '#3F3B4E',
    600: '#5B5768',
    500: '#7C7888',
    400: '#B6B2BE',
    300: '#D8D4DC',
    200: '#EAE7ED',
    100: '#F2F0F4',
    50: '#FAF9FC',
  },
  pearl: '#F9F8FB',
  white: '#FFFFFF',
  // Status — muted, alinhado ao sistema pastel
  amber: '#C6924A',
  amber50: '#FBF4EA',
  red: '#C46A6A',
  red50: '#FAEDED',
  blue: '#6E92C0',
  blue50: '#EFF3FA',
} as const;

export const radii = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 30,
  pill: 999,
} as const;

/**
 * Famílias de fonte. Os nomes batem com as chaves registradas em `useFonts` (app/_layout.tsx).
 * `display`/`body`/`mono` são os tokens-base (peso regular) conforme CLAUDE.md;
 * as variantes de peso/itálico existem porque o RN não sintetiza peso de famílias separadas.
 */
export const font = {
  display: 'Fraunces',
  displayMedium: 'Fraunces-Medium',
  displaySemibold: 'Fraunces-SemiBold',
  displayBold: 'Fraunces-Bold',
  displayItalic: 'Fraunces-Italic',
  displayMediumItalic: 'Fraunces-MediumItalic',
  body: 'Inter',
  bodyMedium: 'Inter-Medium',
  bodySemibold: 'Inter-SemiBold',
  bodyBold: 'Inter-Bold',
  mono: 'JetBrainsMono',
  monoMedium: 'JetBrainsMono-Medium',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 22,
  '2xl': 30,
} as const;

/** Escala tipográfica derivada do protótipo (styles.css). */
export const type = {
  hero: 38,
  display: 32,
  h1: 26,
  h2: 19,
  h3: 17,
  body: 15,
  label: 13,
  caption: 12,
  micro: 11,
} as const;

/**
 * Sombras minimalistas com tom da paleta. RN usa shadow* no iOS e elevation no Android.
 */
export const shadows = {
  sm: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#322747',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.04,
      shadowRadius: 3,
    },
    android: { elevation: 1 },
    default: {},
  }),
  md: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#322747',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
    },
    android: { elevation: 3 },
    default: {},
  }),
  lg: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#322747',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.08,
      shadowRadius: 22,
    },
    android: { elevation: 8 },
    default: {},
  }),
  green: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#5C8A6F',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.24,
      shadowRadius: 20,
    },
    android: { elevation: 8 },
    default: {},
  }),
  lilac: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#9173B5',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.22,
      shadowRadius: 20,
    },
    android: { elevation: 8 },
    default: {},
  }),
} as const;

/** Letter-spacing global do protótipo (em dp aproximado para a escala base). */
export const tracking: Pick<TextStyle, 'letterSpacing'> = {
  letterSpacing: -0.15,
};

export const theme = {
  colors,
  radii,
  font,
  spacing,
  type,
  shadows,
  tracking,
} as const;

export type Theme = typeof theme;
