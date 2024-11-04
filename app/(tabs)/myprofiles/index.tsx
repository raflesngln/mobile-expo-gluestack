import { Button, Text, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {changeDarkMode} from '@/redux/apps/LoginSlice';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Modal() {
  const navigation = useNavigation();
  const dataLogin = useAppSelector((state) => state.login);
  const[layoutmode,setLayoutmode]=useState<any>('')
  const dispatch = useAppDispatch();


  const openHistory = () => {
    // navigation.navigate("modal");
    navigation.navigate("history" as never);
  };

  const changePassword = () => {
    navigation.navigate("profile/changePassword" as never);
  };

  const changePhotoScreen = () => {
    navigation.navigate("profile/changePhoto" as never);
  };

  const changeDarkModeLayout = async () => {
    dispatch(changeDarkMode('dark'));
    try {
      await AsyncStorage.setItem("darkMode", "dark"); // Update to 'dark'
      const darkMode = await AsyncStorage.getItem("darkMode");
    } catch (error) {
      console.error("Failed to update darkMode:", error);
    }
  };
  
  const changeLightModeLayout = async () => {
    dispatch(changeDarkMode('light'));
    try {
      // await AsyncStorage.setItem("darkMode", "light"); // Update to 'dark'
      await AsyncStorage.setItem("darkMode", "light"); // Update to 'dark'
      const darkMode = await AsyncStorage.getItem("darkMode");
    } catch (error) {
      console.error("Failed to update darkMode:", error);
    }
  };

  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mb-[30px]">MY PROFILE</Text>
      <View>
        <Text className="text-red-500">{JSON.stringify(dataLogin)}</Text>
        <Text className="text-red-500">
LOREM SJS
        </Text>
        <Button title="History" onPress={openHistory} />
        <Button title="changePassword" onPress={changePassword} />
        <Button title="changePhoto" onPress={changePhotoScreen} />
        <Button title="TO DARK" onPress={changeDarkModeLayout} />
        <Button title="To LIGHT" onPress={changeLightModeLayout} />
        <ThemedText>
          <Link href="/sign-in">LOG OUT</Link>
        </ThemedText>
      </View>
    </View>
  );
}
