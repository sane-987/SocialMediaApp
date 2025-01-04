import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import SearchBar from '../../components/ui/searchBar';
import tw from 'twrnc';
import BottomNavBar from '../../components/ui/navBar';
import {useEffect, useState} from 'react';
import useAppContext from '../../context';
import CarComponent from '../../components/ui/carComponent';
import CardCommponent from '../../components/ui/cardComponent';
import CategoriesComponent from '../../components/ui/cateogaryComponent';

function Search({navigation}) {
  const {carApi} = useAppContext();

  const [carData, setCarData] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Profiles',
    'Posts',
    'Institutes',
    'Videos',
    'Links',
    'Tags',
  ];

  useEffect(function () {
    carApi
      .getCarDetails()
      .then(function (result) {
        setCarData(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function backButtonFunction() {
    navigation.replace('Home');
  }
  return (
    <View style={tw`flex-1 bg-slate-900`}>
      {/* Header Section */}
      <View
        style={tw`flex flex-row items-center justify-between p-5 bg-slate-300 border-b border-gray-200`}>
        <Text style={tw`text-2xl font-medium text-center`}>Search</Text>
        {/* <TouchableOpacity
          style={tw`bg-blue-500 py-3 px-6 rounded-full`}
          onPress={backButtonFunction}>
          <Text style={tw`text-white text-center`}>Home</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView>
        <View style={tw` h-full flex-1 p-4 gap-5`}>
          <View style={tw``}>
            <SearchBar />
          </View>
          <View style={tw`mt-4`}>
            <CategoriesComponent
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </View>
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
      </ScrollView>

      {/* <BottomNavBar navigation={navigation} /> */}
    </View>
  );
}

export default Search;
