import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { fonts } from '../constants/globalStyles';

const ActionCard = ({ title, imageUrl, callBack }) => {
  return (
    <TouchableOpacity onPress={callBack}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/action-card-background.png')}
          resizeMode='cover'
          style={styles.backgroundImage}
        >
          <Text style={styles.text}>{title}</Text>
          <Image source={imageUrl} style={styles.image} />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
  },
  backgroundImage: {
    width: 170,
    height: 200,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
    paddingTop: 20,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 30,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.font600,
  },
});

export default ActionCard;
