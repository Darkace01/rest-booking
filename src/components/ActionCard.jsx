import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';

const ActionCard = ({ title, imageUrl }) => {
  console.log(imageUrl);
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
  },
  backgroundImage: {
    width: 150,
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
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ActionCard;