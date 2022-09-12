import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from '../constants/globalStyles';
import Button from '../components/Button';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/rest-booking-logo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputContainerMini}>
              <Text style={styles.headingText}>Login</Text>
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={styles.textInput}
                // hoverStyle={styles.textInputHover}
                placeholder='Email'
                onChangeText={(newText) => setUserName(newText)}
                defaultValue={userName}
              />
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={styles.textInput}
                placeholder='Password'
                onChangeText={(newText) => setPassword(newText)}
                defaultValue={password}
              />
            </View>
            <View style={styles.inputContainerMini}>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainerMini}>
              <Button text='Login' />
            </View>
            <View style={styles.inputContainerMini}>
              <Button text='Sign Up' inverted />
            </View>
            <View style={styles.inputContainerMini}>
              <Button text='Continue with Google' inverted icon='google' />
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 100,
  },
  imageContainer: {},
  inputContainer: {
    justifyContent: 'space-around',
  },
  inputContainerMini: {
    marginBottom: 20,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 270,
    width: '100%',
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    color: colors.primary,
    // fontFamily: fonts.primary,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: colors.primary,
    // fontFamily: fonts.primary,
  },
  textInput: {
    height: 60,
    fontSize: 24,
    fontWeight: '400',
    backgroundColor: colors.lightBackground,
    borderRadius: 16,
    paddingLeft: 20,
  },
});
export default LoginScreen;
