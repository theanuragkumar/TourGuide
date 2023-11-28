import React, { useState } from 'react';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { highlightedPlaces, route1Places, route2Places } from '../highlightedPlaces';
import MapViewDirections from 'react-native-maps-directions';

export default function Page() {
const nav=useNavigation();
 const [touristSpots,setTouristSpot]=useState(route2Places);

 const destination=React.useMemo(()=>touristSpots[touristSpots.length-1].coordinates,[touristSpots]);
 const origin=React.useMemo(()=>touristSpots[0].coordinates,[touristSpots]);


  return (
    <View style={styles.container}>
      <View >
        <Button
        onPress={()=>{setTouristSpot(route1Places)}} title='Route 1 : Taj to TCS, Powai'
        color='#4a2ad2'      
        />
        <Button style={styles.button} onPress={()=>{setTouristSpot(route2Places)}} title='Route 2 : TCS, Banyan Park to Taj'
        color='#4a2ad2'/>
      </View>
      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE} 
      initialRegion={{
        latitude: 18.9389,
        longitude: 72.8258,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
           <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={"key"}
          strokeWidth={4}
          strokeColor="#4a2ad2"
        />
        
  {touristSpots?.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.coordinates}
            title={spot.title}
            onPress={() => {
             nav.navigate('spotDetails',spot)
            }}
          />
        ))}
     
        </MapView>
        <View style={styles.view}>
        {touristSpots?.map((spot,index)=>(<Text style={styles.text}  key={spot.id}>{(index+1) + " : " +spot.title}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  view:{
    position:'absolute',
    width:"40%",
    backgroundColor:'#4a2ad2',
    bottom:10,
    left:10,
    padding:5,
  },
  text:{
    color:'white'
  },
  button:{
    backgroundColor:'#4a2ad2'
  }
});