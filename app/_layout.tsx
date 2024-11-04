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
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { View, StyleSheet, Button, Text } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeDarkMode } from "@/redux/apps/LoginSlice";
// import ProductNavigator from "./produk/_layout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
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
  const reduxDarkMode:any = useAppSelector((state) => state.login.UImode); // get data UI from redex slices
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      // getDataLogin();
    }, 300);
  }, []);
  return (
    // <GluestackUIProvider mode={datalogin?.UImode}>
    <GluestackUIProvider mode={reduxDarkMode}>
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      {/* <Provider store={store}> */}
      <ThemeProvider value={reduxDarkMode === "dark" ? DarkTheme : DefaultTheme}>
        {/* <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
          GetUIMode: {JSON.stringify(reduxDarkMode)}
        </Text> */}
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
      </ThemeProvider>
      {/* </Provider> */}
    </GluestackUIProvider>
  );
}

