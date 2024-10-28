import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ProductNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "MY PROFILE",
        }}
      />
      
      <Stack.Screen name="history" />
      {/* <Stack.Screen name="../../profile" /> */}
    </Stack>
  );
}
