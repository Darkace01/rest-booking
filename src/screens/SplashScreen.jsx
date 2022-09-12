import { View, Dimensions, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SCREEN } from '../constants/screenRoutes';

const screen = Dimensions.get('screen');
const { height } = screen;
const SplashScreen = () => {
  const navigation = useNavigation();
  const handleOnPress = async () => {
    try {
      await AsyncStorage.setItem('@viewedOnboarding', 'true');
      navigation.navigate(LOGIN_SCREEN);
    } catch (err) {
      console.log('Error @handleOnPress', err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      handleOnPress();
    }, 2000);
    console.log('handleOnPress');
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/rest-booking-logo.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height / 2.2,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default SplashScreen;
