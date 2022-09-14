import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';
import ActionCard from '../components/ActionCard';
import {
  atmImage,
  billImage,
  promo1,
  promo2,
  promo3,
} from '../constants/assests';
import PromoCard from '../components/PromoCard';
import FeedbackCard from '../components/FeedbackCard';
import { useNavigation } from '@react-navigation/native';
import { ORDER_SCREEN } from '../constants/screenRoutes';
import { fonts } from '../constants/globalStyles';
const assets = require('../constants/assests');

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleOnPress = async () => {
    navigation.navigate(ORDER_SCREEN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderCall
          title='Hello Micheal'
          emoji='👋'
          subtitle='What do you want to do today?'
          showNotificationIcon
        />
        <View style={styles.actionContainer}>
          <ActionCard
            title='New Order'
            imageUrl={atmImage}
            callBack={handleOnPress}
          />
          <ActionCard imageUrl={billImage} title='Split Bill' />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Promo</Text>
          <ScrollView horizontal>
            <PromoCard imagePath={promo3} />
            <PromoCard imagePath={promo2} />
            <PromoCard imagePath={promo1} />
          </ScrollView>
        </View>
        <View style={styles.sectionContainer}>
          <FeedbackCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
    fontFamily: fonts.primary,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.font600,
    marginBottom: 10,
  },
  sectionContainer: {
    paddingTop: 20,
  },
});
export default HomeScreen;
