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
      <Tabs  tabContainerStyle={{borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,height:40}} style={{marginTop:'5%',marginRight:'3%',marginLeft:'3%'}} tabBarUnderlineStyle={{width:0}} >
        <Tab  activeTabStyle={{backgroundColor:'#0764b0',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:'#0764b0',borderWidth:1}} activeTextStyle={{fontWeight:'100'}}  heading="Send money" textStyle={{color:'#0764b0',fontWeight:'500'}} tabStyle={{backgroundColor:'white',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:'#0764b0',borderWidth:1}}>
        <Container>
          <Content>
        <View style={site.view1}>              
                <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%',flex:1,}}>
                    Your balance:
                </Text>
                <Text style={{color:'#34c00b',fontSize:21,paddingTop:'3%',fontWeight:'600',flex:1,textAlign:'right',paddingRight:'5%'}}>
                    $ 864.00
                </Text>   
                </View>
            
                <Button  style={site.btn} ><Text style={site.btn1}> Send money </Text></Button>  
              
               
                <View>
          <Text style={site.Text}> Pending requests: </Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PayRquest')}}>
          <View style={site.view32}>
             <View style={{flex:2}}>
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
             <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
                <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic",color:'white'}}>
                Unpaid
                </Text>
            
                </View>
            </View></TouchableOpacity>
          <Text style={site.Text}>History</Text>
            <View style={site.view}>
             <View style={{flex: 2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start'}}>
                <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
                Received
                </Text>
            
                </View>
            </View>
            
        </View> 
        <View style={site.view}>
          <View style={{flex:2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start'}}>
          <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
          <View style={site.view}>
          <View style={{flex: 2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start',}}>
          <Text style={{paddingTop:'19%',fontStyle:"italic"}}>
              Pending
            </Text>
           
          </View>
          </View>
            </Content>
       
          </Container>
        </Tab>
        <Tab  activeTabStyle={{backgroundColor:'#0764b0',borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:'#0764b0',borderWidth:1}} activeTextStyle={{fontWeight:'100'}} heading="Request money" textStyle={{color:'#0764b0',fontWeight:'500'}} tabStyle={{backgroundColor:'white',borderTopRightRadius:10,borderBottomRightRadius:10,borderColor:'#0764b0',borderWidth:1}} >
        <View style={site.view1}>              
        <Text style={{color:'black',fontSize:16,paddingLeft:'5%',paddingTop:'4%',flex:1,}}>
                    Your balance:
                </Text>
                <Text style={{color:'#34c00b',fontSize:21,paddingTop:'3%',fontWeight:'600',flex:1,textAlign:'right',paddingRight:'5%'}}>
                    $ 914.00
                </Text>   
              </View>
          
              <Button  style={site.btn}
              onPress={()=>{this.props.navigation.navigate('SelectSendRquest1')}}
              ><Text style={site.btn3}> Send request </Text></Button> 
          <Tabrequest />
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
      backgroundColor:'#0764b0',
     borderColor:'#0764b0',
      borderRadius: 5,
      height:110,
      margin:'2%',
      flexDirection:'row',
      borderWidth:1
    },
    txt:{
      paddingLeft:'12%',paddingTop:'7.5%',color:'black'
      },
    txt33:{
      paddingLeft:'12%',paddingTop:'7.5%',color:'white'
    },
  
    txt1:{
      paddingTop:'8%',
      fontSize:13,color:'black'
    },
    txt32:{
      paddingTop:'8%',
      fontSize:13,color:'white'
    },
   
    Text:{
      color:'black',fontSize:16,marginLeft:'2%'
    },

    view:{
      backgroundColor:'#fafafa',
      borderRadius: 5,
      height:110,
     borderColor:'#EEEEEE',
      margin:'2%',
      flexDirection:'row',
      borderWidth:1
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
  btn3:{
    backgroundColor:'#0764b0',
  height:47,
width:'43%',
marginBottom:'2%',
marginLeft:'30%',
marginTop:'3%',
borderRadius: 4,
justifyContent: 'center',paddingTop:'3%'

},
btn3:{
  fontWeight:'600',
color:'white',
fontSize:16,textAlign:'center'
},
    btn:{backgroundColor:'#0764b0',
        height:45,
    width:'43%',
    marginBottom:'3%',
    marginLeft:'32%',
    marginTop:'3%',
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{fontWeight:'600',
        marginTop:'10%',
     color:'white',
     fontSize:16,
     }
});
  