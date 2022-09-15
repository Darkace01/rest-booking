import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors, fonts } from '../constants/globalStyles';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({ text, inverted, icon, handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={[
          styles.container,
          { backgroundColor: inverted ? 'white' : colors.primary },
        ]}
      >
        <Text
          style={[styles.text, { color: inverted ? colors.primary : 'white' }]}
        >
          {icon && (
            <FontAwesome
              name={icon}
              size={24}
              color={inverted ? colors.primary : 'white'}
            />
          )}
          {'  '}
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '100%',
    textAlign: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: fonts.font600,
  },
});

export default Button;
