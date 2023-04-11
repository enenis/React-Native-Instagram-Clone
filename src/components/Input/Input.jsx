import React from 'react'
import { View,TextInput, } from 'react-native'
import styles from './Input.style'
function Input({placeholder,value,onChange}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder={placeholder} value={value} onChangeText={onChange} />
    </View>
  )
}

export default Input