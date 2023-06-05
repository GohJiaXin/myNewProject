import React from 'react'
import{View,FlatList,Text,Pressable} from 'react-native'

import globalStyles from '../styles/global'
import Button from '../components/button'
import ArticleThumbnail from '../components/articleThumbnail'
import {useState} from 'react'
const newsItemExample =[{
    "source":{
        id: null,
        "name":"sourceName"
    },
    "author":"Author Name",
    "title":"Article Title",
    "description":"Article Description",
    "url":"url",
    "urlToImage":"url",
    "publishedAt":"Publish Date",
    "content":null

},{
    "source":{
        id: null,
        "name":"sourceName"
    },
    "author":"Author Name",
    "title":"Article Title",
    "description":"Article Description",
    "url":"url",
    "urlToImage":"url",
    "publishedAt":"Publish Date",
    "content":null
}]
const getData=async() =>{
    const response =await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c185ff7708e44dea7b0f22f482203d5')
    const parsedResponse=await response.json()
    const articles = parsedResponse.articles
    console.log(articles)
}
const Home = () => {
    const [newsItem,setNewsItem]=useState()
    const getData=async() =>{
        const response =await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c185ff7708e44dea7b0f22f482203d5')
        const parsedResponse=await response.json()
        const articles = parsedResponse.articles
        setNewsItem(articles)
    }
    return (
        /*<View style={globalStyles.container}>
          <Pressable onPress={()=>{console.log("Button pressed!")}}>
            <View style ={globalStyles.button}>
                <Text>Press Me!</Text>
            </View>
            <View style={globalStyles.container}>
                <Button onPress={()=>{console.log("Button pressed!")}} />
            </View>
          </Pressable>
        </View>*/
        <View style={globalStyles.container}>
            <Button onPress={getData} />
            <FlatList
            data={newsItem}
            renderItem={({item}) => <ArticleThumbnail item={item} />}
            />
        </View>
        
    )
}

export default Home