import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
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


export default function settings() {
  function handleSettings(text: string): void {}
  

  return (
    <View className="bg-white h-full w-full px-5">
      <Stack.Screen
        options={{ title: "Settings", headerTitleAlign: "center" }}
      />
      <View className=" space-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <BellIcon color="#808080" size={20} />
          </View>
          <View className="mx-4">
            <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-tighter[-0.43]">
              Notifications
            </Text>
            <Text className="text-[#616161] text-[13px] font-normal leading-[18px] tracking-tighter[-0.08]">
              This allows us to send you promos, {"\n"} deals among things
            </Text>
          </View>
          <View className="flex-row items-center">
            {/* <Switch /> */}
            <BellIcon color="#808080" size={20} />
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Lock color="#808080" size={20} />
          </View>
          <View className="mx-4">
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
          <View className="flex-row items-center">
            <SunMoon color="#808080" size={20} />
          </View>
          <View className="mx-4">
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
          <View className="flex-row items-center">
            <Phone color="#808080" size={20} />
          </View>
          <View className="mx-4">
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

      <View className="justify-center gap-5 items-center mt-40 mb-2">
        <Link href="./login&security" className="mt-5 mb-2" asChild>
          <Pressable>
            <Text className="text-[#426380] text-lg">Next Page</Text>
          </Pressable>
        </Link>
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
