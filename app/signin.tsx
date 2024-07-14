import { OtherColors } from '@/constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../assets/images/x-twitter.svg");

type Props = {
  sss: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Welcome({sss}: Props) {
    const [username, setUsername]= React.useState("");
    const [password, setPassword]= React.useState("");

  const loginCallback = () => {
    // handle from DB
    if ((username === 'test' && password === 'test') || (username === 'swaru' && password === 'swaru')) {
      router.navigate('/home');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <FontAwesome6 name='square-x-twitter' size={170} resizeMode='contain' />
        {/* <Image source={logo} style={{height: 160, width: 170}} resizeMode='contain' /> */}
        <Text style={styles.title}>Welcome to X!</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword}/>
        </View>
        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={loginCallback}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
        </View>
        <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}> Sign Up</Text></Text>

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