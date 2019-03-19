import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Right, Title,FooterTab, Content, Textarea} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class NextGiftCamera1 extends Component {
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Gift Cards</Text>
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
          <View style={{width: 340, height: 280,borderRadius:5,borderColor:'#EEEEEE',borderWidth:0.5}}>
                <View style={{flexDirection:'column',  justifyContent: 'center', alignItems: 'center',flex:1}}>
               
                    <Text style={{flex:1,color:'black',fontSize:15,marginTop:'5%',marginLeft:'-27%'}}>You have selected the card below</Text>
                    
                    <View style={{flex:4}}>
                            <Image style={{height:200,width:325,borderRadius:6}}
                        source={require('../Appointments/images/SentGiftcard.png')} 
                            />
                    </View>
                </View>
            </View>
           
            <View style={{width: 328, height: 240,}} >
            <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%'}}>
                Amount:
            </Text>
            <View style={{borderRadius:4,borderColor:'#EEEEEE',height:45,borderWidth:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'black'}}>$ 50.00</Text></View>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%',marginTop:'3%'}}>
                Message:
            </Text>
            <View ><Textarea style={{borderRadius:4,borderColor:'#EEEEEE',height:100,borderWidth:1,paddingLeft:'2%',paddingTop:'3%'}} rowSpan={5} bordered placeholder="Say something... !" /></View>
            </View>
            
      </View>
      </Content>
      <View style={{width: 340, height: 60,}} >
                <Button primary style={site.btn} onPress={()=>{this.props.navigation.navigate('SelectAccountGift')}}><Text style={site.btn1} > Next </Text></Button>  
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
    
    marginTop:'2%',  
  width:'38%',
  marginLeft:'32%',
  borderRadius: 4,
    justifyContent:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   }
});