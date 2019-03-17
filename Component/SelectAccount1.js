import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab, CheckBox} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export default class SelectAccount1 extends Component {
  constructor(){
    super();
    this.state={
      check:true,
      checkic:true,
      tip:true,
      timeout:false,
    }
   
  }
  componentDidMount() {
    setTimeout(()=>{this.props.navigation.navigate('SelectAccounts')}, 500); 
  }
  onePressed(){
    this.setState({check:true, check1:false,check2 :false,});
  }
  twoPressed(){
    this.setState({check:false, check1:true,check2 :false,});
  }
  threePressed(){
    this.setState({check:false, check1:false,check2 :true,});
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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Select Account</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <Content style={{backgroundColor:'white'}}> 
         
        <View style={{margin:'4%',height:150,borderRadius:4,borderWidth:0.5,borderColor:'#EEEEEE'}}>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',width:310,borderColor:'#EEEEEE',flexDirection:'row',height:40,flex:1}}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start'}}>
            <Text style={{fontSize:15,color:'black',flex:1,marginTop:'4%'}}>Amount:</Text>
         </View>  
          <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-end'}}><Text style={{fontSize:16,color:'black',fontWeight:'bold',flex:1,marginTop:'2%'}}>$ 150.00</Text></View>   
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',width:310,borderColor:'#EEEEEE',flexDirection:'row',height:40,flex:1}}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start'}}>
            <Text style={{fontSize:15,color:'black',flex:1,marginTop:'4%'}}>Tip:</Text>
         </View>  
          <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-end'}}><Text style={{fontSize:18,color:'black',fontWeight:'bold',flex:1,marginTop:'2%'}}>$ 27.00</Text></View>   
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',width:310,borderColor:'#EEEEEE',flexDirection:'row',height:40,flex:1,borderBottomWidth:0.5,borderBottomColor:'#EEEEEE'}}>
       
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
        <View style={{flex:1,marginLeft:'-7%',flexDirection:'row',alignItems:'center'}}><CheckBox style={site.check} checked={this.state.tip}
            onPress={this.tipPressed} />
             <Text style={{fontSize:12,color:'black',paddingLeft:'8%'}}>Use gift card (Value : $ 0):</Text>
            </View>
           
         </View>  
          <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-end'}}><Text style={{fontSize:18,color:'black',fontWeight:'bold',flex:1,marginTop:'2%'}}>-$ 0.00</Text></View>   
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginRight:'4%',marginLeft:'4%',width:310,flexDirection:'row',height:40,flex:1}}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start'}}>
            <Text style={{fontSize:18,color:'black',flex:1,marginTop:'2%',fontWeight:'300'}} >Total:</Text>
         </View>  
          <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-end'}}><Text style={{fontSize:18,color:'blue',fontWeight:'bold',flex:1,marginTop:'2%'}}>$ 177.00</Text></View>   
        </View>
        </View>
        <View style={{flex:1,flexDirection:'column'}}> 
         <View style={{marginLeft:'4%',marginRight:'4%',borderRadius:4,borderWidth:0.5,borderColor:'#EEEEEE',paddingTop:'5%',padding:'3%'}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
            Select account to receive money
            </Text>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check}
             onPress={() =>this.onePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-2%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/Group2.png')} /></View>
                <View style={{flex:2,marginRight:'-7%'}}>
                  <Text style={{color:'black'}}>Harmony Account</Text>
                  <Text style={{color:'black'}}>JERRY NGUYEN</Text>
                </View>
                <View style={{flex:1,marginRight:'-8%',marginTop:'-7%',color:'lightgreen'}}><Text style={{fontSize:13,fontWeight:'bold',color:'lightgreen'}}>$ 91.00</Text></View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check1}
             onPress={() =>this.twoPressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-8%'}}><Image fontSize={30} source={require('../Appointments/images/thevisaa.png')} /></View>
                <View style={{flex:2,marginLeft:'-3%'}}>
                  <Text style={{color:'black'}}>**** **** **** **** 1234</Text>
                  <Text style={{color:'black'}}>JERRY NGUYEN</Text>
                </View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check2}
             onPress={() =>this.threePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-5%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/nganhang2.png')} /></View>
                <View style={{flex:2,marginLeft:'-5%'}}>
                  <Text style={{color:'black'}}>Bank America</Text>
                  <Text style={{color:'black'}}>**** **** **** **** 5565</Text>
                </View>
            </View>
             <View style={{paddingTop:'3%',height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
                <View style={{flex:1}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:4}}><Text style={{color:'black'}}>Add Bank Account or Credit/Debit Card</Text></View>
             </View>
              </View> 
              
          </View>
        </Content>
       
        <View style={{width: 345, height: 55,flexDirection:'row',}} >
        
        <View style={site.view}>
          <Button  style={site.btn}><Text style={site.btn1}> Reload </Text></Button> 
       </View>

     </View>
        <Footer >
          <FooterTab style={{backgroundColor:'white'}}> 
            <Button vertical>
              <Icon name="home"style={site.icon} />
              <Text style={site.text}>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="appstore" style={site.icon}/>
              <Text style={site.text}>Stores</Text>
            </Button>
            <Button vertical >
              <Icon name="apps"style={site.icon} />
              <Text style={site.text}>Appointment</Text>
            </Button>
            <Button vertical>
              <Icon name="gift" style={site.icon}/>
              <Text style={site.text}>P2P</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
var site=StyleSheet.create({
    ic:{
      paddingTop:'8%',
        color:"#00B2EE",
        marginLeft:'-2%',
        fontSize:38,
        flex:1
    },
    check:{
        borderRadius:30,
        height:32,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'#EEEEEE',
       
    },
    btn:{
      backgroundColor:'#00B2EE',
    width:'40%',
    
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
       
      color:'white',
      fontSize:16,
      },
      view:{
      flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
   }
});
