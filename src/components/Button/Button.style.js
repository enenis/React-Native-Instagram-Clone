import { StyleSheet } from 'react-native'

const base_style=StyleSheet.create({
    container:{
        
        margin:10,
        padding:5,
        borderRadius:10
    },
    text:{
        textAlign:"center",
        padding:10,
        fontSize:20,
        fontWeight:"bold",
        
    }
})

export default {
    primary:StyleSheet.create({
        container:{
            ...base_style.container,
            marginTop:40,
            backgroundColor:"#bdbdbd",
        },
        text:{
            ...base_style.text,
            color:"darkgreen",
        }
    }),
    secondary:StyleSheet.create({
        container:{
            ...base_style.container,
            backgroundColor:"darkgreen",
        },
        text:{
            ...base_style.text,
            color:"white",
            
        }
    })
}