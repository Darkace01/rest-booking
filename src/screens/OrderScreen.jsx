import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';
import CustomSearchBar from '../components/SearchBar';
import RestaurantMiniCard from '../components/RestaurantMiniCard';

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderCall
          title='Nearest Order'
          emoji='🤭'
          subtitle='Confused? Order nearby!'
        />
        <View style={styles.sectionContainer}>
          <CustomSearchBar />
        </View>
        <View style={[styles.sectionContainer, styles.restaurantGrid]}>
          <RestaurantMiniCard />
          <RestaurantMiniCard />
          <RestaurantMiniCard />
          <RestaurantMiniCard />
          <RestaurantMiniCard />
          <RestaurantMiniCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 80,
  },
  sectionContainer: {
    marginTop: 20,
  },
  restaurantGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default OrderScreen;
