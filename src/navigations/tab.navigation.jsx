import { View, StyleSheet, Text } from 'react-native';
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
import {colors, fonts} from '../constants/globalStyles';

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
          paddingHorizontal: 40,
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
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.primary : '#848484' ,fontFamily:fonts.primary,fontSize:12}}>
              Home
            </Text>
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
                name='list-ol'
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.primary : '#848484' ,fontFamily:fonts.primary,fontSize:12}}>
              Order
            </Text>
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
                name='user-o'
                size={18}
                color={focused ? colors.primary : '#848484'}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.primary : '#848484' ,fontFamily:fonts.primary,fontSize:12}}>
              Profile
            </Text>
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
