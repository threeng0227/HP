import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,ImageBackground,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Title,FooterTab, Content, CheckBox,Badge, Right} from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
export default class GiftSendCancel extends Component {
    state={
        one:false,
      
    }
    onePressed(){
        this.setState({one:true,});
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
        <Content>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
            }}>
        <View style={{width: 340, height: 500,borderColor:'#EEEEEE',borderWidth:1,borderRadius:6,marginTop:'3%'}} >
        <View style={{flexDirection:'column',  justifyContent: 'center', alignItems: 'center',flex:1}}>
               <View style={{flex:3}}>   
                    
                 <ImageBackground source={require('../Appointments/images/sendgiftlogo.png')} style={{height:230,width:325,borderRadius:6,justifyContent:'flex-end',flexDirection:'column',}}>
                 <View style={{flex:1}}> 
                 <View style={{height:50,width:150,justifyContent:'flex-end',alignItems:'flex-end',marginTop:'2%',marginLeft:'1%'}}> 
                 <Image  source={require('../Appointments/images/logochuHP.png')}></Image>
                 </View> 
                </View>
                
                <View style={{justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row'}}>   
                 <Badge style={{height:50,width:50,borderRadius:50,justifyContent:'center',marginBottom:'3%',marginRight:'3%',backgroundColor:'white',borderWidth:0.5,borderColor:'#00B2EE'}}><Text style={{textAlign:'center',color:'lightgreen',fontSize:15,fontWeight:'bold'}}>$ 50</Text></Badge>
                </View>
                </ImageBackground>           
               </View>
           </View>
           <View style={{width: 328, height: 240,marginLeft:'2%'}} >
             <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
                        Receivers:
                </Text>
                    <Image style={site.img}
                source={require('../Appointments/images/women.png')} 
                    />
                    <Text style={{marginLeft:'3%',color:'black'}}>William</Text>
                    <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%',marginLeft:'1%'}}>
                        Message:
                    </Text>
                    <View ><TextInput style={{borderRadius:4,borderColor:'#EEEEEE',height:50,borderWidth:1,marginLeft:'2%',paddingTop:'3%',marginRight:'2%'}} placeholder="Happy BirthDay" /></View>
                   <View style={site.viewtxt1}>
                    <CheckBox  style={site.check} checked={this.state.one}
             onPress={() =>this.onePressed()}></CheckBox>
                    <Text style={{fontSize:15,color:'black',marginBottom:'3%',marginTop:'3%',marginLeft:'6%'}}>
                        Attach sender information
                    </Text></View>
            </View>
           
        </View>
        
        <View style={{width: 340, height: 100,flexDirection:'row'}} >
          <View style={site.view}>
             <Button  style={site.btn22}><Text style={site.btn2}> Cancel </Text></Button> 
           </View>
           <View style={site.view}>
             <Button  style={site.btn}><Text style={site.btn1}> Send </Text></Button> 
          </View>

        </View>
      </View>
      </Content>
       
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
  width:'85%',
  
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
   
   color:'white',
   fontSize:16,
   },
   btn2:{
    
    color:'#00B2EE',
    fontSize:16,
    },
    view:{marginTop:'12%',
          flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
       },
       img:{
        height:50,width:50,marginTop:'3%',marginLeft:'3%'
       },
});