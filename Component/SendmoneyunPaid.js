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
      <Tabs  tabContainerStyle={{borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,height:40}} style={{marginTop:'5%',marginRight:'3%',marginLeft:'3%'}} tabBarUnderlineStyle={{width:0}} >
        <Tab  activeTabStyle={{backgroundColor:'#0764b0',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:'#0764b0',borderWidth:1}} activeTextStyle={{fontWeight:'100'}}  heading="Send money" textStyle={{color:'#0764b0',fontWeight:'500'}} tabStyle={{backgroundColor:'white',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:'#0764b0',borderWidth:1}}>
        <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%',flex:1,}}>
                    Your balance:
                </Text>
                <Text style={{color:'#34c00b',fontSize:21,paddingTop:'3%',fontWeight:'600',flex:1,textAlign:'right',paddingRight:'5%'}}>
                    $ 764.00
                </Text>   
                </View>
            
                <Button  style={site.btn}
                
               ><Text style={site.btn1}> Send money </Text></Button>  
          <Tabsend />
        </Tab>
        <Tab  activeTabStyle={{backgroundColor:'#0764b0',borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:'#0764b0',borderWidth:1}} activeTextStyle={{fontWeight:'100'}} heading="Request money" textStyle={{color:'#0764b0',fontWeight:'500'}} tabStyle={{backgroundColor:'white',borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:'#0764b0',borderWidth:1}} >
        <View style={site.view1}>              
        <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%',flex:1,}}>
                    Your balance:
                </Text>
                <Text style={{color:'#34c00b',fontSize:21,paddingTop:'3%',fontWeight:'600',flex:1,textAlign:'right',paddingRight:'5%'}}>
                    $ 764.00
                </Text>   
              </View>
          
              <Button  style={site.btn}
             
              ><Text style={site.btn1}> Send request </Text></Button> 
          <TabrequestPaid />
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
    backgroundColor:'#0764b0',
  height:47,
width:'43%',
marginBottom:'2%',
marginLeft:'30%',
marginTop:'3%',
borderRadius: 4,
justifyContent: 'center',paddingTop:'3%'

},
    btn1:{
        fontWeight:'600',
     color:'white',
     fontSize:16,textAlign:'center'
     }
});
  