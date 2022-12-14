import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, fonts } from '../constants/globalStyles';
import { useNavigation } from '@react-navigation/native';
import assetsObject from '../constants/assests';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../components/Button';
import RestaurantNav from '../components/RestaurantNav';
import CalendarDateSelection from '../components/CalendarDateSelection';
import NumberOrder from '../components/NumberOrder';

const RestaurantModal = () => {
  const [reserve, setReserve] = useState(false);
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const handleReserve = () => {
    setReserve(true);
  };

  const handleBack = () => {
    setReserve(!reserve);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.navContainer}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name='keyboard-arrow-left'
                size={24}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navTitleContainer}>
            <Text style={styles.navTitle}>
              {reserve ? 'Reserve Table' : 'Reserve'}
            </Text>
          </View>
        </View>
        {!reserve ? (
          <View style={styles.secContainer}>
            <Image
              source={assetsObject.restLarge1}
              style={[styles.image, { height: height * 0.44 }]}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Solaria</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.description}>
                  Solaria adalah restoran lokal asli Indonesia yang berdiri
                  sejak tahun 1995, merupakan restoran keluarga dengan konsep
                  casual dining yang menyajikan menu-menu makanan khas yang
                  disajikan secara fresh food (dimasak setelah makanan
                  dipsesan).
                </Text>
                <View style={styles.infoIconContainer}>
                  <View>
                    <FontAwesome5
                      name='wheelchair'
                      size={14}
                      color={colors.gray2}
                    />
                  </View>
                  <View>
                    <Text style={styles.info}>12 Seat left</Text>
                  </View>
                </View>
                <View style={styles.infoIconContainer}>
                  <View>
                    <FontAwesome5
                      name='map-marker'
                      size={14}
                      color={colors.gray2}
                    />
                  </View>
                  <View>
                    <Text style={styles.info}>200 M</Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button text='Reserve Table' handleClick={handleReserve} />
              </View>
              <View style={styles.buttonContainer}>
                <Button text='Self-Pick Up' inverted />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.secContainer}>
            <RestaurantNav handleOnClick={handleBack} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Choose Order Date</Text>
            </View>
            <View style={styles.infoContainer}>
              <CalendarDateSelection />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Select Number Of Orders</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.numberOrderContainer}>
                <NumberOrder title='1' />
                <NumberOrder title='2' />
                <NumberOrder title='3' />
                <NumberOrder title='4' />
                <NumberOrder title='5' />
                <NumberOrder title='6' />
                <NumberOrder title='7' />
                <NumberOrder title='8' />
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingBottom: 80,
    backgroundColor: colors.mainBackgroundColor,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  navTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navTitle: {
    fontSize: 16,
    fontFamily: fonts.font700,
    color: colors.primary,
  },
  secContainer: {
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  infoContainer: {
    paddingTop: 10,
    paddingVertical: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.font600,
  },
  description: {
    fontSize: 12,
  },
  infoIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  info: {
    fontSize: 14,
    fontFamily: fonts.font400,
    paddingLeft: 5,
    color: colors.gray2,
  },
  buttonContainer: {
    paddingTop: 10,
  },
  numberOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default RestaurantModal;
