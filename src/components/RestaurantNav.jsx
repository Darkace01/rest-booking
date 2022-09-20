import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import assetsObject from '../constants/assests';
import { colors, fonts } from '../constants/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantNav = ({ handleOnClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleOnClick}>
          <MaterialIcons
            name='keyboard-arrow-left'
            size={23}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={assetsObject.restIcon1} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Solari</Text>
        <Text style={styles.subTitle}>200 M</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {},
  title: {
    fontSize: 14,
    fontFamily: fonts.font600,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fonts.font600,
    color: colors.gray2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RestaurantNav;
