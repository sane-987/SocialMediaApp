import {ScrollView, TouchableOpacity, Text, View, Image} from 'react-native';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import tw from 'twrnc';
import RoundedText from '../../components/ui/roundedText';
import {useEffect, useState} from 'react';
import useAppContext from '../../context';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import {BlockComponent} from '../../components/ui/blockComponent';
import CategoriesComponent from '../../components/ui/cateogaryComponent';
import CardCommponent from '../../components/ui/cardComponent';

function UserProfile({navigation}) {
  const {user, signOut} = useFirebaseAuth();

  const {userApi, communityApi, latitude, longitude} = useAppContext();

  const [communitiesData, setCommunitiesData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const [view, setView] = useState('Questions');

  const categories = ['Questions', 'My Communities', 'Liked', 'Tagged'];

  // useEffect(function () {
  //   userApi
  //     .getUserId()
  //     .then(function (result) {
  //       console.log(result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(
  //   function () {
  //     if (user) {
  //       communityApi
  //         .getCommunities()
  //         .then(function (result) {
  //           console.log(result);
  //           setCommunitiesData[result];
  //         })
  //         .catch(function (error) {});
  //     }
  //   },
  //   [user],
  // );

  async function onLogoutPress() {
    try {
      await signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  function addCommunity(data) {
    console.log('Adding community');
    commityData = {
      communityName: data?.label,
      category: data?.value,
    };
    userApi
      .addCommunity()
      .then(function (result) {
        console.log('Community added succesfully');
      })
      .catch(function (error) {
        console.log(error, 'ERROR OCCURRED');
      });
  }

  return (
    <View style={tw`h-full bg-black flex justify-end`}>
      <ScrollView contentContainerStyle={tw`flex gap-4`}>
        <View style={tw`flex items-center`}>
          <Image
            style={tw`w-full h-50`}
            source={require('../../assets/background.png')}
          />
          <Image
            style={tw`h-70 w-70 absolute mt-10`}
            source={require('../../assets/profile-photo.png')}
          />
        </View>
        <View style={tw`mt-15 gap-2`}>
          <Text style={tw`text-2xl font-bold text-white text-center`}>
            {user?.displayName}
          </Text>
          <Text style={tw`text-base text-gray-200 text-center`}>
            Mumbai, Maharashtra
          </Text>
          <Text style={tw`text-base text-gray-200 text-center`}>
            Writer by Profession. Artist by Passion!
          </Text>
        </View>
        <View style={tw`flex flex-row justify-between px-4`}>
          <BlockComponent number={'2,467'} text={'Followers'} />
          <BlockComponent number={'1,589'} text={'Following'} />
          <BlockComponent text={'Edit Profile'} />
        </View>
        <View style={tw``}>
          <CategoriesComponent
            parentComponent={'userProfile'}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectView={setView}
          />
        </View>
        // User Questions
        {view === 'Questions' && (
          <View style={tw`p-5`}>
            <CardCommponent
              profileName="Jacob Washington"
              timeAgo="20m ago"
              content="If you think you are too small to make a try sleeping with a mosquito. ~ Dalai Lama"
              likes={2225}
              comments={45}
              shares={120}
              isImage={false}
            />

            <CardCommponent
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

            <CardCommponent
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
          </View>
        )}
        {view === 'My Communities' && (
          <View style={tw`p-5 gap-4`}>
            <BlockComponent text={'Restraunts'} />
            <BlockComponent text={'Books'} />
            <BlockComponent text={'Movies'} />
          </View>
        )}
        <View>
          <TouchableOpacity
            style={tw`m-4 bg-blue-500 py-3 px-6 rounded-full`}
            onPress={onLogoutPress}>
            <Text style={tw`text-white text-center`}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <BottomNavBar navigation={navigation} /> */}
    </View>
  );
}

export default UserProfile;
