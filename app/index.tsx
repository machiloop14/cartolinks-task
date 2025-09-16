import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 pt-12  bg-black">
      <View className="pl-4 flex">
        <Ionicons name="close" size={32} color="#fff" />
      </View>
      <View className="flex flex-row w-full mt-10 border-b border-b-gray-800 px-4">
        <LinearGradient
          colors={["#0aadc9", "#705cfe"]} // gradient colors
          // colors={["#000", "#000"]} // gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="pb-[3px] flex w-1/2 items-center" // padding = border thickness
        >
          <View className="bg-black w-full flex items-center">
            <Text className="text-lg text-white font-bold pb-3">
              Smart script
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["#000", "#000"]} // gradient colors
          // colors={["#0aadc9", "#705cfe"]} // gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="pb-[3px] flex w-1/2 items-center" // padding = border thickness
        >
          <View className="bg-black w-full flex items-center">
            <Text className="text-lg text-gray-300 pb-3">Advanced script</Text>
          </View>
        </LinearGradient>
      </View>
      <View className="px-4">
        <Text className="mt-6 text-white text-xl font-psemibold">
          What type of posters do you want to create?
        </Text>
      </View>

      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaView>
  );
}
