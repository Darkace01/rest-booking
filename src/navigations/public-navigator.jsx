import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  SPLASH_SCREEN,
} from '../constants/screenRoutes';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const PublicNavigator = () => {
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem(
        '@viewedOnboarding'
      );
      if (onboardingCompleted !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding', err);
    } finally {
      //   setLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);
  return (
    <>
      {viewedOnboarding ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default PublicNavigator;
