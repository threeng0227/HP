import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header,Tabs,Tab,TabHeading, Left, Body, Button, Icon, Title,FooterTab, Content, ListItem, Right} from 'native-base';
import Tabrequest from './tabsendrequestmoney/tabrequest.js'
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Send/Request Money</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
      <Tabs  tabContainerStyle={{borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,height:40}} style={{marginTop:'5%',marginRight:'2%',marginLeft:'2%'}} tabBarUnderlineStyle={{width:0}} >
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopLeftRadius:20,borderBottomLeftRadius:20}}  heading="Send money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
        <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%'}}>
                    Your balance:
                </Text>
                <Text style={{color:'green',fontSize:21,marginLeft:'30%',paddingTop:'3%'}}>
                    $ 764.00
                </Text>   
                </View>
            
                <Button primary style={site.btn}><Text style={site.btn1}> Send money </Text></Button> 
          <Tabsend />
        </Tab>
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopRightRadius:20,borderBottomRightRadius:20}} heading="Request money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}} >
        <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%'}}>
                    Your balance:
                </Text>
                <Text style={{color:'green',fontSize:21,marginLeft:'30%',paddingTop:'3%'}}>
                    $ 764.00
                </Text>   
                </View>
            
                <Button primary style={site.btn}><Text style={site.btn1}
                onPress={()=>{this.props.navigation.navigate('SelectSendRquest1')}}
                > Send Request </Text></Button> 
          <Tabrequest />
        </Tab>

      </Tabs>
      
    </Container>
      
    );
  }
}
var site=StyleSheet.create({
 
 
  
  view1:{
      height:50,
      marginLeft:'4%',
      marginTop:'4%',
      marginRight:'4%',
      borderWidth:1,
      borderRadius:2,
      borderColor: 'silver',
     
      flexDirection:'row'
  },
  
    btn:{
        height:50,
    width:'43%',
    marginBottom:'3%',
    marginLeft:'32%',
    marginTop:'3%',
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
        marginTop:'10%',
     color:'white',
     fontSize:16,
     }
});
  