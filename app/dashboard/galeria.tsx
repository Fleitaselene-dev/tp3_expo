import { ScrollView, Image, Text, View } from "react-native";

export default function GaleriaScreen() {
  return (
 <ScrollView style={{ backgroundColor: "pink", flex: 1, padding: 20 }}  contentContainerStyle={{ alignItems: "center" }}>    
      <Text style={{ fontSize: 20, textAlign: "center", margin: 10, color: 'white', fontWeight: "bold" }}>Barbies Era</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 18  }}>
        <Image
          source={{ uri: `https://d.newsweek.com/en/full/2107834/original-barbie-doll-1959.png?w=1600&h=1600&q=88&f=98486671950a36d6717b7c492cea3509` }}
          style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        <Image
         source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRPEW_G7B8gRWFeRAhnz7QrAM-44JJg-BTQ&s` }}
        style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        <Image
         source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyQQET5t6AEbry0YoqwnVnmzeCAStqVi0SQf5eAeEiN1xtq1BiakOCBVzlo_0nWrcsJM&usqp=CAU` }}
        style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        <Image
         source={{ uri: `https://www.deilataylor.com/wp-content/uploads/2011/12/barbie-first-one-e1374293524126.jpg` }}
        style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        <Image
         source={{ uri: `https://m.media-amazon.com/images/S/aplus-media-library-service-media/6f921d8a-b4fc-46e5-89a9-94813241e45f.__CR0,148,2000,2000_PT0_SX300_V1___.jpg` }}
        style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        <Image
         source={{ uri: `https://lh7-us.googleusercontent.com/OPlieQ5JGC7SblaBF1obwEiViWmH-Da5pTXLJ2sDYBtuH6rZP6165LcHJhX27vvarEqQt_QatVwCRj2od3BnIhktQyvuIyag7EViW7siUuVROwcr3qrfezdd49PiW61x846XXA5oMaBLfyjH635l1V0` }}
        style={{ margin: 8, height: 200, width:200, borderRadius: 10 }}
        />
        
        </View>
    </ScrollView>
  );
}
