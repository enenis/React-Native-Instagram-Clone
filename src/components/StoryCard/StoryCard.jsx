import React from 'react'
import { View,Image } from 'react-native'
import styles from './StoryCard.style'
function StoryCard({items}) {
  return (
    <View>
        <Image style={styles.image} source={{uri:items.image}} />
    </View>
  )
}

export default StoryCard