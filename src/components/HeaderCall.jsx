import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors, fonts } from '../constants/globalStyles';

const HeaderCall = ({ title, emoji, subtitle, showNotificationIcon }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {title} {emoji}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {showNotificationIcon && (
        <View>
          <FontAwesome name='bell-o' size={23} color={colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: fonts.font600,
  },
  subtitle: {
    fontSize: 16,
    color: '#848484',
    fontFamily: fonts.primary,
  },
});

export default HeaderCall;
