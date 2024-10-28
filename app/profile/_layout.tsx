import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ProductNavigator() {
  return (
    <Stack   screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="changePassword" />
      <Stack.Screen name="changePhoto" />
      <Stack.Screen name="changeBio" />
    </Stack>
  );
}
