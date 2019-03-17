import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title,FooterTab, Content, Switch} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Home2 from './Home2';

export default class Tranfer9 extends Component {
  constructor(props ){
    super(props);
    this.state={
      timeout:false,
     
    }
    this.BackHome=this.BackHome.bind(this);
  }
  componentDidMount() {
    setTimeout(()=>{this.BackHome()}, 2000); 
  }
 BackHome(){this.props.navigation.navigate('Home2')}
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
        <View style={{ justifyContent: 'flex-end',alignItems: 'center',flex:4,width: 350, height: 50, }} >
        <Image style={{height:85,width:85}}
            source={require('../Appointments/images/scussces.png')} 
                />
        </View>
        <View style={{ justifyContent: 'center',alignItems: 'center',flex:1,width: 350, height: 50, }} >
        <Text style={{fontSize:21,color:'skyblue'}}>Transaction successfully !</Text>
        </View>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:1,width: 350, height: 50, }} >
        <Text style={{fontSize:24,color:'red',fontWeight:'bold'}}>-$ 9.00</Text>
        </View>
        <View style={{ justifyContent: 'flex-start',alignItems: 'center',flex:2,width: 350, height: 50}} >
        <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:300,borderColor:'#EEEEEE',flexDirection:'row',height:40}}>
             <Text style={{fontSize:14,color:'black',flex:1,marginBottom:'4%',marginLeft:'4%'}}>Current balance:</Text>
             <Text style={{fontSize:17,color:'green',fontWeight:'bold',flex:1,marginBottom:'4%',marginRight:'-17%'}}>$ 91.00</Text>
        </View>
        
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',flex:1,width: 350, height: 50, }} >
            <Button  style={site.btn}><Text style={site.btn1}> Done </Text></Button> 
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
});