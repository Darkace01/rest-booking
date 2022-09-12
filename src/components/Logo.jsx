import { Image } from 'react-native';
import React from 'react';

const Logo = ({ customStyle }) => {
  return (
    <Image
      source={require('../../assets/images/rest-booking-logo.png')}
      style={customStyle}
    />
  );
};

export default Logo;
