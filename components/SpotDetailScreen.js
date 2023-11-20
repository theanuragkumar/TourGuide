import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SpotDetailScreen = ({ route }) => {
  const { spot } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: spot.image }} style={styles.image} />
      <Text style={styles.title}>{spot.title}</Text>
      <Text style={styles.description}>{spot.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SpotDetailScreen;
