import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderCall from '../components/HeaderCall';
import CustomSearchBar from '../components/SearchBar';

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderCall
          title='Nearest Order'
          emoji='🤭'
          subtitle='Confused? Order nearby!'
        />
        <View style={styles.searchBarContainer}>
          <CustomSearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  searchBarContainer: {
    marginTop: 20,
  },
});

export default OrderScreen;
