import { colors, font, radii } from '@/constants/theme';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WordmarkProps {
  /** Tamanho da tipografia do wordmark em dp. O mark orbital escala junto. */
  size?: number;
  /** Cor do texto. Padrão: ink-900. */
  color?: string;
  /** Exibir o mark orbital (círculo sage→lilás) à esquerda. */
  mark?: boolean;
}

/**
 * Wordmark "lumyra" — serif minúsculo em Fraunces itálico, com mark orbital opcional.
 * Fiel a docs/design/ui.jsx (MFLogo). Único lugar canônico da marca.
 */
export const Wordmark = memo(
  ({ size = 21, color = colors.ink[900], mark = true }: WordmarkProps) => {
    const markSize = size * 1.5;

    return (
      <View
        accessible
        accessibilityRole="header"
        accessibilityLabel="lumyra"
        style={styles.row}
      >
        {mark && (
          <View
            style={[
              styles.mark,
              { width: markSize, height: markSize, borderRadius: radii.pill },
            ]}
          >
            <View
              style={[
                styles.core,
                { width: markSize * 0.32, height: markSize * 0.32 },
              ]}
            />
          </View>
        )}
        <Text allowFontScaling style={[styles.text, { fontSize: size, color }]}>
          lumyra
        </Text>
      </View>
    );
  },
);

Wordmark.displayName = 'Wordmark';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  mark: {
    backgroundColor: colors.green[300],
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    backgroundColor: colors.white,
    borderRadius: radii.pill,
  },
  text: {
    fontFamily: font.displayMediumItalic,
    letterSpacing: -0.3,
  },
});
