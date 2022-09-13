import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';
import ActionCard from '../components/ActionCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCall
        title='Hello Micheal'
        emoji='👋'
        subtitle='What do you want to do today?'
        showNotificationIcon
      />
      <View style={styles.actionContainer}>
        <ActionCard title='New Order' imageUrl='../../assets/images/atm.png' />
        <ActionCard
          imageUrl='../../assets/images/bills.png'
          title='Split Bill'
        />
      </View>
      <View>
        <Text style={styles.title}>Promo</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
});
export default HomeScreen;
