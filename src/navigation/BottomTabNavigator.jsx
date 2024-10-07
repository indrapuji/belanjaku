import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/HomeScreen';
import CartScreen from '@screens/CartScreen';
import ProfileScreen from '@screens/ProfileScreen';
import FavoriteScreen from '@screens/FavoriteScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#6439FF',
          tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? '#6439FF' : 'grey'} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarActiveTintColor: '#6439FF',
          tabBarIcon: ({focused}) => (
            <Icon name="cart" color={focused ? '#6439FF' : 'grey'} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarActiveTintColor: '#6439FF',
          tabBarIcon: ({focused}) => (
            <Icon name="heart" color={focused ? '#6439FF' : 'grey'} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: '#6439FF',
          tabBarIcon: ({focused}) => (
            <Icon
              name="person"
              color={focused ? '#6439FF' : 'grey'}
              size={20}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
