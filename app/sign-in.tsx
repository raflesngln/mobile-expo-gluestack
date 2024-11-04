import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  View
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
// import { useColorScheme } from "@/hooks/useColorScheme";
import { useColorScheme } from 'react-native';



export default function SignIn() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    // <View className=" bg-red-300">
      <ParallaxScrollView
        // headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
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
            className=" rounded-xl border-gray-400 focus:border-blue-600 light:bg-gray-900 light:text-white"
            onChangeText={(e) => handlerInput("username", e)}
            placeholder="Your username "
            value={formData.username}
          />
          <TextInput
            style={styles.input}
            className=" rounded-xl border-gray-400 focus:border-blue-600 light:bg-gray-900 light:text-white"
            data-name="password"
            //   name="password"
            onChangeText={(e) => handlerInput("password", e)}
            value={formData.password}
            placeholder="Your password "
            keyboardType="numeric"
          />

          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="bg-red-600 rounded-2xl px-10 mt-8 "
            onPress={processLogin}
            isDisabled={false}
          >
            <ButtonText>SIGN-IN</ButtonText>
          </Button>
          <Text className=" text-red-600">{JSON.stringify(colorScheme)}</Text>
          <Text className=" text-red-500">colorMode {JSON.stringify(colorScheme)}</Text>
        </SafeAreaView>
      </ParallaxScrollView>
    // </View>
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
