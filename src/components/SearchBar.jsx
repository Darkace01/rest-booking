import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/globalStyles';

const CustomSearchBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name='search' size={24} color='black' />
      </View>
      <View>
        <TextInput placeholder='Search' style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightBackground,
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default CustomSearchBar;
