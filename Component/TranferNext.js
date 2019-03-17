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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Notification</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
          
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',marginLeft:'3%',marginRight:'3%',marginTop:'3%'
      }}>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:6,width: 340,borderWidth:0.5,borderColor:'#EEEEEE',borderRadius:5 }} >
        <Image style={{height:85,width:85,marginTop:'6%'}}
            source={require('../Appointments/images/Group2.png')} 
                />
                  <Text style={{fontSize:15,color:'black',marginTop:'3%'}}>Harmony Account</Text>
                  <Text style={{fontSize:14,}}>JERRY NGUYEN</Text>
                  <Text style={{fontSize:18,color:'black',marginTop:'10%'}}>Available blance</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:300,borderColor:'#EEEEEE',height:40}}>
                    
                    <Text style={{fontSize:17,color:'green',fontWeight:'bold',marginTop:'3%'}}>$ 764.00</Text>
                </View>
                <Text style={{fontSize:16,color:'black',marginLeft:'-8%'}}>Select bank account to  tranfer money</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:300,borderColor:'#EEEEEE',flexDirection:'row',height:90}}>
               <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:'2%',borderWidth:0.5,borderColor:'skyblue',height:70,width:50}}>
                <Image style={{height:45,width:45,marginBottom:'3%'}}
            source={require('../Appointments/images/nganhang2.png')} 
                /></View>
                <View style={{flex:2,flexDirection:'column'}}>
             <Text style={{fontSize:14,color:'black',marginLeft:'3%'}}>Bank of America</Text>
             <Text style={{fontSize:14,color:'black',marginLeft:'6%',marginTop:'3%'}}>**** **** **** **** 5565</Text></View>
             
        </View>
        <View style={{paddingTop:'3%',height:40,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%',borderWidth:0.5,borderColor:'#EEEEEE',marginRight:'6%',marginLeft:'6%'}}>
                <View style={{flex:1,}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:3,}}><Text style={{color:'black'}}>Add Bank Account</Text></View>
             </View>
        </View>
    
      
        
        <View style={{justifyContent: 'flex-end',alignItems: 'center',flex:1,width: 340, height: 200 }} >
            <Button  style={site.btn}><Text style={site.btn1}> Next </Text></Button> 
        </View>
      </View>
        
   
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
    backgroundColor:'#00B2EE',
  width:'40%',
  marginLeft:'30%',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   },
   ic:{
    
      color:"#00B2EE",
      marginLeft:'15%',
      fontSize:34,
      
  },
});