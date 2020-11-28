import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Login from '../screens/LoginScreen';
import Dashboard from '../screens/DashboardScreen';

const AuthStackNavigator = createStackNavigator();
const HomeStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Login"
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen name="Login" component={Login} />
    </AuthStackNavigator.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Dashboard"
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStackNavigator.Screen name="Dashboard" component={Dashboard} />
    </HomeStackNavigator.Navigator>
  );
};
