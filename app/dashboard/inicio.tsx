import { View, Text, Image } from 'react-native';

export default function InicioScreen() {
 return (
    <View style={{ backgroundColor: 'pink', flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 10, color: 'white' }}>Home</Text>
      <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}>Buen día. ¿Cómo te sientes hoy?</Text>
      <Image
        source={{ uri: 'https://media.tenor.com/19enUrexSFIAAAAM/guten-morgen.gif' }}
        style={{ width: 250, height: 250, borderRadius: 20 }}
        resizeMode="contain"
        />
    </View>
  );
}
