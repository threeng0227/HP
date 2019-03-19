import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import TabContactsGift from './tabContactsManuallyGiftCard/ContactsGift.js';
import TabManuallyGift from './tabContactsManuallyGiftCard/ManuallyGift.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class GiftCardContactManually extends Component {
    
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
        <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'10%',marginLeft:'4%'}}>
                Select person to send gift cards
            </Text>
         <View style={{marginLeft:'4%',marginRight:'4%'}}>
           
            <View style={{height:44,flexDirection:'row',paddingLeft:5,alignItems:'center',borderColor:'gray',borderRadius:4,borderWidth:1}}>
                <Icon name="search" style={{fontSize:24,color:'gray'}} />
                <TextInput placeholder="Search" style={{fontSize:20,paddingLeft:15}}></TextInput>
            </View>
            
            <Tabs locked={false}  tabContainerStyle={{width:'50%',borderWidth:0,borderColor:'white'}} tabBarUnderlineStyle={{width:0}} >
                <Tab textStyle={{color:'black',fontWeight:'400'}}  activeTextStyle={{color:'#00B2EE'}} activeTabStyle={{backgroundColor:'white',borderBottomWidth:4,borderColor:'#00B2EE'}}  heading="Contacts" tabStyle={{backgroundColor:'white'}} > 
                <TabContactsGift />  

                </Tab>
                 <Tab textStyle={{color:'black',fontWeight:'400'}} activeTextStyle={{color:'#00B2EE'}} activeTabStyle={{backgroundColor:'white',borderBottomWidth:4,borderColor:'#00B2EE'}}  heading="Manually" tabStyle={{backgroundColor:'white'}}>                 
                 <TabManuallyGift /> 

                </Tab>
            </Tabs>
         </View>
         <View style={site.view11}>
          <Button  style={site.btn}><Text style={site.btn1}
          onPress={()=>{this.props.navigation.navigate('GiftSendCancel')}}> Next </Text></Button> 
          </View>
        </Content>
        
      </Container>
    );
  }
}
var site=StyleSheet.create({
  view:{
      height:70,
      borderWidth:1,
      borderColor:'gray',
      marginBottom:2,
      flex:1,
      flexDirection:'row'
  },
  img:{
   height:50,width:50,marginTop:'3%',marginLeft:'3%'
  },
  viewtxt:{
   flex:2,
   justifyContent:'center',
   paddingLeft:'5%'
  },
  viewtxt1:{
   flex:1,
   justifyContent:'center',
   alignItems:'flex-end',
   marginRight:'6%'
  },
  check:{
      borderRadius:30,
      height:30,
      width:30,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:0,
      borderColor:'#EEEEEE'
  },
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
  view11:{marginTop:'8%',marginBottom:'8%',
     flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
  }
});