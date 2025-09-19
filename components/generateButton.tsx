import { Image } from "expo-image";
import { Pressable, Text } from "react-native";

const GenerateButton = () => {
  return (
    <Pressable className="mx-4 bg-white flex gap-3 flex-row items-center justify-center py-3 mt-20 mb-4 rounded-xl">
      <Image
        source={require("../assets/images/generate/cropped_circle.png")}
        style={{ width: 45, height: 45 }}
      />

      <Text className="font-pmedium text-2xl text-black">Generate</Text>
    </Pressable>
  );
};

export default GenerateButton;
