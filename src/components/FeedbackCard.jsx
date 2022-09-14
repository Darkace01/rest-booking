import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { FontAwesome } from '@expo/vector-icons';

const FeedbackCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/feedback-image.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Enjoy using the app? Fill in the feedback here!
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name='arrow-right' size={23} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    bottom: -18,
  },
  title: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.font600,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingRight: 30,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedbackCard;
