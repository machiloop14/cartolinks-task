import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, ListRenderItem, Pressable, View } from "react-native";

const images = [
  require("../assets/images/posters/posterr1.png"),
  require("../assets/images/posters/poster2.png"),
  require("../assets/images/posters/poster3.png"),
  require("../assets/images/posters/poster4.png"),
  require("../assets/images/posters/posterr1.png"),
];

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const renderPoster: ListRenderItem<number> = ({ item, index }) => {
    const isSelected = selectedIndex === index;

    return (
      <Pressable onPress={() => setSelectedIndex(index)}>
        <View
          // className="w-[100px] h-32"
          className={`${isSelected ? "border-white border-4 p-[2px] rounded-xl" : "border-0 p-0 rounded-none"} w-[100px] h-36`}
        >
          <Image
            source={item}
            className="w-full h-full rounded-xl"
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View className="w-full pl-4">
      <FlatList
        data={images}
        renderItem={renderPoster}
        keyExtractor={(_, index) => index.toString()} // since require() has no id
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        contentContainerStyle={{ gap: 8, paddingRight: 8 }}
      />
    </View>
  );
};

export default Slider;
