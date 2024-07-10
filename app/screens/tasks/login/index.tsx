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
      <View className="flex-row">
        <View>
          <Camera color="black" size={48} />
          <Text>icon</Text>
        </View>
        <View>
          <Text className="font-normal text-base[17px] leading-5 tracking-tighter[0-43em]">
            Notifications
          </Text>
        </View>
        <View>
          <Text>This allows us to send you promos, deals among things</Text>
        </View>
        <View>
          <Camera color="black" size={48} />
          <Text>sweetch</Text>
        </View>
      </View>

      <View className="flex-row">
        <View>
          <Camera color="black" size={48} />
          <Text>Rock</Text>
        </View>
        <View>
          <Text className="font-normal text-base[17px] leading-5 tracking-tighter[0-43em]">
            Privacy
          </Text>
        </View>
        <View>
          <Text>Manage the data you share with us</Text>
        </View>
        <View>
          <Camera color="black" size={48} />
          <Text>Arrow</Text>
        </View>
      </View>

      <View className="flex-row">
        <View>
          <Camera color="black" size={48} />
          <Text>icon</Text>
        </View>
        <View>
          <Text className="font-normal text-base[17px] leading-5 tracking-tighter[0-43em]">
            Appearance
          </Text>
        </View>
        <View>
          <Text>Select how you want your app to look like</Text>
        </View>
        <View>
          <Camera color="black" size={48} />
          <Text>sweetch</Text>
        </View>
      </View>

      <View className="flex-row">
        <View>
          <Camera color="black" size={48} />
          <Text>call</Text>
        </View>
        <View>
          <Text className="font-normal text-base[17px] leading-5 tracking-tighter[0-43em]">
            Communication
          </Text>
        </View>
        <View>
          <Text>Choose your preferred contact methods</Text>
        </View>
        <View>
          <Camera color="black" size={48} />
          <Text>sweetch</Text>
        </View>
      </View>
    </View>
  );
}
