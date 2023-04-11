import React from 'react'
import { View,Text,TextInput } from 'react-native'
import { Formik } from 'formik'
import auth from "@react-native-firebase/auth"
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { showMessage, hideMessage } from "react-native-flash-message";

function Login({navigation}) {
  
  const initalFormValues={
    usermail:"",
    password:"",
  }

  async function handleFormSubmit(formValues) {
    if (!formValues.usermail||!formValues.password) {
      showMessage({
        message: "Don't give an empty space!",
        type: "warning",
      });
      return
    }
    try {
      await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
      showMessage({
        message: "Successfuly Login",
        type: "success",
      });
    } catch (error) {
      showMessage({
        message: error.code,
        type: "danger",
      });
      console.log(error);
    }
  }
  return (
    <View>
        <Text style={{fontSize:90,color:"darkgreen",fontWeight:"bold",textAlign:"center",textAlignVertical:"center"}} onPress={()=>navigation.navigate("LoginPage")}>Log{"\n"}In</Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit})=>(
        <>
        <Input value={values.usermail} onChange={handleChange("usermail")} placeholder={"e-mail"} />
        <Input value={values.password} onChange={handleChange("password")} placeholder={"password"} />
        <Button text={"Login"} onPress={handleSubmit}/>
        </>
        )}
        </Formik>
        <Button text={"Go Sign"} onPress={()=>navigation.navigate("SignPage")} theme='secondary'/>
    </View>
  )
}

export default Login