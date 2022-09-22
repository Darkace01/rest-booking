import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';

const NumberOrder = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 30,
    marginHorizontal: 5,
    fontFamily: fonts.font600,
  },
});

export default NumberOrder;
