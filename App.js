// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './screens/Screen_01';
import Screen02 from './screens/Screen_02';
import Screen03 from './screens/Screen_03';
import Screen04 from './screens/Screen_04';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
        <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }} />
        <Stack.Screen name="Screen04" component={Screen04} options={{ headerShown: false }} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
