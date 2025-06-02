import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { tableros } from '@/constants/data';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 5, padding: 20, marginBottom: 16, marginHorizontal: 4 }}>
      <FlatList data={tableros} keyExtractor={(item) => item.id} numColumns={2} columnWrapperStyle={{ justifyContent: 'center', marginBottom: 16, gap: 18 }}
renderItem={({ item }) => (
<Pressable
  onPress={() => router.push({ pathname: "/dashboard/tableros/[idTableros]", params: { idTableros: String(item.id) } })}
  style={{ marginBottom: 16 }}
>
            <Image source={item.pines[0].imagen}style={{ width: 300, height: 300, borderRadius: 12,  }} resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
              {item.titulo}
            </Text>
            <Text>{item.descripcion}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
