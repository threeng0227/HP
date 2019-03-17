import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab, CheckBox} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class ScanQR extends Component {
  constructor(){
    super();
    this.state={
      check:true,
      checkic:true,
      tip:true,
      texttip:'$ -50.00',
      texttip1:'$ 9.00'
    }
  }
  tipPressed=()=>{
      this.setState({tip:!this.state.tip})
      if(this.state.tip==false){
        this.setState({texttip:'$ -50.00'})
        this.setState({texttip1:'$ 9.00'})
      }
      if(this.state.tip==true){
        this.setState({texttip:'$ 0.00'})
        
        this.setState({texttip1:'$ 59.00'})
      }
  }
  onePressed(){
    this.setState({check:true, check1:false,check2 :false,});
  }
  twoPressed(){
    this.setState({check:false, check1:true,check2 :false,});
  }
  threePressed(){
    this.setState({check:false, check1:false,check2 :true,});
  }
  iconPressed(){
   
      alert('asdsa')
  
  }
  render() {
    return (
      <Container >
       <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Scan QR</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>    
        <Content style={{backgroundColor:'white'}}> 
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('InvoiceDetail2')}}>
            <Image style={{with:'100%'}} source={require('../Appointments/images/qr.png')}></Image>
        </TouchableOpacity>
         </Content>
       
      </Container>
    );
  }
}
