import {useNavigation, useNavigationState} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

function BottomNavBar() {
  const navigation = useNavigation(); // Access navigation object

  const handleNavigation = targetScreen => {
    navigation.navigate(targetScreen);
  };

  return (
    <View
      style={tw`absolute bottom-0 w-full bg-slate-700 flex-row items-center justify-around h-16`}>
      {/* Home Button */}
      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => handleNavigation('Home')}>
        <Ionicons name="home-outline" size={24} color="white" />
        <Text style={tw`text-white text-xs`}>Home</Text>
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => handleNavigation('Search')}>
        <Ionicons name="search-outline" size={24} color="white" />
        <Text style={tw`text-white text-xs`}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => handleNavigation('AskQuestion')}>
        <Ionicons
          name="add"
          size={24}
          color="white"
          style={tw`bg-gray-300 rounded-full`}
        />
        <Text style={tw`text-white text-xs`}>Ask</Text>
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => handleNavigation('Profile')}>
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={tw`text-white text-xs`}>Profile</Text>
      </TouchableOpacity>

      {/* Settings Button */}
      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => handleNavigation('Settings')}>
        <Ionicons name="settings-outline" size={24} color="white" />
        <Text style={tw`text-white text-xs`}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavBar;
