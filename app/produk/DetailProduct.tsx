import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold mb-[30px]">DETAIL Produk</Text>
      <View>
        <Text className=" text-wrap">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
      </View>
    </View>
  );
}
