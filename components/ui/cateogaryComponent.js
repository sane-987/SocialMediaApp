import {ScrollView, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

// Horizontal Scrollable Categories Component
export default function CategoriesComponent({
  categories,
  selectedCategory,
  onSelectCategory,
  parentComponent,
  onSelectView,
}) {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={tw`gap-4 px-4`}
      showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onSelectCategory(category);
            onSelectView(category);
          }}
          style={tw`px-4 py-2 rounded-full border border-white ${
            selectedCategory === category && !parentComponent
              ? 'bg-white'
              : 'bg-slate-700'
          }`}>
          <Text
            style={tw`${
              selectedCategory === category
                ? parentComponent === 'userProfile'
                  ? 'text-teal-500'
                  : 'text-black'
                : 'text-white'
            } text-base`}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
