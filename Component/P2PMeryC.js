import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,Picker,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Title,Right, Content, Switch} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class P2PMeryC extends Component {
  constructor(props ){
    super(props);
    this.state={
      switch1Value:false,
      display:'none'
    }
  }
  switchView(value){
    this.setState({
      switch1Value:value
    });
    if(this.state.switch1Value==false)
    {
      this.setState({display:'flex'});
    }
    if(this.state.switch1Value==true)
    {
      this.setState({display:'none'});
    }
  };
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
        
        <View style={{height:200,borderBottomWidth:1,paddingTop:'2%',marginLeft:'3%',marginRight:'3%',borderColor:'#EEEEEE'}}>
        
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
         
          <Image style={site.img1} on
          source={require('../Appointments/images/gifthong.png')} 
            />
            <View style={site.img2} >
            <Title style={{color:'blue',fontSize:14,fontWeight:'100'}}>Happy Birthday</Title> 
              <Image style={site.img} on
          source={require('../Appointments/images/giftvang.png')} 
            />
              </View>
        
            <Image style={site.img1} on
          source={require('../Appointments/images/giftxanh.png')} 
            />
          
            <Image style={site.img1} on
          source={require('../Appointments/images/giftvang.png')} 
            />
              <View style={site.img2} >
            <Title style={{color:'blue',fontSize:14,fontWeight:'100'}}>Merry Christmas</Title> 
              <Image style={site.img} on
          source={require('../Appointments/images/giftxanh.png')} 
            /></View>
             <Image style={site.img1} on
          source={require('../Appointments/images/giftluc.png')} 
            />
        
          <Image style={site.img1} on
          source={require('../Appointments/images/giftxanh.png')} 
            />
               <View style={site.img2} >
            <Title style={{color:'blue',fontSize:14,fontWeight:'100'}}>Congratulation</Title> 
              <Image style={site.img} on
          source={require('../Appointments/images/giftluc.png')} 
            /></View>
             <Image style={site.img1} on
          source={require('../Appointments/images/giftcameraa.png')} 
            />
            
              <Image style={site.img1} on
          source={require('../Appointments/images/giftluc.png')} 
            />
              <View style={site.img2} >
            <Title style={{color:'blue',fontSize:14,fontWeight:'100'}}>Your template</Title> 
            <TouchableOpacity onPress={this._onPressButton}>
              <Image style={site.img} on
          source={require('../Appointments/images/giftcameraa.png')} 
            /></TouchableOpacity>
            </View>
            <View style={site.img1}></View>
        
        </ScrollView>
        </View>
        <View style={{borderBottomWidth:1,marginLeft:'3%',marginRight:'3%',borderColor:'#EEEEEE'}}>
        <View style={site.spec}>
          <Text style={{fontSize:16,color:'black',paddingTop:'2%',flex:1}}>
            Speccific stores
          </Text>
          <View style={{flex:1,alignItems:'flex-end',marginTop:'3%'}}>
          <Switch thumbColor={'white'} tintColor={'#EEEEEE'}  value={this.state.switch1Value} onValueChange={(value) => this.switchView(value)} />
          </View></View>
          <View style={{display:this.state.display,height:60,flex:1,flexDirection:'row'}}>
          <Text style={{fontSize:14,color:'#0764b0',flex:2,paddingTop:'3%',fontWeight:'500'}}>
            Select stores:
          </Text>
          <View style={{flex:3,paddingBottom:'20%',alignItems:'flex-end'}}>
          <View style={{height:34,borderWidth:1, width:220,borderColor:'#EEEEEE',borderRadius:5,justifyContent:'center'}}>
          <Picker 
          selectedValue={this.state.language}
          style={{ width:230,color:'#73a7d2'}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item  label="Choose your store" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
          </View></View>
          </View>
        
        </View>
        <Button  style={site.btn}
        onPress={()=>{this.props.navigation.navigate('NextGiftCamera1')}}><Text style={site.btn1}> Next </Text></Button>    
        <View style={{paddingTop:'5%'}}>
          <Text style={site.Text}> History </Text>
          <View style={site.view}>
          <View style={{flex: 2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
          <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic"}}>
              Received
            </Text>
           
          </View>
          </View><View style={site.view1}>
          <View style={{flex:2}}>
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
          <View style={{flex: 1,justifyContent: 'flex-start',alignItems:'flex-end'}}>
          <Text style={{paddingRight:'15%',paddingTop:'19%',fontStyle:"italic"}}>
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
    height:60,paddingTop:'3%',
    flex:1,
    flexDirection:'row'
  },
  img:{
    width: 200,
     height: 150
  },
  img1:{
    width: 69,
     height: 90,
    marginTop:'4%'
  },
  Text:{
    color:'black',fontSize:16,marginLeft:'3%',fontWeight:'300'
  },
  txt:{
    paddingLeft:'12%',paddingTop:'7.5%',color:'black'
  },
  txt1:{
    paddingTop:'8%',
    fontSize:13,color:'black'
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
  backgroundColor:'#fafafa',
    borderRadius: 5,
    height:110,
    borderWidth:1,
    
    margin:'3%',
    flexDirection:'row',


  },
  view1:{
    borderColor: '#EEEEEE',
    backgroundColor:'#fafafa',
    borderRadius: 5,
    height:110,
    borderWidth:1,
    
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
    alignItems:'center',backgroundColor:'#0764b0'
  },
  btn1:{
   
   color:'white',
   fontSize:16,fontWeight:'500'
   }
});