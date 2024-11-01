import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button } from "@/components/ui/button";

import { useColorsMode } from "@/hooks/useColorsMode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const colorMode = useColorsMode();
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
    getDataLogin();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Application System</ThemedText>
      </ThemedView>
      <ThemedText>This the first routes is run.</ThemedText>

      <ThemedText>
        <Link href="/sign-in">LOCALSTORAGEss {JSON.stringify(datalogin?.email)} asad</Link>
      </ThemedText>
      <ThemedText>
        <Link href="/sign-in">Goto LOGIN</Link>
      </ThemedText>
      <ThemedText>
        <Link href="/register">REGISTER New</Link>
      </ThemedText>

      <Link href="/(tabs)" asChild>
        <TouchableOpacity>
          <ThemedText>Goto Home</ThemedText>
        </TouchableOpacity>
      </Link>
      <ThemedText>MODE : {JSON.stringify(colorScheme)}</ThemedText>
      <ThemedText>colorMode : {JSON.stringify(colorMode)}</ThemedText>
      <Button className=" bg-red-500 dark:bg-teal-500">
        <Text style={{ color: colorMode.text }}>HELLOO</Text>
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
