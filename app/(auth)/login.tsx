import { Wordmark } from '@/components/ui';
import { colors, font, type } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Wordmark size={type.display} />
        <Text style={styles.subtitle}>Login — em breve</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.pearl,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  subtitle: {
    fontFamily: font.body,
    fontSize: type.body,
    color: colors.ink[500],
  },
});
