import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Import NativeStackNavigationProp


type JobsStackParamList = {
  'index': undefined; // No parameters
  'detailJob': { id: number; title: string }; // Expecting `id` and `title`
  'addJob': undefined; // Expecting `id` and `title`
};

type JobsNavigatorProps = NativeStackNavigationProp<JobsStackParamList>;

export default function JobsNavigator() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Job",
        }}
      />
      <Stack.Screen
        name="detailJob"
        options={{
          title: "Detail Job",
        }}
      />
      <Stack.Screen
        name="addJob"
        options={{
          title: "Add Job",
        }}
      />
    </Stack>
  );
}
