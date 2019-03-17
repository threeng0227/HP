import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab, CheckBox} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class SelectSendRquest1 extends Component {
  constructor(){
    super();
    this.state={
      check:false,
      checkic:true
    }
  }
  onePressed(){
    this.setState({
      check:!this.state.check
    })
  }
  iconPressed(){
   
      alert('Demo')
  
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Notification</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <Content style={{backgroundColor:'white'}}> 
         
        <View style={{marginTop:'6%',height:40,marginBottom:'10%'}}>
        <Image style={{width:'95%',marginLeft:'2.5%'}}
          source={require('../Appointments/images/process1.png')} 
            />
        </View>
        <View style={{flex:1,flexDirection:'column'}}> 
         <View style={{marginLeft:'4%',marginRight:'4%',borderRadius:4,borderWidth:0.5,borderColor:'#EEEEEE',paddingTop:'5%',padding:'3%'}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
            Select account to receive money
            </Text>
            
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center'}}>
               <View style={{flex:1}}><CheckBox style={site.check} checked={this.state.check}
             onPress={() =>this.onePressed()}/></View>
                
                <View style={{flex:1}}><Image style={{height:50,width:50}} source={require('../Appointments/images/Group2.png')} /></View>
                <View style={{flex:2}}>
                  <Text style={{color:'black'}}>Harmony Account</Text>
                  <Text style={{color:'black'}}>JERRY NGUYEN</Text>
                </View>
            </View>
             <View style={{paddingTop:'3%',height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center'}}>
                <View style={{flex:1}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:4}}><Text style={{color:'black'}}>Add a bank account or card</Text></View>
             </View>
              </View> 
              

              
          </View>
        </Content>
        <View style={site.view} 
        onPress={()=>{this.props.navigation.navigate('Process2SendMoney`')}}>
                <Button  style={site.btn}><Text style={site.btn1}> Send </Text></Button> 
              </View>
              
      </Container>
    );
  }
}
var site=StyleSheet.create({
    ic:{
      paddingTop:'8%',
        color:"#00B2EE",
        paddingLeft:'18%',
        fontSize:38,
        flex:1
    },
    check:{
        borderRadius:30,
        height:32,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'#EEEEEE',
       
    },
    btn:{
      backgroundColor:'#00B2EE',
    width:'40%',
    
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
       
      color:'white',
      fontSize:16,
      },
      view:{
      justifyContent: 'center',alignItems:'center',flexDirection:'row'
   }
});