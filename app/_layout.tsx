import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, StyleSheet, Button, Text } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
// import ProductNavigator from "./produk/_layout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <RootLayoutNav />;
  // return (
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       <Stack.Screen name="+not-found" />
  //     </Stack>
  //   </ThemeProvider>
  // );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <Layout> */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ headerShown: true, presentation: "modal" }}
          />
          {/* <Stack.Screen name="produk" options={{title:"PRODUK" }}/> */}
          {/* <Stack.Screen name="produk" options={{title:"PRODUK" }}/> */}
          <Stack.Screen name="produk" options={{ title: "PRODUK" }} />
          {/* ListProduct
        DetailProduct
        AddProduct */}
          {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
          {/* <ProductNavigator /> */}
        </Stack>
        {/* </Layout> */}
      </ThemeProvider>
    </GluestackUIProvider>
  );
}

// export default function RootLayoutNav() {
//   return (
//     <Layout>
//       {/* Your app's content here */}
//       <ProductNavigator/>
//     </Layout>
//   );
// }
