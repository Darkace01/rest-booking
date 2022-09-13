import { StyleSheet, Image } from 'react-native';
import React from 'react';

const PromoCard = ({ imagePath }) => {
  return <Image source={imagePath} resizeMode='cover' style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginRight: 10,
    width: 250,
  },
});

export default PromoCard;
