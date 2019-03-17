import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header,Tabs,Tab, Left, Body, Footer, Button, Icon, Title,FooterTab, Content, ListItem, Right} from 'native-base';
import Tabrequest from './tabsendrequestmoney/tabrequest.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Tabsend864 from './tabsendrequestmoney/tabsend864.js';
export default class SendMoney914 extends Component {
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
      <Tabs  tabContainerStyle={{borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,height:40}} style={{marginTop:'5%',marginRight:'2%',marginLeft:'2%'}} tabBarUnderlineStyle={{backgroundColor:'#00B2EE' ,width:'40%',marginLeft:20, borderColor : '#00B2EE' , borderBottomWidth : 0 , borderBottomColor : '#00B2EE'}} >
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopLeftRadius:20,borderBottomLeftRadius:20}}  heading="Send money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
        <Container>
            <Content>
                <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%'}}>
                    Your balance:
                </Text>
                <Text style={{color:'green',fontSize:21,marginLeft:'30%',paddingTop:'3%'}}>
                    $ 864.00
                </Text>   
                </View>
            
                <Button primary style={site.btn}><Text style={site.btn1}> Send money </Text></Button> 
              
            <View>
          <Text style={site.Text}> Pending requests </Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PayRquest')}}>
          <View style={site.view32}>
             <View style={{flex: 1}}>
                <Text style={site.txt33}>
                    Today
                </Text>
                <Text style={site.txt33}>
                    Receiver:
                 </Text >
                <Text style={site.txt33}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={site.txt32}>
                11 : 00 AM
                </Text>
                <Text style={site.txt32}>
                Jerry Nguyen (You)
                </Text>
                <Text style={site.txt32}>
                $ 100
                </Text>
             </View>
          <View style={{flex: 1}}>
                <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic",color:'white'}}>
                Unpaid
                </Text>
            
                </View>
            </View>
            </TouchableOpacity>
          <Text style={site.Text}>History</Text>
            <View style={site.view2}>
             <View style={{flex: 1}}>
                <Text style={site.txt}>
                    Today
                </Text>
                <Text style={site.txt}>
                    Receiver:
                 </Text >
                <Text style={site.txt}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={site.txt1}>
                11 : 00 AM
                </Text>
                <Text style={site.txt1}>
                William
                </Text>
                <Text style={site.txt1}>
                $ 10
                </Text>
             </View>
          <View style={{flex: 1}}>
                <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
                Received
                </Text>
            
                </View>
            </View>
        </View> 
        
        <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
          <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William, Jerry Nguyen
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
            </Content>
       
          </Container>
        </Tab>
        <Tab  activeTabStyle={{backgroundColor:'#00B2EE',borderTopRightRadius:20,borderBottomRightRadius:20}} heading="Request money" textStyle={{color:'#00B2EE'}} tabStyle={{backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}} >
        <Container>
            <Content>
                <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%'}}>
                    Your balance:
                </Text>
                <Text style={{color:'green',fontSize:21,marginLeft:'30%',paddingTop:'3%'}}>
                    $ 764.00
                </Text>   
                </View>
            
                <Button primary style={site.btn}><Text style={site.btn1}> Send money </Text></Button> 
               
            <View>
          <Text style={site.Text}> History </Text>
          <View style={[site.view32,{backgroundColor:'#EEEEEE'}]}>
             <View style={{flex: 1}}>
                <Text style={[site.txt33]}>
                    Today
                </Text>
                <Text style={[site.txt33]}>
                    Receiver:
                 </Text >
                <Text style={[site.txt33]}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={[site.txt32]}>
                11 : 00 AM
                </Text>
                <Text style={[site.txt32]}>
                Jerry Nguyen (You)
                </Text>
                <Text style={[site.txt32]}>
                $ 100
                </Text>
             </View>
          <View style={{flex: 1}}>
                <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
                Unpaid
                </Text>
            
                </View>
            </View>
          <Text style={site.Text}>History</Text>
            <View style={site.view2}>
             <View style={{flex: 1}}>
                <Text style={site.txt}>
                    Today
                </Text>
                <Text style={site.txt}>
                    Receiver:
                 </Text >
                <Text style={site.txt}>
                    Amount:
                </Text>
          </View>
            <View style={{flex: 2}}>
                    <Text style={site.txt1}>
                11 : 00 AM
                </Text>
                <Text style={site.txt1}>
                William
                </Text>
                <Text style={site.txt1}>
                $ 10
                </Text>
             </View>
          <View style={{flex: 1}}>
                <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
                Received
                </Text>
            
                </View>
            </View>
        </View> 
        <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
          <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William, Jerry Nguyen
            </Text>
            <Text style={site.txt1}>
            $ 50
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
            </Content>
       
          </Container>
        </Tab>

      </Tabs>
     
    </Container>
      
    );
  }
}
var site=StyleSheet.create({
  view2:{
      backgroundColor:'white',
     borderColor:'skyblue',
      borderRadius: 5,
      height:110,
      margin:'3%',
      flexDirection:'row',
      borderWidth:1
    },
    view32:{
      backgroundColor:'skyblue',
     borderColor:'skyblue',
      borderRadius: 5,
      height:110,
      margin:'3%',
      flexDirection:'row',
      borderWidth:1
    },
  txt:{
      paddingLeft:'18%',paddingTop:'15%',
    },
    txt33:{
      paddingLeft:'18%',paddingTop:'15%'
    },
    txtpend:{
        color:'white',
      paddingLeft:'18%',paddingTop:'15%'
    },
    txt1:{
      paddingLeft:'18%',paddingTop:'8%',
      fontSize:13
    },
    txt32:{
      paddingLeft:'18%',paddingTop:'8%',
      fontSize:13,
    },
    txtpend1:{color:'white',
      paddingLeft:'18%',paddingTop:'7.5%'
    },
    Text:{
      color:'white',fontSize:16,marginLeft:'3%'
    },

    view:{
      backgroundColor:'#EEEEEE',
      borderRadius: 5,
      height:110,
     
      margin:'3%',
      flexDirection:'row',
    },
    viewpend:{
     
      
      height:40,
      justifyContent:'center',
      alignItems:'center',
      marginRight:'3%',
      marginLeft:'3%',
      marginBottom:'3%'
    },
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
  text:{
      color:'black',fontSize:12
    },
    Text:{
      color:'black',fontSize:16,marginLeft:'3%'
    },
    icon:{    
      color:'gray',
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
  