import React from 'react';
import {View,Text,Pressable} from 'react-native';
import globalStyles from "../styles/global";

const Button =({onPress}) =>{
    return (
        <Pressable onPress ={onPress}>
            <View style={globalStyles.button}>
                <Text>Press me!</Text>
            </View>
        </Pressable>
    )
}
export default Button