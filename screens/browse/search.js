import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import SearchBar from '../../components/ui/searchBar';
import tw from 'twrnc';
import BottomNavBar from '../../components/ui/navBar';
import {useEffect, useState} from 'react';
import useAppContext from '../../context';
import CarComponent from '../../components/ui/carComponent';
import CardCommponent from '../../components/ui/cardComponent';
import CategoriesComponent from '../../components/ui/cateogaryComponent';
import QuestionComponent from '../../components/ui/questionComponent';

function Search({navigation}) {
  const {carApi, questionApi, answerApi, userApi} = useAppContext();

  const [carData, setCarData] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('All');

  const [apiUserId, setApiUserId] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);

  const categories = [
    'All',
    'Profiles',
    'Questions',
    'Posts',
    'Institutes',
    'Videos',
    'Links',
    'Tags',
  ];

  function backButtonFunction() {
    navigation.replace('Home');
  }

  useEffect(function () {
    userApi.getUserId().then(function (result) {
      console.log(result);
      setApiUserId(result?.id);
    });
  });

  useEffect(
    function () {
      if (apiUserId) {
        questionApi.getQuestion(apiUserId).then(function (result) {
          result?.map(function (question, key) {
            const newQuestions = result.map(question => ({
              id: question?.id,
              question: question?.question,
              answers: [], // ✅ Corrected initialization
            }));

            setQuestions(prevQuestions => [...prevQuestions, ...newQuestions]);
          });
        });
      }
    },
    [apiUserId],
  );

  useEffect(
    function () {
      if (questions) {
        questions.map(function (question) {
          answerApi
            .getAnswer(question?.id)
            .then(function (result) {
              questions['answers'].push(result);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      }
    },
    [questions],
  );

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
              onSelectView={setView}
            />
          </View>

          {view == 'All' && (
            <View>
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
          )}
          {view === 'Questions' && (
            <View>
              {
                <QuestionComponent
                  key={key}
                  question={questionsdd}
                  // answers={}
                />
              }
            </View>
          )}
        </View>
      </ScrollView>

      {/* <BottomNavBar navigation={navigation} /> */}
    </View>
  );
}

export default Search;
