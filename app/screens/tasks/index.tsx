import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function TaskIndex() {
  return (
    <View className="h-full justify-center gap-5 items-center">
      <Stack.Screen options={{ title: "Tasks", headerTitleAlign: "center" }} />
      <TouchableOpacity className="">
        <Link href="./login" className="mt-5 mb-2" asChild>
          <Pressable>
            <Text className="text-[#e1475b] text-lg">Emma</Text>
          </Pressable>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Joy</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Leon</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Reagan</Text>
      </TouchableOpacity>
      <TouchableOpacity className="">
        <Text>Scout</Text>
      </TouchableOpacity>
    </View>
  );
}
