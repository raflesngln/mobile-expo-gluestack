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
// import ProductNavigator from "./produk/_layout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

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
      const currentMode = await AsyncStorage.getItem("darkMode");
      await AsyncStorage.setItem("dataLogin", dataLoginString as never);
          if (currentMode === null) {
            // Key doesn't exist, so set to "light"
            await AsyncStorage.setItem("darkMode", "light");
            console.log("darkMode set to light as it was not previously set.");
          } else {
            console.log("darkMode already exists:", currentMode);
          }
    } catch (e) {
      // saving error
      await AsyncStorage.setItem("dataLogin", "");
      await AsyncStorage.setItem("darkMode", "");
    }
  };

  useEffect(() => {
    setDataLocalStorage();
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
  const [darkmode, setDarkMode] = useState<any>();
  const [cekdarkmode, setcekdarkMode] = useState<any>();

  const getDataLogin = async () => {
    try {
      const valueLogin = await AsyncStorage.getItem("dataLogin");
      const darkMode = await AsyncStorage.getItem("darkMode");
      const loginDatas: any = await AsyncStorage.getItem("persist:rootApp");
      if (valueLogin !== null) {
        const dataLoginObject = JSON.parse(valueLogin);
        const LoginObjectRedux = JSON.parse(loginDatas);
        const loginRedux = JSON.parse(LoginObjectRedux.login);

        setDatalogin(dataLoginObject);
        setDarkMode(loginRedux);
        setcekdarkMode(darkMode);
        console.log(loginRedux);
      }
    } catch (e) {
      // error reading value
      setDatalogin("");
      setDarkMode("");
    }
  };

  const changeDarkModeLayout = async () => {
    try {
      await AsyncStorage.setItem("darkMode", "dark"); // Update to 'dark'
      const darkMode = await AsyncStorage.getItem("darkMode");
      setcekdarkMode(darkMode);
    } catch (error) {
      console.error("Failed to update darkMode:", error);
    }
  };
  const changeLightModeLayout = async () => {
    try {
      // await AsyncStorage.setItem("darkMode", "light"); // Update to 'dark'
      await AsyncStorage.setItem("darkMode", "light"); // Update to 'dark'
      const darkMode = await AsyncStorage.getItem("darkMode");
      setcekdarkMode(darkMode);
    } catch (error) {
      console.error("Failed to update darkMode:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getDataLogin();
    }, 300);
  }, []);
  const ModeUI = "dark";
  return (
    // <GluestackUIProvider mode={datalogin?.UImode}>
    <GluestackUIProvider mode={cekdarkmode}>
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <Provider store={store}>
        <ThemeProvider
          value={cekdarkmode === "dark" ? DarkTheme : DefaultTheme}
        >
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
            MODES: {JSON.stringify(datalogin?.UImode)}
          </Text>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
            REDUX: {JSON.stringify(darkmode)}
          </Text>
          <Text style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}>
            STS MODE: {JSON.stringify(cekdarkmode)}
          </Text>

          <Button title="Change TO DARK" onPress={changeDarkModeLayout} />
          <Button title="Change to  LIGHT" onPress={changeLightModeLayout} />
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
      </Provider>
    </GluestackUIProvider>
  );
}

// const GetUIMode = () => {
//   const [datalogin, setDatalogin] = useState<any>();
//   const [storageData, setStorageData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const keys = await AsyncStorage.getAllKeys();
//         const result = await AsyncStorage.multiGet(keys);

//         // Convert the result into an object for easier viewing
//         const data = result.reduce((acc, [key, value]) => {
//           acc[key] = value;
//           return acc;
//         }, {});

//         setStorageData(data);
//       } catch (error) {
//         console.error("Error retrieving data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // return JSON.stringify(storageData)
//   return "RN";
// };

// export default function RootLayoutNav() {
//   return (
//     <Layout>
//       {/* Your app's content here */}
//       <ProductNavigator/>
//     </Layout>
//   );
// }
