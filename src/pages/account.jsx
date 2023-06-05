import React from 'react'
import{View,FlatList,Text} from 'react-native'
import React,{useEffect,useState} from 'react';
import db from '../../api/firebaseConfig';
import {collection,onSnapshot} from "firebase/firestore"


const Account = () => {
    const [data,setData]=useState()
    useEffect(() =>{
        const getDocuments=() => {
            const dbRef =collection(db,'testCollection')
            onSnapshot(dbRef,(docsSnap)=>{
                var docsArr=[]
                docsSnap.forEach(doc =>{
                    docsSnap.push(doc.data())
                    setData(docsArr)
                })
            })
        }
        return getDocuments()
    },[])
    return (
        <View>
            <FlatList
            data={data}
            renderItem={({item}) =><Text>{item.title}</Text>}
            />
            <Text> This is the Account page.</Text>
        </View>
    )
}
export default Account