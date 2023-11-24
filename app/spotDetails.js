import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const Page = () => {
let spot=useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View>
        <ScrollView horizontal pagingEnabled>
          {spot?.images?.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{spot.title}</Text>
        <Text style={styles.description}>{spot.description}</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: windowWidth,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Page;
