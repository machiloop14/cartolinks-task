import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";

const Settings = () => {
  return (
    <View className="px-4 mt-6">
      <Text className="text-[#919093] font-pregular mb-2">Settings</Text>
      <View className="bg-[#161819] px-4 rounded-md">
        <View className="flex flex-row justify-between border-b border-[#1F2122] py-4">
          <Text className="text-white font-pregular">Size</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-[#B2B4B5] font-pregular">1080 x 1920 px</Text>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#7E8182" />
          </View>
        </View>
        <View className="flex flex-row justify-between py-4">
          <Text className="text-white font-pregular">Category</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-[#B2B4B5]  font-pregular">
              Foods and beverage
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={18} color="#7E8182" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
