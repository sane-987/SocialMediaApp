import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import RoundedText from '../../components/ui/roundedText';
import Feather from 'react-native-vector-icons/Feather';
import CardComponent from '../../components/ui/cardComponent';
import NavBar from '../../components/ui/navBar';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
import auth from '@react-native-firebase/auth';
import useAppContext from '../../context';

function Home({navigation}) {
  const {user, signOut} = useFirebaseAuth();

  const {getUserGeoLocation, latitude, longitude} = useAppContext();

  console.log(latitude, longitude, '#######');

  function getIdToken() {
    const currentUser = auth().currentUser;

    if (currentUser) {
      currentUser.getIdToken().then(function (result) {
        console.log(result);
      });
    }
  }

  useEffect(function () {
    getIdToken();
  }, []);

  async function onLogoutPress() {
    try {
      await signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  return (
    <View style={tw`flex-1 bg-slate-900`}>
      {/* Header Section */}
      <View
        style={tw`flex flex-row items-center justify-between p-5 bg-slate-300 border-b border-gray-200`}>
        <Text style={tw`text-xl font-medium text-center`}>
          Good Morning, {user?.displayName}
        </Text>
        <Feather
          name="search"
          size={25}
          onPress={function () {
            navigation.replace('Search');
          }}
        />
      </View>

      {/* Main Scrollable Content */}
      <ScrollView contentContainerStyle={tw`p-5`}>
        <CardComponent
          profileName="Jacob Washington"
          timeAgo="20m ago"
          content="If you think you are too small to make a try sleeping with a mosquito. ~ Dalai Lama"
          likes={2225}
          comments={45}
          shares={120}
          isImage={false}
        />

        <CardComponent
          profileName="Kat Williams"
          timeAgo="1h ago"
          content={[
            '../../assets/background.png',
            '../../assets/background.png',
            '../../assets/background.png',
          ]} // Replace with your image URL
          likes={8998}
          comments={145}
          shares={12}
          isImage={true}
        />

        <CardComponent
          profileName="Kat Williams"
          timeAgo="1h ago"
          content={[
            '../../assets/background.png',
            '../../assets/background.png',
            '../../assets/background.png',
          ]} // Replace with your image URL
          likes={8998}
          comments={145}
          shares={12}
          isImage={true}
        />
        {/* Log Out Button */}
        <TouchableOpacity
          style={tw`mt-4 bg-blue-500 py-3 px-6 rounded-full`}
          onPress={onLogoutPress}>
          .<Text style={tw`text-white text-center`}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <NavBar navigation={navigation} /> */}
    </View>
  );
}

export default Home;
