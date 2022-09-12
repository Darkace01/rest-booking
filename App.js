import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOADING_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  SPLASH_SCREEN,
} from './src/constants/screenRoutes';
import Loading from './src/components/Loading';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        {loading ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={LOADING_SCREEN} component={Loading} />
          </Stack.Navigator>
        ) : viewedOnboarding ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
