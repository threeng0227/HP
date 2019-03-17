import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,ImageBackground,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, CheckBox} from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class ReviewGift extends Component {
   
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
        <Content>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
            }}>
        <View style={{width: 340, height: 450,borderColor:'#EEEEEE',borderWidth:1,borderRadius:6,marginTop:'3%'}} >
        <View style={{flexDirection:'column',  justifyContent: 'center', alignItems: 'center',flex:1}}>
               <View style={{flex:3}}>
                       <ImageBackground style={{height:230,width:325,borderRadius:6,marginTop:'2%',}}
                   source={require('../Appointments/images/giftlogo50do.png')} 
                       >
                       <Text style={{color:'lightgreen',fontSize:16,fontWeight:'bold',marginTop:'4%',marginRight:'4%',textAlign:'right'}}>$ 50.00</Text>
                       </ImageBackground>
               </View>
           </View>
           <View style={{width: 328, height: 190,marginLeft:'2%'}} >
             <Text style={{fontSize:18,color:'black'}}>
                        Sender:
                </Text>
                <View style={{flexDirection:'row',alignItems:'center',height:65,margin:'1%',borderWidth:0.5,borderColor:'#EEEEEE',borderRadius:3}}>
                    <Image style={site.img}
                source={require('../Appointments/images/women.png')} 
                    />
                    <View style={{flex:3,}}>
                    <Text style={{marginLeft:'3%',color:'black'}}>William</Text>
                    <Text style={{marginLeft:'3%',marginTop:'2%',color:'black'}}>williammap@gmail.com</Text></View>
                    </View>
                    <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%'}}>
                        Message:
                    </Text>
                    <View ><TextInput style={{borderRadius:4,borderColor:'#EEEEEE',height:50,borderWidth:1,paddingLeft:'2%',paddingTop:'3%',marginRight:'1%'}} placeholder="Happy BirthDay" /></View>
                
            </View>
           
        </View>
        
      
      </View>
      </Content>
      <View style={{width: 345, height: 55,flexDirection:'row',}} >
        
        <View style={site.view}>
          <Button  style={site.btn}><Text style={site.btn1}> Claim </Text></Button> 
       </View>

     </View>
        
      </Container>
    );
  }
}
var site=StyleSheet.create({
    viewtxt1:{
        flex:1,
       flexDirection:'row',
       alignItems:'center',
       
       },
    check:{
        marginTop:4,
        borderRadius:30,
        height:25,
        width:25,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'#EEEEEE'
    },
  text:{
    color:'black',fontSize:12
  },
 
 
  header:{
    backgroundColor:'white',
    color:'#00BFFF',
  },
  btn:{
    backgroundColor:'#00B2EE',
  width:'41%',
  
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn22:{
    backgroundColor:'white',
  width:'85%',
  borderColor:'#00B2EE',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center',borderWidth:0.5
  },
  btn1:{
   fontWeight:'600',
   color:'white',
   fontSize:18,
   },
  
    view:{//marginTop:'20%',
  
          flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row',marginLeft:'5%'
       },
       img:{
        height:50,width:50,marginTop:'3%',marginLeft:'3%',marginBottom:'2%'
       },
});