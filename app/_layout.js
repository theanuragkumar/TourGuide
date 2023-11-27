import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
   <Stack
   screenOptions={
    {
        headerStyle:{
            backgroundColor:'blue,'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }
   }
   >
    <Stack.Screen name='index' options={{title: 'Tour Guide'}}/>
    <Stack.Screen name='spotDetails' options={{title: 'Spot Details'}}/>
   </Stack>
  )
}