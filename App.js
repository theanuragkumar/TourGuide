import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './components/MapScreen';
import SpotDetailScreen from './components/SpotDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Tourist Map' }} />
        <Stack.Screen name="SpotDetail" component={SpotDetailScreen} options={{ title: 'Spot Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
