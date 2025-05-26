import { View, Text, Image } from "react-native";

export default function PerfilScreen() {
  return (
  <View style={{ backgroundColor: 'pink', flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: "https://i.pravatar.cc/200" }}
        style={{ width: 100, height: 100, borderRadius: 30 }}
      />
      <Text style={{ marginTop: 10, fontSize: 18, color: 'white', fontWeight: "bold" }}>Selene Camila Fleita</Text>
    </View>
  );
}
