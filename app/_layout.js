import { Stack } from 'expo-router'
import React from 'react'


export default function _layout() {
  

  return (
    <>
   <Stack
   screenOptions={
    {
        headerStyle:{
            backgroundColor:'#4a2ad2'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }
   }
   >
    <Stack.Screen  name='index' options={{
        title: 'Tour Guide',
}}/>
    <Stack.Screen name='spotDetails' options={{title: 'Spot Details'}}/>
   </Stack>
   </>
  )
}