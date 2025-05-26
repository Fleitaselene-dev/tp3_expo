import { View, Image } from "react-native";

export default function GaleriaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 , backgroundColor: 'lightblue'}}>
      <Image
        source={{ uri: "https://pa1.aminoapps.com/6345/86405a31f7ea0a17a326fb3387b69afdcda49b6b_00.gif" }}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
    </View>
  );
}
