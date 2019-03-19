import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Textarea,Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export default class Process3Rquest extends Component {
    
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Request Money</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <Content>
        <View style={{marginTop:'6%',height:40,marginBottom:'10%'}}>
        <Image style={{width:'95%',marginLeft:'2.5%'}}
          source={require('../Appointments/images/process3.png')} 
            />
        </View>
            <View style={{height:400,flexDirection:'column',}}>
            <View style={{marginLeft:'4%',marginRight:'4%',marginBottom:'5%',flex:3,borderWidth:1,padding:'3%',paddingTop:'5%',borderColor:'#EEEEEE',borderRadius:5}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
                    Receivers:
            </Text>
                <Image style={site.img}
            source={require('../Appointments/images/women.png')} 
                />
                <Text style={{marginLeft:'3%',color:'black'}}>William</Text>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%'}}>
                Amount:
            </Text>
            <View style={{borderRadius:4,borderColor:'#EEEEEE',height:45,borderWidth:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>$ 25</Text></View>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%'}}>
                Message:
            </Text>
            <View ><Textarea style={{borderRadius:4,borderColor:'#EEEEEE',height:100,borderWidth:1,paddingLeft:'2%',paddingTop:'3%'}} rowSpan={5} bordered placeholder="Say something... !" /></View>
            </View>
            
            </View>
            </Content>
            <View style={{width: 340, height: 100,flexDirection:'row'}} >
          <View style={site.view}>
             <Button  style={site.btn22}><Text style={site.btn2}> Cancel </Text></Button> 
           </View>
           <View style={site.view}>
             <Button  style={site.btn}><Text style={site.btn1}
             onPress={()=>{this.props.navigation.navigate('Transferequest')}}> Send </Text></Button> 
          </View>

        </View>
       
      </Container>
    );
  }
}
var site=StyleSheet.create({
    img:{
        height:50,width:50,marginTop:'3%',marginLeft:'3%'
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
       view:{marginTop:'12%',marginLeft:'5%',
          flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
       }
});