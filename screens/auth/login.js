import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

function Login({ navigation }) {
  const { googleSignIn } = useFirebaseAuth();

  async function onGoogleLoginPress() {
    try {
      const user = await googleSignIn();
      console.log(user)
      if (user) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  function onNormalLoginPress() {
    console.log('Normal Login');
    navigation.replace('Home');
  }

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={tw`flex-1 w-full h-full items-center justify-center`}
      resizeMode="cover"
    >
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
      <TouchableOpacity style={tw`bg-blue-500 w-3/4 py-3 rounded-full mb-4`} onPress={onNormalLoginPress}>
        <Text style={tw`text-white text-center font-semibold`}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-red-500 w-3/4 py-3 rounded-full`} onPress={onGoogleLoginPress}>
        <Text style={tw`text-white text-center font-semibold`}>Login with Google</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Login;
