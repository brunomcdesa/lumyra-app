import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function TrainingDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-textPrimary">Treino {id} — em breve</Text>
    </View>
  );
}
