import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailData() {
    const { id,title } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold mb-[30px]">DETAIL Produk</Text>
      <View>
        <Text className="text-red-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
      </View>
      <Text>Get ID params : {id}</Text>
      <Text>Get title params :  {title}</Text>
    </View>
  );
}

