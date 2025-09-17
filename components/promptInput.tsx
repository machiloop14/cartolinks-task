import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

const PromptInput = () => {
  const [userPrompt, setUserPrompt] = useState<string | undefined>("");

  return (
    <View className="bg-[#161819] mx-4 mt-5 flex rounded-xl p-3 gap-2">
      <View className="w-[90%]">
        <TextInput
          value={userPrompt}
          onChangeText={(text) => setUserPrompt(text)}
          className="outline-none h-36 text-[15px] text-white font-pregular"
          multiline={true}
          placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting"
          placeholderTextColor="white"
        />
      </View>

      <View className="pl-4 flex self-end pb-2">
        <MaterialCommunityIcons
          name="image-plus-outline"
          size={28}
          color="white"
        />
      </View>
    </View>
  );
};

export default PromptInput;
