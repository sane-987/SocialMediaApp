import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import RoundedText from '../../components/ui/roundedText';
import CardComponent from '../../components/ui/cardComponent';

function Home({ navigation }) {
  const { user, signOut } = useFirebaseAuth();

  async function onLogoutPress() {
    try {
      await signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  return (
    <View style={tw`flex-1`}>
      {/* Header Section */}
      <View style={tw`flex justify-between p-4 bg-white border-b border-gray-200`}>
        <Text style={tw`text-2xl font-medium text-center`}>Communities</Text>
      </View>

      {/* Main Scrollable Content */}
      <ScrollView contentContainerStyle={tw`p-5`}>
        {/* Explore Communities Section */}
        <View style={tw``}>
          <Text style={tw`text-xl font-medium mb-2`}>Explore communities by topic</Text>
          <View style={tw`flex-row flex-wrap`}>
            <RoundedText text="Anime & Cosplay" />
            <RoundedText text="Business & Finance" />
            <RoundedText text="Home & Garden" />
            <RoundedText text="Humanities & Law" />
            <RoundedText text="Internet" />
            <RoundedText text="Pop Culture" />
            <RoundedText text="Q&As & Stories" />
            <RoundedText text="Reading & Writing" />
          </View>
        </View>

        {/* Recommended Section */}
        <View>
          <Text style={tw`text-xl font-medium mb-2`}>Recommended for you</Text>
          <View style={tw`gap-2 mb-5`}>
            <ScrollView horizontal={true} contentContainerStyle={tw`gap-2`}>
              <CardComponent titleText="Movies" buttonText="Join" subTitleText="Film enthusiasts unite!" />
              <CardComponent titleText="Music" buttonText="Join" subTitleText="For all music lovers!" />
              <CardComponent titleText="Tech" buttonText="Join" subTitleText="Latest in technology!" />
            </ScrollView>
          </View>
        </View>

        {/* Recommended Section */}
        <View>
          <Text style={tw`text-xl font-medium mb-2`}>Recommended for you</Text>
          <View style={tw`gap-2 mb-5`}>
            <ScrollView horizontal={true} contentContainerStyle={tw`gap-2`}>
              <CardComponent titleText="Movies" buttonText="Join" subTitleText="Film enthusiasts unite!" />
              <CardComponent titleText="Music" buttonText="Join" subTitleText="For all music lovers!" />
              <CardComponent titleText="Tech" buttonText="Join" subTitleText="Latest in technology!" />
            </ScrollView>
          </View>
        </View>

        {/* Recommended Section */}
        <View>
          <Text style={tw`text-xl font-medium mb-2`}>Recommended for you</Text>
          <View style={tw`gap-2 mb-5`}>
            <ScrollView horizontal={true} contentContainerStyle={tw`gap-2`}>
              <CardComponent titleText="Movies" buttonText="Join" subTitleText="Film enthusiasts unite!" />
              <CardComponent titleText="Music" buttonText="Join" subTitleText="For all music lovers!" />
              <CardComponent titleText="Tech" buttonText="Join" subTitleText="Latest in technology!" />
            </ScrollView>
          </View>
        </View>

        {/* Recommended Section */}
        <View>
          <Text style={tw`text-xl font-medium mb-2`}>Recommended for you</Text>
          <View style={tw`gap-2 mb-5`}>
            <ScrollView horizontal={true} contentContainerStyle={tw`gap-2`}>
              <CardComponent titleText="Movies" buttonText="Join" subTitleText="Film enthusiasts unite!" />
              <CardComponent titleText="Music" buttonText="Join" subTitleText="For all music lovers!" />
              <CardComponent titleText="Tech" buttonText="Join" subTitleText="Latest in technology!" />
            </ScrollView>
          </View>
        </View>

        {/* Recommended Section */}
        <View>
          <Text style={tw`text-xl font-medium mb-2`}>Recommended for you</Text>
          <View style={tw`gap-2 mb-5`}>
            <ScrollView horizontal={true} contentContainerStyle={tw`gap-2`}>
              <CardComponent titleText="Movies" buttonText="Join" subTitleText="Film enthusiasts unite!" />
              <CardComponent titleText="Music" buttonText="Join" subTitleText="For all music lovers!" />
              <CardComponent titleText="Tech" buttonText="Join" subTitleText="Latest in technology!" />
            </ScrollView>
          </View>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity
          style={tw`mt-4 bg-blue-500 py-3 px-6 rounded-full`}
          onPress={onLogoutPress}
        >
          <Text style={tw`text-white text-center`}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Home;
