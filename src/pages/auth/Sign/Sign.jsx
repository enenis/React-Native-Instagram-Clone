import React from 'react'
import { View,Text, TextInput } from 'react-native'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { Formik } from 'formik'
import auth from "@react-native-firebase/auth"
import { showMessage, hideMessage } from "react-native-flash-message";

function Sign({navigation}) {

  const initalFormValues={
    usermail:"",
    password:"",
    repassword:"",
  }

  async function handleFormSubmit(formValues) {
    if (!formValues.password||!formValues.usermail||!formValues.repassword) {
      showMessage({
        message: "Dont give an empty space",
        type: "warning",
      });
      return
    }
    try {
      await auth().createUserWithEmailAndPassword(formValues.usermail,formValues.password)
      showMessage({
        message: "Successfuly Registered",
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
        <Text style={{fontSize:90,color:"darkgreen",fontWeight:"bold",textAlign:"center",textAlignVertical:"center"}} onPress={()=>navigation.navigate("LoginPage")}>Sign{"\n"}Up</Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit})=>(
        <>
        <Input value={values.usermail} onChange={handleChange("usermail")} placeholder={"e-mail"} />
        <Input value={values.password} onChange={handleChange("password")} placeholder={"password"} />
        <Input value={values.repassword} onChange={handleChange("repassword")} placeholder={"re-password"} />
        <Button text={"Sign Up"} onPress={handleSubmit}/>
        </>
        )}
        </Formik>
        <Button text={"Go Back"} onPress={()=>navigation.navigate("LoginPage")} theme='secondary'/>
    </View>
  )
}

export default Sign