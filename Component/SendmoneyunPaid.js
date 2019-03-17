import React, { Component } from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { Container, Header,Tabs,Tab, Left, Body, Footer, Button, Icon, Title,FooterTab, Content, ListItem, Right} from 'native-base';
import TabrequestPaid from './tabsendrequestmoney/tabrequestunpaid.js'
import Tabsend from './tabsendrequestmoney/tabsend.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class Sendmoney extends Component {
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
      <Tabs  tabContainerStyle={{borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,height:40}} style={{marginTop:'5%',marginRight:'2%',marginLeft:'2%'}} tabBarUnderlineStyle={{backgroundColor:'#00B2EE' ,width:'40%',marginLeft:20, borderColor : '#00B2EE' , borderBottomWidth : 0 , borderBottomColor : '#00B2EE'}} >
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopLeftRadius:20,borderBottomLeftRadius:20}}  heading="Send money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
          <Tabsend />
        </Tab>
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopRightRadius:20,borderBottomRightRadius:20}} heading="Request money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}} >
          <TabrequestPaid />
        </Tab>

      </Tabs>

    </Container>
      
    );
  }
}
var site=StyleSheet.create({
 
});