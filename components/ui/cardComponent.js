import {View, Text, Image} from 'react-native'
import tw from 'twrnc';

function CardComponent(props) {
    return (
        <View style={tw`border-2 rounded-xl`}>
            <View style={tw}>
                <View style={tw`flex-row items-center justify-between gap-2 p-2`}>
                    <View style={tw`flex-row gap-2`}>
                        <Image source={require("../../assets/logo.png")} style={tw`h-10 w-10 rounded-full`}/>
                        <View>
                            <Text style={tw`font-medium`}>{props.titleText}</Text>
                            <Text style={tw`text-slate-500`}>33.7M members</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between`}>
                        <Text style={tw`bg-sky-700 rounded-full text-center p-1 pr-2 pl-2`}>Join</Text>
                    </View>
                </View>
                <Text style={tw`p-2 pt-1 pb-1`}>{props.subTitleText}</Text>
            </View>
        </View>
    )
}

export default CardComponent