import { Text, View } from "react-native";
import tw from 'twrnc';


function RoundedText(props) {
    return (
        <Text style={tw`rounded-full border-2 m-.5 text-center p-1`}>{props.text}</Text>
    )
}

export default RoundedText