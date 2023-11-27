import React, { useState } from 'react';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { highlightedPlaces, route1Places, route2Places } from '../highlightedPlaces';
import MapViewDirections from 'react-native-maps-directions';
import app from '../app.json'

export default function Page() {
const nav=useNavigation();
 const [touristSpots,setTouristSpot]=useState(route2Places);


 const [destination, setDestination] = useState(touristSpots[touristSpots.length-1].coordinates);

const [origin, setOrigin] = useState(touristSpots[0].coordinates);

  return (
    <View style={styles.container}>
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
          apikey={"API_KEY"}
          strokeWidth={4}
          strokeColor="blue"
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
});