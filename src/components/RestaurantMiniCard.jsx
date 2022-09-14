import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { fonts } from '../constants/globalStyles';

const RestaurantMiniCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/rest-1.png')}
        resizeMethod='scale'
        style={styles.image}
      />
      <View style={styles.secContainer}>
        <Text style={styles.title}>Solaria</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  secContainer: {
    paddingTop: 10,
    paddingVertical: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.font600,
  },
});

export default RestaurantMiniCard;
