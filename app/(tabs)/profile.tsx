import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react-native";

export default function Profile() {
  return (
    <SafeAreaView className=" bg-white h-full w-full">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Profile",
        }}
      />
      <View className="mx-6">
          <View className="justify-center items-center">
            <Image source={require("../../assets/images/avatar.png")} />
          </View>
          <Pressable onPress={() => router.push("../screens/profile/personal_Info")}>
            <View className="flex-row justify-between  items-center">
              <View className="py-3">
                <Text className="text-[17px] leading-[22px] text-[#242424] font-[400]">
                  Name
                </Text>
                <Text className="text-[13px] leading-[18px] text-[#616161] font-[400]">
                  Phone number/email
                </Text>
              </View>
              {/* <Image source={require("../../assets/images/chevronRight.png")} /> */}
              <ChevronRight color="#808080" size={16} />
            </View>
          </Pressable>
          <View className="gap-y-6 h-[336px] mt-1 ">
            <View className="flex-row justify-between">
              <View className="flex-row gap-x-3">
                <Image source={require("../../assets/images/settings.png")} />
                <Text className="text-[17px] leading-[22px] text-[#242424] font-[400] ">
                  Settings
                </Text>
              </View>
              <ChevronRight color="#808080" size={16} />
          </View>
          <View className="">
            <View className="flex-row gap-x-3 justify-between">
              <View className="flex-row space-x-3">
                <Image source={require("../../assets/images/security.png")} />
                <Text className="text-[17px] leading-[22px] text-[#242424] font-[400] p-[1px] ">
                  Login & security
                </Text>
              </View>
              <ChevronRight color="#808080" size={16} />
            </View>
          </View>
          <View className="">
            <View className="flex flex-row gap-x-3 justify-between">
              <View className="flex-row space-x-3">
                <Image source={require("../../assets/images/help.png")} />
                <Text className="text-[17px] leading-[22px] text-[#242424] font-[400] p-[1px] ">
                  Help
                </Text>
              </View>
              <ChevronRight color="#808080" size={16} />
            </View>

          </View>
          <View className="flex flex-row gap-x-[2px]">
            <View className="flex flex-row gap-x-[12px]">
              <Image source={require("../../assets/images/feedback.png")} />
              <Text className="w-[280px] text-[17px] leading-[22px] text-[#242424] font-[400] p-[1px] ">
                Give us feedback
              </Text>
            </View>
            <ChevronRight color="#808080" size={16} />
          </View>
          <View className="flex flex-row gap-x-[2px] ">
            <View className="flex flex-row gap-x-[12px]">
              <Image source={require("../../assets/images/legal.png")} />
              <Text className="w-[280px] text-[17px] leading-[22px] text-[#242424] font-[400] p-[1px] ">
                Legal
              </Text>
            </View>
            <ChevronRight color="#808080" size={16} />
          </View>
          <View className="flex flex-row gap-x-[2px] ">
            <View className="flex flex-row gap-x-[12px]">
              <Image source={require("../../assets/images/info.png")} />
              <Text className="w-[280px] text-[17px] leading-[22px] text-[#242424] font-[400] p-[1px]">
                About
              </Text>
            </View>
            <ChevronRight color="#808080" size={16} />
          </View>
          <Pressable className="items-center justify-center ">
            <Text className="  text-[#C50F1F] font-[400]  text-[17px] leading-[22px]">
              Log out
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
