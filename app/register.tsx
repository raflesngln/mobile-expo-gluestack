import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

export default function SignIn() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState({
    username: "raflesngln@gmail.com",
    password: "123456",
  });

  const handlerInput = (name: any, e: any) => {
    // const { name, value } = e.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e,
    }));
    // console.log(JSON.stringify(name));
    // console.log(JSON.stringify(e));
  };
  const processRegister = () => {
    setLoading(true);
    console.log("sukses login");
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("sign-in" as never);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">REGISTER NEW USER</ThemedText>
      </ThemedView>
      <ThemedText>Please Register below</ThemedText>

      <SafeAreaView>
        {loading && (
          <Text className="text-center font-bold text-blue-600 text-xl">
            Processing...
          </Text>
        )}
        <TextInput
          data-name="username"
          style={styles.input}
          onChangeText={(e) => handlerInput("username", e)}
          value={formData.username}
        />
        <TextInput
          style={styles.input}
          data-name="password"
          //   name="password"
          onChangeText={(e) => handlerInput("password", e)}
          value={formData.password}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button
          onPress={processRegister}
          title="Register New"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
