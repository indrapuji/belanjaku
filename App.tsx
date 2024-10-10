import React from 'react';
import {StyleSheet} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '@screens/OnboardingScreen';
import HomeScreen from '@screens/HomeScreen';
import SearchScreen from '@screens/SearchScreen';
import CartScreen from '@screens/CartScreen';
import DetailScreen from '@screens/DetailScreen';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Explore" component={BottomTabNavigator} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
