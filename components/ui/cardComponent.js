import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

// Reusable Card Component
export default function CardCommponent(props) {
  return (
    <View style={tw`bg-cyan-950 rounded-lg p-4 mb-4`}>
      {' '}
      {/* Card Container */}
      {/* Header Section */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <View>
          <Text style={tw`text-white font-bold text-base`}>
            {props.profileName}
          </Text>
          <Text style={tw`text-gray-400 text-sm`}>{props.timeAgo}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* Content Section */}
      {props.isImage ? (
        <ScrollView horizontal={true} contentContainerStyle={tw`gap-3`}>
          {props.content?.map(function (image, key) {
            return (
              <Image
                source={require('../../assets/background.png')}
                style={tw` h-40 rounded-lg mb-4`}
                resizeMode="cover"
              />
            );
          })}
        </ScrollView>
      ) : (
        <Text style={tw`text-white text-base mb-4`}>{props.content}</Text>
      )}
      {/* Footer Section */}
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity style={tw`flex-row items-center mr-4`}>
            <Icon name="thumbs-up" size={18} color="white" style={tw`mr-1`} />
            <Text style={tw`text-white text-sm`}>{props.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-row items-center mr-4`}>
            <Icon name="comment" size={18} color="white" style={tw`mr-1`} />
            <Text style={tw`text-white text-sm`}>{props.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-row items-center`}>
            <Icon name="share" size={18} color="white" style={tw`mr-1`} />
            <Text style={tw`text-white text-sm`}>{props.shares}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="bookmark" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
