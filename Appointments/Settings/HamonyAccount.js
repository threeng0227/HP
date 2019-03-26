import React, { Component } from "react";
import { Text, View, ImageBackground,TouchableOpacity,Alert } from "react-native";
import {
  Header, Content, Container ,Button,Left,Right,Body, Item,Switch, Input,Label,Badge
} from "native-base";
import styles from "../../App/User/SignIn_SignUp/StyleSignInUp";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";

export default class MoreSetting extends Component {
   constructor(){
       super();
       this.state={
           swichVar:false,
           display:'none'
       }
   }
    swithcGo (value){
        this.setState({
            swichVar:value
        });
        if(this.state.swichVar==false)
        {
            this.setState({display:'flex'});
        }
        if(this.state.swichVar==true)
        {
            this.setState({display:'none'});
        }
      };
      
        
     
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
            <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
            <Body  style={{justifyContent: "center" ,alignItems:"center",flex:2}}>
            
                <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Settings</Text>
                 
                 
           
            </Body>
            <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('../images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>
            <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}} >
            <Ionicons name="md-menu" size={25}></Ionicons>
                 </TouchableOpacity>
            </Right>
            </Header>
        <Content padder>
        <View style={{marginTop:18}}>
            <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Hamony Account</Text>  
        </View>
        <Item style={{borderBottomWidth:0}}>
            <Left style={{flex:2}}><Text>Auto reload when low balance</Text></Left>
            <Right><Switch value={this.state.swichVar}
                    onValueChange={(value) => this.swithcGo(value)}
                    
                     /></Right> 
        </Item>
        <View style={{display:this.state.display}}>
            <Item stackedLabel >
            <Label style={{color:'gray'}}>Balance Limit</Label>
            <Input style={{borderTopWidth:1,
            borderLeftWidth:1,
            borderRightWidth:1,
            borderBottomWidth:1
            ,borderColor:'lightgray',
            
            marginTop:10}} />
        </Item>
        <View style={{ paddingHorizontal: "5%", marginTop: 70,flex:1, justifyContent: 'center',flexDirection: 'row',alignItems: 'center',}}>
            <Button full style={{width:'50%',borderRadius:3}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Set</Text>
            </Button>
          </View>
        </View>
        
       
        </Content>
      </Container>
    );
  }
}
