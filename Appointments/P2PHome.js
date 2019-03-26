import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Badge,FooterTab} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class P2P  extends Component{
    
    
    render(){
       

        return(
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>P2P</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('./images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
      <View style={{flex: 1,flexDirection: 'column',}}>
        <View style={{flex:1,marginBottom:'2%'}} >
        <Image style={site.img}
          source={require('../Appointments/images/p2pgift.png')} 
            />
        </View>
        <View style={{flex: 1,width: '96%',marginLeft:'2%',marginRight:'2%' }} >
            <Button  style={{  backgroundColor: 'white',flex:1,marginRight:'3%',
            borderRadius:5,borderColor:'#EEEEEE' ,
            marginLeft:'3%',marginTop:'3%',justifyContent:'center'
            ,alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('SendMoney914')}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image 
                  source={require('../Appointments/images/requestcard.png') }
                  /></View>
                  <Text style={site.txt}>SEND / REQUEST MONEY</Text>
                  <Badge style={{marginRight:'2%',height:25,width:25}}><Text style={{textAlign:'center',color:'white',fontSize:15}}>1</Text></Badge>
            </Button>  
            
        </View>
        <View style={{flex: 1,width: '96%',marginLeft:'2%',marginRight:'2%' }} >
        <Button  style={{backgroundColor: 'white',flex:1,marginRight:'3%',
        borderRadius:5,borderColor:'#EEEEEE' ,
        marginLeft:'3%',marginTop:'3%',
        justifyContent:'center',alignItems:'center'}}
        onPress={()=>{this.props.navigation.navigate('P2PMeryC')}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image 
                  source={require('../Appointments/images/giftcard.png') }
                  /></View>
                  <Text style={site.txt}>GIFT CARDS</Text>
                  <Badge style={{marginRight:'2%',height:25,width:25}}><Text style={{textAlign:'center',color:'white',fontSize:15}}>2</Text></Badge>
            </Button>  
            
        </View>
        <View style={{flex: 1,width: '96%',marginLeft:'2%',marginRight:'2%' }} >
        <Button  style={{backgroundColor: 'white',flex:1,margin:'3%',borderRadius:5,
        borderColor:'#EEEEEE' ,justifyContent:'center',
        alignItems:'center'}}
        onPress={()=>{this.props.navigation.navigate('TranferNext')}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image 
                  source={require('../Appointments/images/sendmoney.png') }
                  /></View>
                  <Text style={site.txt3}>  TRANSFER TO BANK ACCOUNT</Text>
                  <Badge style={{marginRight:'2%',height:25,width:25,backgroundColor:'white'}}><Text style={{textAlign:'center',color:'white',fontSize:15}}>1</Text></Badge>
            </Button>  
            
        </View>
      </View>
            </Container>
            
        )
    }
}
var site=StyleSheet.create({
    Text:{
      fontSize:10,
      color:'gray',
    },
    icon:{
      
      color:'gray',
    },
    header:{
      
     height:140
    },
    view:{
   
      backgroundColor:'white',
  
    },
    txt:{
        fontSize:15,
        color:'#0764b0',
     
        flex:3,justifyContent:'center',alignItems:'flex-start'
    },
    txt2:{
        fontSize:15,
        color:'#0764b0',
        paddingRight:'51%',
        paddingTop:'3%'
    },
    txt3:{
      fontSize:15,
      color:'#0764b0',
    marginLeft:-10,
 
      flex:3,justifyContent:'center',alignItems:'flex-start'
    },
    ic:{
        height:40,
    
        marginLeft:18,
       
    },
    tron:
    {width:90,
        height:90,
        borderWidth:2,
        borderRadius:50,
        borderColor:'#00BFFF'
    },
    img:{
    
      flex:1,
      resizeMode:'cover',
      width:'100%',
      height:'100%'
    }
  }); 