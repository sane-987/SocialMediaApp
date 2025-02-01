import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import tw from 'twrnc';
import useAppContext from '../../context';
import {useEffect, useState} from 'react';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

export default function AskQuestionScreen() {
  const {userApi, latitude, longitude, questionApi} = useAppContext();

  const [userId, setUserId] = useState(null);

  const [questionText, setQuestionText] = useState(null);

  useEffect(function () {
    getUserId();
  }, []);

  function getUserId() {
    userApi
      .getUserId()
      .then(function (result) {
        setUserId(result?.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function askQuestion() {
    const requestBody = {
      question: questionText,
      latitude: latitude,
      longitude: longitude,
    };
    questionApi
      .addQuestion(userId, requestBody)
      .then(function (result) {
        console.log('Question posted successfully');
        setQuestionText(null);
      })
      .catch(function (error) {
        console.log(error, '######');
        console.log(error);
      });
  }

  return (
    <View style={tw`flex-1 bg-black px-4 py-6`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-white text-lg font-bold`}>Discard</Text>
        <Text style={tw`text-blue-500 text-lg font-bold`}>Create</Text>
        <TouchableOpacity>
          <Text style={tw`text-blue-500 text-lg font-bold`}>Publish</Text>
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <View style={tw`relative bg-[#1E1E1E] p-4 rounded-lg`}>
        <View style={tw`flex-row items-start`}>
          {/* Profile Image */}
          <Image
            source={{uri: 'https://via.placeholder.com/150'}} // Replace with actual profile image URL
            style={tw`h-10 w-10 rounded-full`}
          />
          {/* Text Input */}
          <TextInput
            placeholder="What’s on your mind?"
            placeholderTextColor="#a3a3a3"
            multiline
            value={questionText}
            onChangeText={function (value) {
              console.log(questionText);
              setQuestionText(value);
            }}
            style={tw`text-white flex-1 text-lg`}
          />
        </View>
        {/* Add Media Button */}
        <TouchableOpacity
          style={tw`absolute bg-blue-500 p-2 w-11 rounded-full bottom-2 right-2`}>
          <Text style={tw`text-white text-center text-xl`}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Post and Story Buttons */}
      <View style={tw`flex-row justify-between mt-6`}>
        <TouchableOpacity
          disabled={questionText === null}
          style={tw`bg-blue-500 flex-1 mr-2 py-3 rounded-lg`}
          onPress={askQuestion}>
          <Text style={tw`text-white text-center text-lg font-bold`}>POST</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={tw`bg-[#1E3A8A] flex-1 ml-2 py-3 rounded-lg`}>
          <Text style={tw`text-white text-center text-lg font-bold`}>
            STORY
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
