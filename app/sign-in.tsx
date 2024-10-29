import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";

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

  const processLogin = () => {
    setLoading(true);
    console.log("sukses login");
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("(tabs)" as never);
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
        <ThemedText type="title">
          <Text className=" text-blue-600"> SIGN-IN</Text>
        </ThemedText>
      </ThemedView>
      <ThemedText
        style={styles.titleContainer}
        className="text-gray-400 text-center"
      >
        Please Sign-In below
      </ThemedText>

      <SafeAreaView>
        <Center>
          {loading && (
            <Text className="text-center font-bold text-blue-600 text-xl">
              Processing...
            </Text>
          )}
        </Center>
        <TextInput
          data-name="username"
          style={styles.input}
          className=" rounded-xl border-gray-400 "
          onChangeText={(e) => handlerInput("username", e)}
          value={formData.username}
        />
        <TextInput
          style={styles.input}
          className=" rounded-xl border-gray-400 "
          data-name="password"
          //   name="password"
          onChangeText={(e) => handlerInput("password", e)}
          value={formData.password}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />

        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="bg-red-600 rounded-2xl px-10 "
          onPress={processLogin}
        >
          <ButtonText>SIGN-IN</ButtonText>
        </Button>
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
    // flexDirection: "row",
    // gap: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
