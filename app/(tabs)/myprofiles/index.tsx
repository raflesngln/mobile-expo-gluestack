import { Button, Text, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function Modal() {
  const navigation = useNavigation();

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

  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mb-[30px]">MY PROFILE</Text>
      <View>
        <Text className="text-red-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
        <Button title="History" onPress={openHistory} />
        <Button title="changePassword" onPress={changePassword} />
        <Button title="changePhoto" onPress={changePhotoScreen} />
        <ThemedText>
          <Link href="/sign-in">LOG OUT</Link>
        </ThemedText>
      </View>
    </View>
  );
}
