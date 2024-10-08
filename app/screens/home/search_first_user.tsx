import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { SetStateAction, useState } from "react";
import {
  BellIcon,
  CalendarPlus,
  ChevronRight,
  Hop,
  MapPin,
  Phone,
  SunMoon,
} from "lucide-react-native";
import Stack from "expo-router/build/layouts/Stack";
import SearchComponent from "@/components/core/Search";
import { Link, router } from "expo-router";
import { ProgressBar } from "react-native-paper";
import ChevronLeft from "@/assets/svgs/chevronLeft";

export default function User() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <View className="bg-white h-full">
      {/* <Stack.Screen
        options={{
          headerShown: true,
          title: "Your route",
          headerTitleAlign: "center",
          headerRight: () => <CalendarPlus color="#808080" size={24} />,
        }}
      /> */}
      <Stack.Screen
        options={{
          // headerShown: true,
          headerTitle: "Your routed",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.9}
              className="ml-4"
            >
              <ChevronLeft stroke={"#616161"} width={24} height={24} />
            </TouchableOpacity>
          ),
          headerRight: () => <CalendarPlus color="#ffd700" size={24} />,
        }}
      />
      <View className="space-y-5 mt-[12px]">
        <View className="flex-row justify-between items-center">
          <View className="mx-6 flex-row items-center">
            <MapPin color="#808080" size={24} />
            <View className="mx-4">
              <Text className="text-[#242424] text-[17px]  leading-[22px] tracking-[-0.43]">
                Current user location
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="py-2">
        <SearchComponent placeholder="Destination" setIsTyping={setIsTyping} />

        {isTyping && (
          <View className="mt-2">
            <ProgressBar indeterminate color="#636363" className="h-[1px]" />
          </View>
        )}
      </View>

      <View className="space-y-5">
        <View className="mx-8 py-4">
          <Text className="text-[#242424] text-[17px] font-semibold leading-[22px] tracking-[-0.43]">
            Recent destinations
          </Text>
        </View>
        <View className="px-4 py-4 justify-between items-center">
          <Hop color="#808080" size={48} />
        </View>
        <View className="mx-4 py-2 justify-between items-center">
          <Text className="text-[#242424] font-semibold text-[20px] leading-[25px] tracking-[-0.45]">
            No rides yet
          </Text>
        </View>
        <View className="space-y-0">
          <View className="mx-4 justify-between items-center">
            <Text className="text-[#242424] text-[13px]  leading-[18px] tracking-[-0.08]">
              Your recent destinations will appear here.
            </Text>
          </View>
          <View className="items-center">
            <Link href="" className="mt-5 mb-2" asChild>
              <Pressable className="mt-[22px] bg-[#636363] w-[330px] h-[56px] items-center justify-center rounded-[99px]">
                <Text className="text-center text-white text-[17px] font-semibold leading-[22px] tracking-[-0.43]">
                  Place order
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
