import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Tranfer9 from './Transfer9';

export default class TransactionSend extends Component {
  constructor(props ){
    super(props);
    this.state={

      timeout:false,
    }
   
  }
  componentDidMount() {
    setTimeout(()=>{this.props.navigation.navigate('RequestSentSuccess')}, 3000); 
  }
  render() {
   
      return (
        <Container>
 <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Notification</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',backgroundColor:'#EEEEEE'
        }}>
          <View style={{ justifyContent: 'flex-end',alignItems: 'center',flex:2,width: 350, height: 50, }} >
          <Image style={{height:100,width:100}}
              source={require('../Appointments/images/iconprecessing.png')} 
                  />
          </View>
          <View style={{ justifyContent: 'center',alignItems: 'center',flex:1,width: 350, height: 50, }} >
          <Text style={{fontSize:21,color:'skyblue'}}>Transaction processing ...</Text>
          </View>
          <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:2,width: 350, height: 50, }} >
          <Text>You will receive a notification when</Text>
          <Text> the transaction is complete</Text>
          </View>
        </View>
        </Container>
       
      
      )
      
  }
}
var site=StyleSheet.create({

  text:{
    color:'black',fontSize:12
  },
 
  icon:{
    
    color:'gray',
  },
  header:{
    backgroundColor:'white',
    color:'#00BFFF',
  },
  
});