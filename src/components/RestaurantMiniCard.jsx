import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { fonts, colors } from '../constants/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from './Button';

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
        <View style={styles.infoContainer}>
          <View>
            <FontAwesome5 name='wheelchair' size={14} color={colors.gray2} />
          </View>
          <View>
            <Text style={styles.info}>12 Seat left</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <FontAwesome5 name='map-marker' size={14} color={colors.gray2} />
          </View>
          <View>
            <Text style={styles.info}>200 M</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button text='Order' />
        </View>
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 5,
  },
  info: {
    fontSize: 14,
    fontFamily: fonts.font400,
    paddingLeft: 5,
    color: colors.gray2,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default RestaurantMiniCard;
