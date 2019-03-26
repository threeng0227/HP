import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content, Switch} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class TransferTT extends Component {
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
          <Content>
       
        <View style={{flexDirection: 'column',margin:'3%',alignItems: 'flex-start',height:460,width: 340,borderWidth:1,borderColor:'#dfdfdf',borderRadius:5 }} >
           <Text style={{fontSize:16,color:'black',marginTop:'5%',marginLeft:'5%'}}>Input amount to tranfer: </Text>
           <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:310,borderColor:'#dfdfdf',height:40}}>    
                <Text style={{fontSize:17,color:'#2ebe03',fontWeight:'bold',marginTop:'3%'}}>$ 300</Text>
           </View>
           <View style={{flexDirection:'row',marginLeft:'2%'}}>
                <Button  style={site.btnM}><Text style={site.btnm}> $ 50 </Text></Button> 
                <Button  style={site.btnM}><Text style={site.btnm}> $ 100 </Text></Button> 
                <Button  style={site.btnM}><Text style={site.btnm}> $ 200 </Text></Button> 
                <Button  style={site.btnM}><Text style={site.btnm}> $ 500 </Text></Button> 
                <Button  style={site.btnM}><Text style={site.btnm}> $ 1000 </Text></Button> 
           </View>
           <Text style={{fontSize:16,color:'black',marginTop:'4%',marginLeft:'5%'}}>Receiving account: </Text>
           <View style={{justifyContent: 'center',alignItems: 'center',margin:'4%',borderWidth:1,width:310,borderColor:'#dfdfdf',flexDirection:'row',height:90}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'3%',marginLeft:'2%',borderWidth:1,borderColor:'skyblue',height:70,width:50}}>
                    <Image style={{height:45,width:45,marginBottom:'4%'}}
                source={require('../Appointments/images/nganhang2.png')} 
                    /></View>
                    <View style={{flex:2,flexDirection:'column'}}>
                <Text style={{fontSize:14,color:'black',marginLeft:'5%'}}>Bank of America</Text>
                <Text style={{fontSize:14,color:'black',marginLeft:'6%',marginTop:'3%'}}>**** **** **** **** 5565</Text></View>           
             </View>
             <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',marginTop:'2%',width:310,borderColor:'#dfdfdf',flexDirection:'row',height:40}}>
             <Text style={{fontSize:15,color:'black',flex:1,marginLeft:'3%',marginTop:'2%'}}>Tranfer free (1%):</Text>
             <Text style={{fontSize:16,color:'#0764b0',fontWeight:'bold',flex:1,marginRight:'-64%',marginTop:'2%'}}>$ 0.00</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',marginTop:'2%',width:310,borderColor:'#dfdfdf',flexDirection:'row',height:40}}>
             <Text style={{fontSize:15,color:'black',flex:1,marginLeft:'3%',marginTop:'2%'}}>Total:</Text>
             <Text style={{fontSize:20,color:'#0764b0',fontWeight:'bold',flex:1,marginRight:'-40%',marginTop:'2%'}}>$ 300.00</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',marginTop:'2%',width:310,borderColor:'#dfdfdf',flexDirection:'row',height:40}}>
             <Text style={{fontSize:15,color:'black',flex:1,marginLeft:'3%',marginTop:'2%'}}>Your balance:</Text>
             <Text style={{fontSize:20,color:'#2ebe03',fontWeight:'bold',flex:1,marginRight:'-40%',marginTop:'2%'}}>$ 764.00</Text>
        </View>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',width: '100%' ,flexDirection:'row',flex:1}} >
            <Button  style={site.btn}  onPress={()=>{this.props.navigation.navigate('TransactionSend5')}}><Text style={site.btn1}> Tranfer </Text></Button> 
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
   fontWeight:'600',
   color:'white',
   fontSize:16,
   },
   ic:{
    
      color:"#0764b0",
      marginLeft:'15%',
      fontSize:34,
      
  },
  btnM:{
      backgroundColor:'white',
    borderColor:'#0764b0',
  width:'17.4%',
  margin:'1%',
  borderRadius: 5,
  justifyContent: 'center',
    alignItems:'center',
    borderWidth:1,
    
  },
  btnm:{
   
    color:'#0764b0',
    fontSize:14,
    },
});