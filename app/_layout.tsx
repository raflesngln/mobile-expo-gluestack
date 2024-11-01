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
// import ProductNavigator from "./produk/_layout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [datalogin, setDatalogin] = useState<any>();


  const setDataLocalStorage = async () => {
    let dataLogin = {
      UImode: "dark",
      token: "90242934",
      isLogin: true,
      email: "raflesnglN@gmail.com",
      name: "rafles",
    };
    const dataLoginString = JSON.stringify(dataLogin);
    try {
      await AsyncStorage.setItem("dataLogin", dataLoginString as never);
    } catch (e) {
      // saving error
      await AsyncStorage.setItem("dataLogin", '');
    }
  };
  
  useEffect(() => {
    setDataLocalStorage()
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
  const [datalogin, setDatalogin] = useState<any>();
  
  const getDataLogin = async () => {
    try {
      const valueLogin = await AsyncStorage.getItem('dataLogin');
      if (valueLogin !== null) {
        const dataLoginObject = JSON.parse(valueLogin);
        setDatalogin(dataLoginObject);
      }
    } catch (e) {
      // error reading value
      setDatalogin("");
    }
  };
  
  useEffect(() => {
    setTimeout(() => {
      getDataLogin()
    }, 300);
 
  }, []);
  const ModeUI = "dark";
  return (
    <GluestackUIProvider mode={datalogin?.UImode}>
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <ThemeProvider value={datalogin?.UImode === "dark" ? DarkTheme : DefaultTheme}>
        {/* <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
          {JSON.stringify(datalogin?.UImode)}
        </Text> */}
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
