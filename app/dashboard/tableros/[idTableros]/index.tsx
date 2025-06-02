import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { tableros } from '@/constants/data';

export default function TableroScreen() {
  const { idTableros } = useLocalSearchParams();
  const router = useRouter();

  const tablero = tableros.find((t) => t.id === idTableros);

  if (!tablero) {
    return <Text>Tablero no encontrado</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 18 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
        {tablero.titulo}
      </Text>
      <FlatList
        data={tablero.pines}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'center', marginBottom: 16, gap: 18 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: '/dashboard/tableros/[idTableros]/pines/[idPin]',
                params: { idTableros: String(idTableros), idPin: String(item.id) },
              })
            }
            style={{ flex: 1, marginBottom: 16, marginHorizontal: 4 }}
          >
            <Image
              source={item.imagen}
              style={{ width: 300, height: 300, borderRadius: 10 }}
              resizeMode="cover"
            />
            <Text style={{ marginTop: 6 }}>{item.texto}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
