import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import SearchBar from '../../components/ui/searchBar';
import tw from 'twrnc';

function Search({navigation}) {
  function backButtonFunction() {
    navigation.replace('Home');
  }
  return (
    <View style={tw`flex-1`}>
      {/* Header Section */}
      <View
        style={tw`flex flex-row items-center justify-between p-5 bg-slate-300 border-b border-gray-200`}>
        <Text style={tw`text-2xl font-medium text-center`}>Search</Text>
        <TouchableOpacity
          style={tw`bg-blue-500 py-3 px-6 rounded-full`}
          onPress={backButtonFunction}>
          <Text style={tw`text-white text-center`}>Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`h-full`}>
        <View
          style={tw`bg-slate-900 h-full flex-1 items-center justify-between p-4`}>
          <View style={tw`flex-row`}>
            <SearchBar />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;
