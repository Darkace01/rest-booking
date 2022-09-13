import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderCall
        title='Hello Micheal'
        emoji='👋'
        subtitle='What do you want to do today?'
        showNotificationIcon
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
