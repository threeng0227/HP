import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Title,FooterTab, Content, Switch,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class P2P extends Component {
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
        <Content style={{backgroundColor:'white'}}>    
        <Text style={site.Text}>
          Select Gift card template
        </Text>
        
        <View style={{height:200,borderBottomWidth:1,paddingTop:'2%',marginLeft:'3%',marginRight:'3%',}}>
          <Title style={{color:'blue',fontSize:13,marginBottom:'3%'}}>
            Happy Birthday
          </Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={site.img1}
          source={require('../Appointments/images/gifthong.png')} 
            />
            <Image style={site.img}
          source={require('../Appointments/images/giftvang.png')} 
            />
            <Image style={site.img1}
          source={require('../Appointments/images/giftxanh.png')} 
            />
        </ScrollView>
        </View>
        <View style={site.spec}>
          <Text style={{fontSize:16,color:'black',paddingTop:'2%',flex:1}}>
            Speccific stores
          </Text>
          <View style={{flex:1,alignItems:'flex-end',marginTop:'3%'}}>
          <Switch  value={this.state.switch1Value} onValueChange={(value) => this.setState({switch1Value:value})} />
          </View>
        </View>
        <Button primary style={site.btn}><Text style={site.btn1}> Next </Text></Button>    
        <View style={{paddingTop:'5%'}}>
          <Text style={site.Text}> History </Text>
          <View style={site.view}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Today
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William
            </Text>
            <Text style={site.txt1}>
              10$
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'18%',paddingTop:'19%'}}>
              Received
            </Text>
           
          </View>
          </View><View style={site.view1}>
          <View style={{flex: 1}}>
          <Text style={site.txt}>
              Yesterday
            </Text>
            <Text style={site.txt}>
              Receiver:
            </Text >
            <Text style={site.txt}>
              Amount:
            </Text>
          </View>
          <View style={{flex: 2}}>
          <Text style={site.txt1}>
              11 : 00 AM
            </Text>
            <Text style={site.txt1}>
              William, Jerry Nguyen
            </Text>
            <Text style={site.txt1}>
              10$
            </Text>
          </View>
          <View style={{flex: 1}}>
          <Text style={{paddingLeft:'18%',paddingTop:'19%'}}>
              Pending
            </Text>
           
          </View>
          </View>
        </View>

        </Content>
        
      </Container>
    );
  }
}
var site=StyleSheet.create({
  spec:{
    height:60,borderBottomWidth:1,paddingTop:'3%',marginLeft:'3%',marginRight:'3%',
    flex:1,
    flexDirection:'row'
  },
  img:{
    width: 200,
     height: 150
  },
  img1:{
    width: 180,
     height: 90,
    marginTop:'5%'
  },
  Text:{
    color:'black',fontSize:16,marginLeft:'3%'
  },
  txt:{
    paddingLeft:'18%',paddingTop:'15%'
  },
  txt1:{
    paddingLeft:'18%',paddingTop:'7.5%'
  },
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
  view:{
    borderColor: 'lightblue',
  
    borderRadius: 5,
    height:110,
    borderWidth:1,
    
    margin:'3%',
    flexDirection:'row',


  },
  view1:{
    borderColor: 'lightblue',
  
    borderRadius: 5,
    height:110,
  
    
    margin:'3%',
    flexDirection:'row',


  },
  btn:{
    paddingTop:'6%',
    marginTop:'5%',  
  width:'38%',
  marginLeft:'32%',
  borderRadius: 4,
  justifyContent: 'center',
    alignItems:'center'
  },
  btn1:{
   
   color:'white',
   fontSize:16,
   }
});