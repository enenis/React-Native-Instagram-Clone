import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './PostCard.style'
function PostCard({items}) {
  return (
    // Card Section
    <View style={styles.container}>
        <View style={styles.inner_container}>
            <Image style={styles.image} source={{uri:items.image}} />
            <Text style={styles.username}>{items.username}</Text>
        </View>
        <View style={styles.image_container}>
            <Image style={styles.big_image} source={{uri:items.image}} />
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text}>{items.username}:</Text>
            <Text style={styles.email}>{items.email}</Text>
        </View>
    </View>
  )
}

export default PostCard