import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { colors, fonts } from '../constants/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN } from '../constants/screenRoutes';
import Logo from '../components/Logo';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userNameFocus, setUserNameFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleRegister = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Logo customStyle={styles.image} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputContainerMini}>
              <Text style={styles.headingText}>Sign Up</Text>
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={[
                  styles.textInput,
                  userNameFocus && styles.textInputFocus,
                ]}
                placeholder='Email'
                onChangeText={(newText) => setUserName(newText)}
                onFocus={() => setUserNameFocus(true)}
                onBlur={() => setUserNameFocus(false)}
                defaultValue={userName}
              />
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={[
                  styles.textInput,
                  userNameFocus && styles.textInputFocus,
                ]}
                placeholder='Phone Number'
                onChangeText={(newText) => setUserName(newText)}
                onFocus={() => setUserNameFocus(true)}
                onBlur={() => setUserNameFocus(false)}
                defaultValue={userName}
              />
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={[
                  styles.textInput,
                  passwordFocus && styles.textInputFocus,
                ]}
                placeholder='Password'
                onChangeText={(newText) => setPassword(newText)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                defaultValue={password}
              />
            </View>
            <View style={styles.inputContainerMini}>
              <TextInput
                style={[
                  styles.textInput,
                  passwordFocus && styles.textInputFocus,
                ]}
                placeholder='Confirmation Password'
                onChangeText={(newText) => setPassword(newText)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                defaultValue={password}
              />
            </View>
            <View style={styles.inputContainerMini}></View>
            <View style={styles.inputContainerMini}>
              <Button text='Sign Up' handleClick={handleRegister} />
            </View>
            <View style={styles.inputContainerMini}>
              <Button text='Login' inverted handleClick={handleRegister} />
            </View>
          </View>
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
    paddingTop: 120,
  },
  imageContainer: {
    paddingBottom: 10,
  },
  inputContainer: {
    justifyContent: 'space-around',
  },
  inputContainerMini: {
    marginBottom: 20,
  },
  textInputFocus: {
    borderWidth: 1,
    borderColor: colors.primary,
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
    fontFamily: fonts.font600,
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
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: colors.lightBackground,
    borderRadius: 16,
    paddingLeft: 20,
    fontFamily: fonts.primary,
  },
});
export default RegisterScreen;
