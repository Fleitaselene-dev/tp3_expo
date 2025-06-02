import { Text, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { tableros } from '@/constants/data';

export default function PinScreen() {
  const { idTableros, idPin } = useLocalSearchParams();

  const tablero = tableros.find((t) => t.id === idTableros);
  const pin = tablero?.pines.find((p) => p.id === idPin);

  if (!pin) return <Text>Pin no encontrado</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, justifyContent: 'center', marginBottom: 16, alignItems: 'center', }}>
      <Image
        source={pin.imagen}
        style={{ width: 400, height: 400, borderRadius: 12 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
        {pin.texto}
      </Text>
    </ScrollView>
  );
}
