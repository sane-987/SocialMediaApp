import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

function RoundedText(props) {
  return (
    <TouchableOpacity onPress={props.handleClick}>
      <Text style={tw`rounded-full border-2 m-.5 text-center p-1`}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default RoundedText;
