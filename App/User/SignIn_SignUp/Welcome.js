import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Title, Container } from 'native-base';


const styles = StyleSheet.create({
  container :{
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor :'#1c1259',
    justifyContent :'center'
  },
  ImgBackground :{
      marginTop : '5%',
      width : 273,
      height : 51,
  },
  TiTle:{
    position:'absolute',
    bottom :'15%',
      fontSize: 20,
      textAlign: 'center'
  },
  Image:{
   marginBottom : '15%',
   alignItems:'center'
  }
});
export default class Welcome extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('mainwalk')} 
            style={{ flex: 1 }} >
            <Container>
      <View style={styles.container}>
        <View style={styles.Image}>
          <Image source={require('./imgSignUp/Group3127.png')}  />
          <Image source={require('./imgSignUp/Group3128.png')}  style={styles.ImgBackground} />
        </View>
        <Title style ={styles.TiTle}>Welcome to HarmonyPay app</Title>
                </View>
            </Container>
      </TouchableOpacity>
    )
  }
}

