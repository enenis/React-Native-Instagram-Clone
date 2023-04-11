import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        marginVertical:15
    },
    image:{
        width:40,
        height:40,
        borderRadius:50,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:"orange",
        margin:10  
    },
    inner_container:{
        flexDirection:"row",
        alignItems:"center",

    },
    username:{
        fontWeight:"bold",
        color:"white",
        fontSize:20
    },
    image_container:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    big_image:{
        width:Dimensions.get("screen").width/1,
        height:350
    },
    text_container:{
        flexDirection:"row"
    },
    text:{
        color:"white",
        marginRight:10,
        marginLeft:5,
        fontWeight:"bold"
    },
    email:{
        color:"white"
    }
})