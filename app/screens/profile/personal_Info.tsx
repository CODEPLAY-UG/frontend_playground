import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function personal_Info() {
  return (
    <View className='justify-center items-center'>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Personal Information",
          headerTitleAlign: "center",
        }}
      />
      <Text>personal_Info</Text>
    </View>
  )
}