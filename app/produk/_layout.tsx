import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function ProductNavigator() {
  return (
    <Stack>
      <Stack.Screen
        name="ListProduct"
        options={{
          title: "List Product",
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        options={{
          title: "Detail Product",
        }}
      />
      <Stack.Screen
        name="AddProduct"
        options={{
          title: "Add Product",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Detail Product's",
        }}
      />
    </Stack>
  );
}
