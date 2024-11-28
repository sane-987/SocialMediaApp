import {View, TextInput, Button} from 'react-native';
import tw from 'twrnc';
import Feather from 'react-native-vector-icons/Feather';

export default function SearchBar(props) {
  return (
    <View
      style={tw`bg-slate-400 w-full rounded-3xl text-base flex-row items-center justify-between pr-2 pl-2`}>
      <TextInput style={tw``} placeholder="Search" />
      <Feather name="search" size={20} />
    </View>
  );
}
