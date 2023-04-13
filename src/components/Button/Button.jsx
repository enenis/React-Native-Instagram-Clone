import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from './Button.style'
function Button({text,theme="primary",onPress}) {
  return (
    //Button Section
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
        <Text style={styles[theme].text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button