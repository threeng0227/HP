import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import TabContactsSend from './tabContactManuallySend/ContactsSend.js';
import TabManuallySend from './tabContactManuallySend/ManuallySend.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class Process2SendMoney extends Component {
    
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Send Money</Text>
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
          source={require('../Appointments/images/process.png')} 
            />
        </View>
         <View style={{marginLeft:'4%',marginRight:'4%'}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
                Select person to send money
            </Text>
            <View style={{height:47,flexDirection:'row',paddingLeft:5,alignItems:'center',borderColor:'gray',borderRadius:4,borderWidth:1}}>
                <Icon name="search" style={{fontSize:24,color:'gray'}} />
                <TextInput placeholder="Search" style={{fontSize:20,paddingLeft:15}}></TextInput>
            </View>
            
            <Tabs   tabContainerStyle={{marginRight:'40%'}} tabBarUnderlineStyle={{width:0}} >
                <Tab textStyle={{color:'black',fontWeight:'500'}}  activeTextStyle={{color:'#00B2EE'}} activeTabStyle={{backgroundColor:'white',borderBottomWidth:4,borderColor:'#00B2EE'}}  heading="Contacts" tabStyle={{backgroundColor:'white',width:'25%'}}> 
                <TabContactsSend />  
                <View style={site.view11}>
          <Button  style={site.btn}
          onPress={()=>{this.props.navigation.navigate('Process3Send')}}><Text style={site.btn1}> Next </Text></Button> 
          </View>
                </Tab>
                 <Tab textStyle={{color:'black',fontWeight:'500'}} activeTextStyle={{color:'#00B2EE'}} activeTabStyle={{backgroundColor:'white',borderBottomWidth:4,borderColor:'#00B2EE'}}  heading="Manually" tabStyle={{backgroundColor:'white'}}>                 
                 <TabManuallySend /> 
                 <View style={site.view11}>
          <Button  style={site.btn}
          onPress={()=>{this.props.navigation.navigate('Process3Rquest ')}}><Text style={site.btn1}> Next </Text></Button> 
          </View>
                </Tab>
            </Tabs>
         </View>
        </Content>
       
      </Container>
    );
  }
}
var site=StyleSheet.create({
 
  btn:{
   backgroundColor:'#00B2EE',
 width:'45%',
 
 borderRadius: 4,
 justifyContent: 'center',
   alignItems:'center'
 },
 btn1:{
   
  color:'white',
  fontSize:16,
  },
  view11:{marginBottom:10,marginTop:10,
     justifyContent: 'center',alignItems:'center',flexDirection:'row'
  }
});