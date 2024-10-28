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


export default function TabTwoScreen() {
    const colorScheme = useColorScheme();
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
        <Link href="/sign-in">Goto LOGIN</Link>
      </ThemedText>
      <ThemedText>
        <Link href="/register">Goto REGISTER</Link>
      </ThemedText>

      <Link href="/(tabs)" asChild>
        <TouchableOpacity>
          <Text>Goto Home</Text>
        </TouchableOpacity>
      </Link>
      <Text>MODE : {JSON.stringify(colorScheme)}</Text>
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
