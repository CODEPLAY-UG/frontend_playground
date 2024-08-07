import { View, Text, TextInput, Pressable, Image, TouchableOpacity, GestureResponderEvent, StatusBar } from "react-native";
import React, { SetStateAction, useState } from "react";
import { Link, router, Stack, Tabs } from "expo-router";

import { ArrowLeft, BellIcon, BriefcaseBusiness, ChevronRight, CircleXIcon, Lock, Phone, SparklesIcon, SunMoon, UserRoundXIcon, WalletIcon, XIcon } from "lucide-react-native";
import { Button, ProgressBar } from "react-native-paper";
import { Switch } from "react-native-paper";
import ArrowIcon from "@/assets/svgs/arrowIcon";
import ShieldIcon from "@/assets/svgs/shieldIcin";
import CancleIcon from "@/assets/svgs/cancleIcon";
import SearchComponent from "@/components/core/search1";
import UserIcon from "@/assets/svgs/userIcon";

export default function Accountinfo() {
  function handleAccountinfo(text: string): void {}

  function handleNameChange(text: string): void {
    ("");
  }

  function setName(arg0: string) {
    ("");
  }

  const handleClearInput = () => {
    setName("");
  };

  function setIsTyping(value: SetStateAction<boolean>): void {
    ("");
  }

  return (
    <View className="bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Account info",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "semibold", // Adjust the font weight
          },
        }}
      />

      <View className="-mt-9">
        <View className="gap-[24px] mt-3 justify-between flex-row items-center px-5">
          <View className="flex-auto">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Name</Text>
            <View className="mt-3">
              <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userName" onChangeText={handleNameChange} />
              <TouchableOpacity onPress={handleClearInput} className="-mt-3 absolute right-2 top-1/2 transform -translate-y-1/2">
                <CancleIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-3 justify-between flex-row items-center px-5">
          <View className="flex-auto">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Phone number</Text>
            <View className="mt-3">
              <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userNumber" onChangeText={handleNameChange} />
              <TouchableOpacity onPress={handleClearInput} className="-mt-3 absolute right-2 top-1/2 transform -translate-y-1/2">
                <CancleIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="gap-[24px] mt-3 justify-between flex-row items-center px-5">
          <View className="flex-auto">
            <Text className="text-[#616161]  text-[13px] font-normal leading-[18px] py-[5px] tracking-tighter[-0.08]">Email</Text>
            <View className="mt-3">
              <TextInput className="text-[17px] mt-1 py-2 caret-black font-normal leading-[22px] tracking-[-0.43px] border-b-[1px] border-b-[#D1D1D1]" placeholder="userEmail" onChangeText={handleNameChange} />
              <TouchableOpacity onPress={handleClearInput} className="-mt-3 absolute right-2 top-1/2 transform -translate-y-1/2">
                <CancleIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="">
          <View className="gap-[24px] mt-2 justify-between flex-row items-center px-5">
            <View className="flex-row -mx-3 items-center">
              <UserIcon />
              <View className="mx-3">
                <Text className="text-[#242424] text-[17px] font-normal leading-[22px] tracking-[-0.43]">Account deletion</Text>
              </View>
            </View>
            <View className="mx-3">
              <ArrowIcon />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
