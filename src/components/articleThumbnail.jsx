import React from 'react'
import {View,Text} from 'react-native'
const ArticleThumbnail =({item}) => {
    return(
        <View>
            <Text>{item.title !=null? item.title : ''}</Text>
            <Text>{item.publishedAt != null ? item.publishedAt : ''}</Text>
            <Text>{item.author != null ? item.author : ''}</Text>
        </View>
    )

}
export default ArticleThumbnail