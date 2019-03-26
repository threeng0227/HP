import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export default class TransactionSuccess extends Component {
  constructor(props ){
    super(props);
    this.state={
      switch1Value:false,
    }
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
        alignItems: 'center',
      }}>
        <View style={{ justifyContent: 'flex-end',alignItems: 'center',height:180,width: '100%',}} >
        <Image style={{height:85,width:85}}
            source={require('../Appointments/images/scussces.png')} 
                />
        </View>
        <View style={{ justifyContent: 'center',alignItems: 'center',width: '100%', height: 50, }} >
        <Text style={{fontSize:21,color:'#0764b0'}}>Transaction successfully !</Text>
        </View>
        <View style={{  justifyContent: 'center',alignItems: 'center',width: '100%', height: 50, }} >
        <Text style={{fontSize:24,color:'red',fontWeight:'bold'}}>- $ 50</Text>
        </View>
       
        <View style={{justifyContent: 'center',alignItems: 'center',borderWidth:1,width:'90%',borderColor:'#EEEEEE',flexDirection:'row',height:40}}>
             <Text style={{fontSize:16,color:'black',flex:1,textAlign:'left',fontWeight:'500',marginLeft:'2%'}}>Current balance:</Text>
             <Text style={{fontSize:20,color:'#2ebe03',fontWeight:'bold',flex:1,textAlign:'right',marginRight:'6%'}}>$ 864.00</Text>
        </View>
        <View style={{justifyContent:'flex-end',width: '40%',flexDirection:'column',flex:1}} >
            <Button  style={site.btn}  onPress={()=>{this.props.navigation.navigate('SendMoney864')}}><Text style={site.btn1}> Done </Text></Button> 
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
    backgroundColor:'#0764b0',
  width:'100%',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center',marginBottom:'4%'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   },
});