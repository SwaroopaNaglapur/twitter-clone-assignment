import { OtherColors } from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../assets/images/x-twitter.svg");

export default function Signup() {
    const [username, setUsername]= React.useState("");
    const [password, setPassword]= React.useState("");
    const [confirmPassword, setConfirmPassword]= React.useState("");

  const registerCallback = () => {
    // handle from DB
    if (username.length && password.length && confirmPassword.length && (password === confirmPassword)) {
      router.navigate('/signin');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <FontAwesome6 name='square-x-twitter' size={170} resizeMode='contain' />
        <Text style={styles.title}>Welcome new user!</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='NEW EMAIL OR USERNAME' value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder='NEW PASSWORD' secureTextEntry value={password} onChangeText={setPassword}/>
            <TextInput style={styles.input} placeholder='CONFIRM PASSWORD' secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>
        </View>
        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={registerCallback}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
      alignItems : "center",
      paddingTop: 70,
    },
    image : {
      height : 160,
      width : 170
    },
    title : {
      fontSize : 30,
      fontWeight : "bold",
      textAlign: "center",
      paddingVertical : 40,
      color: OtherColors.primary
    },
    inputView : {
      gap : 15,
      width : "100%",
      paddingHorizontal : 40,
      marginBottom : 15
    },
    input : {
      height : 50,
      paddingHorizontal : 20,
      borderColor : "lightblue", // "red",
      borderWidth : 1,
      borderRadius: 7
    },
    button : {
      backgroundColor : OtherColors.primary,
      height : 45,
      borderColor : "gray",
      borderWidth  : 1,
      borderRadius : 5,
      alignItems : "center",
      justifyContent : "center"
    },
    buttonText : {
      color : "white"  ,
      fontSize: 18,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      paddingHorizontal : 50
    },
    footerText : {
      marginVertical: 15,
      textAlign: "center",
      color : "gray",
    },
    signup : {
      color : OtherColors.primary,
      fontSize : 13
    }
  })