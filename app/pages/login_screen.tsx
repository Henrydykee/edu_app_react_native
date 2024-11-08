import { View, Text , Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login() {
  return (
    <View>
      <Image source={require('/Users/mac/movieUi/assets/images/login_image.png')} />
      <View style ={style.container}>
      <Text style={{fontSize : 35, textAlign: 'center', fontWeight: 'bold',  }}>Welcome To Codebox</Text>
      <Text style= {{ textAlign: 'center',marginTop : 80, fontSize:20}}> Login/Signup</Text>

      <View style = {style.googleButton}>
        <Text style= {{textAlign : 'center',color : '#fff'}}>
          SignIn With Google
        </Text>
      </View>

      </View>
 
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    paddingTop : 40,
    marginTop : -20,
    backgroundColor : '#fff',
    borderTopRightRadius : 30,
    borderTopLeftRadius : 30
  },
  googleButton:{
    backgroundColor:  '#0C7DE4',
    padding : 10,
    margin : 30,
    borderRadius: 10
  }
})