import { useNavigation,Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ListProduk() {
  const navigation = useNavigation();

  const addProdukPage = () => {
    navigation.navigate("AddProduct");
  };
  const detailProdukPage = () => {
    navigation.navigate("DetailProduct");
  };
  const openrouteModal = () => {
    navigation.navigate("modal", { id: 9090, title: "lorem ipsum" });
  };
  const detailProdukPage2 = (id) => {
    navigation.navigate(`[id]`, { id:1323,title:"lorem ipsum dolor sit amet" });
  };

  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mb-[30px]">LIST Produk</Text>
      <View>
        <Text className="text-red-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          tenetur ea commodi laborum perferendis placeat cumque voluptatibus,
          autem laudantium accusamus recusandae eveniet accusantium quaerat
          labore, id soluta nemo rem neque.
        </Text>
        <Text className="text-gray-500">HAIAIAAI</Text>
      </View>
      <View>
        <Button title="ADD" onPress={addProdukPage} />
        <Button title="DETAIL" onPress={detailProdukPage} />
        <Button title="Modal" onPress={openrouteModal} />
        <Button title="DETAIL2" onPress={detailProdukPage2} />
      </View>
    </View>
  );
}