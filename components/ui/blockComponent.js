import {Text, View} from 'react-native';
import tw from 'twrnc';

export function BlockComponent(props) {
  // text-teal-300
  return (
    <View
      style={tw`rounded-xl bg-slate-700 flex items-center justify-center p-4`}>
      {props.number ? (
        <Text style={tw`text-base font-semibold text-cyan-500`}>
          {props.number}
        </Text>
      ) : null}
      <Text
        style={
          !props.number ? tw`text-teal-300 font-semibold` : tw`text-white`
        }>
        {props.text}
      </Text>
    </View>
  );
}
