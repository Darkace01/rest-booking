import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';
import CustomSearchBar from '../components/SearchBar';
import RestaurantMiniCard from '../components/RestaurantMiniCard';
import assetsObject from '../constants/assests';
import { useNavigation } from '@react-navigation/native';
import { RESTAURANT_MODAL } from '../constants/screenRoutes';

const OrderScreen = () => {
  const navigation = useNavigation();
  const navigateToRestaurant = () => {
    navigation.navigate(RESTAURANT_MODAL);
  };
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
          <RestaurantMiniCard
            title='Solaria'
            seats={12}
            distance={200}
            imagePath={assetsObject.restMin1}
            callBack={navigateToRestaurant}
          />
          <RestaurantMiniCard
            title='Gokana'
            seats={8}
            distance={582}
            imagePath={assetsObject.restMin2}
            callBack={navigateToRestaurant}
          />
          <RestaurantMiniCard
            title='Baso Ati Raja'
            seats={15}
            distance={600}
            imagePath={assetsObject.restMin1}
            callBack={navigateToRestaurant}
          />
          <RestaurantMiniCard
            title='Iciban'
            seats={9}
            distance={600}
            imagePath={assetsObject.restMin2}
            callBack={navigateToRestaurant}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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
