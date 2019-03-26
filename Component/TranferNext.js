import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export default class TranferNext extends Component {
  constructor(){
    super();
    this.state={
      check:true,
      checkic:true
    }
  }
  iconPressed(){
   
    alert('asdsa')

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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Tranfer money to bank...</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
          <Content >
   
        <View style={{ flexDirection: 'column',margin:'3%', alignItems: 'center',height:430,width: 340,borderWidth:2,borderColor:'#dfdfdf',borderRadius:5 }} >
        <Image style={{height:85,width:85,marginTop:'3%'}}
            source={require('../Appointments/images/Group2.png')} 
                />
                  <Text style={{fontSize:15,color:'black',marginTop:'3%'}}>Harmony Account</Text>
                  <Text style={{fontSize:14,}}>JERRY NGUYEN</Text>
                  <Text style={{fontSize:18,color:'black',marginTop:'3%'}}>Available blance</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',margin:'2%',borderWidth:2,width:300,borderColor:'#dfdfdf',height:40}}>
                    
                    <Text style={{fontSize:17,color:'green',fontWeight:'bold',marginTop:'2%'}}>$ 764.00</Text>
                </View>
                <Text style={{fontSize:16,color:'black',marginLeft:'-8%'}}>Select bank account to  tranfer money</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:2,width:300,borderColor:'#dfdfdf',flexDirection:'row',height:85}}>
               <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:'2%',borderWidth:0.5,borderColor:'skyblue',height:65,width:50}}>
                <Image style={{height:45,width:45,marginBottom:'4%'}}
            source={require('../Appointments/images/nganhang2.png')} 
                /></View>
                <View style={{flexDirection:'column'}}>
             <Text style={{fontSize:14,color:'black',marginLeft:'3%'}}>Bank of America</Text>
             <Text style={{fontSize:14,color:'black',marginLeft:'6%',marginTop:'3%'}}>**** **** **** **** 5565</Text></View>
             
        </View>
        <View style={{paddingTop:'3%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'6%',borderWidth:0.5,borderColor:'#dfdfdf',marginRight:'6%',marginLeft:'6%'}}>
                <View style={{flex:1,}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:3,}}><Text style={{color:'black'}}>Add Bank Account</Text></View>
             </View>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',width: '100%' ,flexDirection:'row',flex:1}} >
            <Button  style={site.btn} onPress={()=>{this.props.navigation.navigate('TransferTT')}}><Text style={site.btn1}> Next </Text></Button> 
        </View>
        
        </Content>
        
       
        
   
      </Container>
    );
  }
}
var site=StyleSheet.create({

  text:{
    color:'black',fontSize:12
  },
 
  icon:{
    
    color:'gray',
  },
  header:{
    backgroundColor:'white',
    color:'#00BFFF',
  },
  btn:{
    backgroundColor:'#0764b0',
  width:'40%',
  marginBottom:'2%',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   },
   ic:{
    
      color:"#0764b0",
      marginLeft:'15%',
      fontSize:34,
      
  },
});