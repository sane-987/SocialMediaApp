import {Text, View} from 'react-native';
import tw from 'twrnc';

export default function QuestionComponent(props) {
  return (
    <View style={tw`gap-2`}>
      {/* Question Box */}
      <View style={tw`rounded-lg p-4 bg-slate-800`}>
        <Text style={tw`text-white`}>{props.question}</Text>
      </View>

      {/* Answers Section */}
      {props.answer && props.answer.length > 0 && (
        <View style={tw`gap-2`}>
          {props.answer.map((answer, index) => (
            <Text
              key={index}
              style={tw`rounded-lg bg-slate-600 p-2 text-white`}>
              {answer}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}
