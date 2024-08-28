import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { Banknote, Info, Star } from "lucide-react-native";
import { Badge, Chip } from "react-native-paper";
import BankNote from "@/assets/svgs/bankNote";

export default function TripSummary(props: {
  setIsPaymentDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [tripDetials, setTripDetails] = useState({
    time: "2m",
    price: "Ugx 5000",
    pointA: "Kireka",
    pointB: "Mukono",
    bikeType: "E-Bike",
  });

  const changeStatus = () => {
    props.setIsPaymentDetailsOpen(true);
  };

  return (
    <View className="px-5 h-[80%] justify-between">
      <View className="">
        <View className="flex-row space-x-5 justify-between item-center">
          <View className="flex-row items-center space-x-2 mt-3">
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                {tripDetials.pointA} - {tripDetials.pointB}
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                {tripDetials.price}
              </Text>
              <Text className="flex-row items-center space-x-1">
                {tripDetials.time}
              </Text>
            </View>
          </View>

          <Chip disabled className="rounded-0 mt-5 h-8">
            {tripDetials.bikeType}
          </Chip>
        </View>

        <View className="flex-row space-x-5 justify-between item-center mt-5">
          <View className="p-1 flex-row items-center space-x-2">
            <BankNote />
            <View className="">
              <Text className="text-[17px] text-[#242424] leading-[22px] tracking-[-0.43px]">
                Payment Method
              </Text>
              <Text className="text-[15px] text-[#616161] leading-[20px] tracking-[-0.23px]">
                cash
              </Text>
            </View>
          </View>

          <Pressable onPress={changeStatus}>
            <Text className="flex-row items-center justify-center border rounded-[99px] h-fit px-2 py-[5px]">
              change
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="">
        <Pressable
          onPress={() => {
            router.push("./");
          }}
          className=" w-full h-[45px] items-center justify-center rounded-[99px]">
          <Text className="text-[#C50F1F] text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Cancel trip
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("./searching_driver");
          }}
          className="bg-[#636363] w-full h-[45px] items-center justify-center rounded-[99px]">
          <Text className="text-white text-[17px] font-[600] leading-[22px] tracking-[-0.43px]">
            Order ride
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
function setIsPaymentDetailsOpen(arg0: boolean): any {
  throw new Error("Function not implemented.");
}
