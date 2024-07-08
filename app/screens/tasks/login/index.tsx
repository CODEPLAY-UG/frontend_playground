import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function login() {
  function handlelogih(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "settings", headerTitleAlign: "center" }}
      />
      <Text className="">Notifications</Text>
      <Text className="">
        This allows us to send you proms, deals among things
      </Text>
      <View className="">
        <Pressable className="">
          <Text className="">Privacy</Text>
          <Text className="">Manager the data you share with us</Text>
        </Pressable>
        <Text className="">Appearance</Text>
        <Text className="">Select how you want your app to look like</Text>
        <Pressable className="">
          <Text className=""></Text>
        </Pressable>
        <Pressable className="">
          <Text className="">Communication</Text>
          <Text className="">Choose your preferred contact methods</Text>
        </Pressable>
        <Pressable className="">
          <Text className="">Next</Text>
        </Pressable>
      </View>
    </View>
  );
}
