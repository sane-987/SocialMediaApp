import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export default function CarComponent(props) {
  //   console.log(props);
  return (
    <View style={tw`bg-slate-400 p-4 rounded-lg`}>
      <View style={tw`flex flex-col items-start gap-y-1`}>
        <Text style={tw`text-lg font-semibold`}>{props.carname}</Text>
        <Text style={tw`text-sm`}>Year: {props.caryear}</Text>
        <Text style={tw`text-sm`}>Km Driven: {props.carkm}</Text>
        <Text style={tw`text-sm`}>
          Transmission type: {props.cartransmission}
        </Text>
      </View>
      <View style={tw`mt-4`}>
        <TouchableOpacity
          onPress={props.handleClick}
          style={tw`bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100`}>
          <Text style={tw`text-black`}>BOOK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
