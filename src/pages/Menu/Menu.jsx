import React from 'react'
import { View,Text,FlatList,RefreshControl } from 'react-native'
import profiledata from "../../../profiledata.json"
import StoryCard from '../../components/StoryCard/StoryCard';
import PostCard from '../../components/PostCard/PostCard';
function Menu() {
  const[refresh,setRefresh]=React.useState(false)
  
  const onRefresh=()=>{
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
    }, 2000);
  }

  return (
    <View style={{backgroundColor:"black",flex:1}}>
        
        <FlatList data={profiledata} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />} renderItem={({item})=><PostCard items={item} />} ListHeaderComponent={
          <>
          <Text style={{color:"white", margin:10,fontWeight:"bold"}}>INSTAGRAM</Text>
          <FlatList horizontal={true} showsHorizontalScrollIndicator={false}  data={profiledata} renderItem={({item})=><StoryCard items={item} />} />
          </>
        } />
    </View>
  )
}

export default Menu