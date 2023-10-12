import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from './screen/SignIn';
import Signup from './screen/Signup';
import Orders from './screen/Orders';
import Profile from './screen/Profile';

export default function App() {
  const Stack = createStackNavigator();
  // useEffect(() => {
  //   const URL = 'http://192.168.0.106:3000';
  //   const socket = io(URL);
  //   socket.on("connect", () => {
  //     console.log(socket.id);
  //   });
  // }, []);
  return (
    <NavigationContainer >
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName='Send'>
          <Stack.Screen name='SignIn' component={SignIn} options={{
            headerShown: false
          }} />
          <Stack.Screen name='SignUp' component={Signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Orders' component={Orders} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Profile' component={Profile} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
