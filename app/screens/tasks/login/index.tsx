import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import {
  ArrowLeft,
  BellIcon,
  ChevronRight,
  Lock,
  Phone,
  SunMoon,
} from "lucide-react-native";
import { Switch } from "@fluentui/react-components";

export default function login() {
  function handlelogih(text: string): void {}

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Settings", headerTitleAlign: "center" }}
      />
      <View className=" gap-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="">
            <BellIcon color="#808080" size={20} />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
              Notifications
            </Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              This allows us to send you promos, {"\n"} deals among things
            </Text>
          </View>
          <View className="">
            {/* <Switch /> */}
            <BellIcon color="#808080" size={20} />
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="">
            <Lock color="#808080" size={20} />
          </View>
          <View className="">
            <Text className=" text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
              Privacy
            </Text>
            <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              Manage the data you share with us
            </Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>
        <View className="flex-row justify-between items-center  ">
          <View className="">
            <SunMoon color="#808080" size={20} />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
              Appearance
            </Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              Select how you want your app to look like
            </Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>
        <View className="flex-row justify-between items-center  ">
          <View className="">
            <Phone color="#808080" size={20} />
          </View>
          <View className="">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
              Communication
            </Text>
            <Text className=" text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              Choose your preferred contact methods
            </Text>
          </View>
          <View className="">
            <ChevronRight color="#808080" size={20} />
          </View>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-auto">
        <View className="mt-4 justify-center items-center space-y-1">
          <Image
            className="w-[22.5px] h-[21px]"
            source={require("@assets/images/home.png")}
          />
          <Text>Home</Text>
        </View>

        <View className="mt-4 justify-center items-center space-y-1">
          <Image
            className="w-[22.5px] h-[21px]"
            source={require("@assets/images/activity.png")}
          />
          <Text>Activity</Text>
        </View>

        <View className="mt-4 justify-center items-center space-y-1">
          <Image
            className="w-[22.5px] h-[21px]"
            source={require("@assets/images/profile.png")}
          />
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
}
