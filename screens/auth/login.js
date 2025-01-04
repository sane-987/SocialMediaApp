import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import useAppContext from '../../context';

function Login({navigation}) {
  const {googleSignIn, signInWithEmailPassword} = useFirebaseAuth();

  const {userApi} = useAppContext();

  async function onLoginPress() {
    try {
      const user = await signInWithEmailPassword();
      if (user) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  function onGoogleLoginPress() {
    try {
      googleSignIn().then(function (result) {
        if (result?.additionalUserInfo?.isNewUser) {
          const userData = {
            username: result?.additionalUserInfo?.profile.email,
            email: result?.additionalUserInfo?.profile?.email,
          };
          userApi
            .registerUser(userData)
            .then(function (result) {
              console.log('Register user successfully');
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          console.log('User already present');
        }
      });
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  function onNormalLoginPress() {
    navigation.replace('Home');
  }

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={tw`flex-1 w-full h-full items-center justify-center`}
      resizeMode="cover">
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={tw`w-3/4 bg-white p-4 mb-4 rounded-lg text-black`}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={tw`w-3/4 bg-white p-4 mb-4 rounded-lg text-black`}
        secureTextEntry
      />
      <TouchableOpacity
        style={tw`bg-blue-500 w-3/4 py-3 rounded-full mb-4`}
        onPress={onLoginPress}>
        <Text style={tw`text-white text-center font-semibold`}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-red-500 w-3/4 py-3 rounded-full`}
        onPress={onGoogleLoginPress}>
        <Text style={tw`text-white text-center font-semibold`}>
          Login with Google
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Login;
