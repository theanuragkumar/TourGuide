import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import { addSpot, fetchSpots, initializeDatabase } from './../Database';

const MapScreen = ({ navigation }) => {

  const [spots, setSpots] = useState([]);

  // useEffect(() => {
  //   initializeDatabase();
  //   loadSpots();
  // }, []);


  const touristSpots = [
    {
      id: 1,
      title: 'TCS Powai',
      coordinates: { latitude: 19.1197, longitude: 72.9051 },
      description: `Embrace the cliche and opt for a horse and carriage ride departing from the Gateway at dusk - it's a lovely time to tour the city.
      
      Created to mark the illustrious visit of King George V and Queen Mary in 1911, the Gateway of India was not completed until 1948, two years before India's independence from England. Instead, the British royals landed on Indian soil to find a cardboard cutout fashioned to show the intended finished product.

      Though it was constructed to welcome the royal couple, the Indo-Saracenic structure has since become known as the place where the British bid their final adieu to the Subcontinent following the end of the Raj.
      
      These days, the 26 metre arch facing Mumbai's harbor acts as a meeting place for locals and travellers alike. Boats for Elephanta Island depart from under the arch, while sweet vendors and family photographers ply the square 24/7.`,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388', 
    },
    {
      id: 2,
      title: 'Gateway of India',
      coordinates: { latitude: 18.9217, longitude: 72.8347 },
      description: `Embrace the cliche and opt for a horse and carriage ride departing from the Gateway at dusk - it's a lovely time to tour the city.
      
      Created to mark the illustrious visit of King George V and Queen Mary in 1911, the Gateway of India was not completed until 1948, two years before India's independence from England. Instead, the British royals landed on Indian soil to find a cardboard cutout fashioned to show the intended finished product.

      Though it was constructed to welcome the royal couple, the Indo-Saracenic structure has since become known as the place where the British bid their final adieu to the Subcontinent following the end of the Raj.
      
      These days, the 26 metre arch facing Mumbai's harbor acts as a meeting place for locals and travellers alike. Boats for Elephanta Island depart from under the arch, while sweet vendors and family photographers ply the square 24/7.`,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Historical_Gateway_Of_India.jpeg?size=690:388', 
    }
  ];

  // const loadSpots = async () => {
  //   try {
  //     const spotList = await fetchSpots();
  //     setSpots(spotList);
  //   } catch (error) {
  //     console.error('Error loading spots:', error);
  //   }
  // };

  const handleAddDetail = async () => {
    try {
      // const newSpotId = await addSpot(
      //   'New Spot',
      //   18.9750,
      //   72.8258,
      //   'Description of the new spot',
      //   'image-url-here.jpg'
      // );
      // console.log('New spot added with ID:', newSpotId);
      // loadSpots();

      alert("HI")
    } catch (error) {
      console.error('Error adding spot:', error);
    }
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.9389,
          longitude: 72.8258,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {touristSpots.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={spot.coordinates}
            title={spot.title}
            onPress={() => {
              navigation.navigate('SpotDetail', { spot });
            }}
          />
        ))}
      </MapView>
      {/* <Button title="Add Detail" onPress={handleAddDetail} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
