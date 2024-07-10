import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Camera } from "lucide-react-native";

export default function login() {
  function handlelogih(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "settings", headerTitleAlign: "center" }}
      />
      <View>
        <View>
          <Text>icon</Text>
        </View>
        <View>
          <Text className="font-normal text-base[17px] leading-5 tracking-tighter[0-43em]">
            Notifications
          </Text>
        </View>
        <View>
          <Text>sweetch</Text>
        </View>
      </View>
    </View>
  );
}
