import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  HOME_SCREEN,
  ORDER_SCREEN,
  PROFILE_SCREEN,
} from '../constants/screenRoutes';
import HomeScreen from '../screens/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { colors } from '../constants/globalStyles';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#F6F6F9',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          height: 78,
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarVisibilityAnimationConfig: {
          animation: 'slide_from_right',
        },
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='home'
                size={23}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ORDER_SCREEN}
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='home'
                size={23}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <FontAwesome
                name='home'
                size={23}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: Platform.select({
      ios: '30%',
      android: '15%',
    }),
  },
});

export default TabNavigation;
