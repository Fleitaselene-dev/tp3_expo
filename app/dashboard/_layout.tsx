import {  Tabs } from "expo-router";

export default function DashboardLayout() {
  return (
   <Tabs
      screenOptions={{
        tabBarPosition: "top",
        headerTintColor: "hotpink", 
        tabBarActiveTintColor: "hotpink",
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <Tabs.Screen name="inicio" options={{ title: "Inicio" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
      <Tabs.Screen name="galeria" options={{ title: "BarbieGalery" }} />
      <Tabs.Screen name="kaito" options={{ title: "Kaito" }} />
      <Tabs.Screen name="tableros" options={{ title: "Tableros" }} />
    </Tabs>
  );
}