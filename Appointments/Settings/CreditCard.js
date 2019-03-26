import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Picker } from "react-native";
import {
  Header, Content,Badge,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body
} from "native-base";
import styles from "../../App/User/SignIn_SignUp/StyleSignInUp";
import Ic from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome";


const styleSUp = StyleSheet.create({
  Icon: {
    fontSize: 6,
    color: "red",
    position: "absolute",
    top: "9%"
  },
  FormSignUp: {
    width: "95%",
    height: "60%",
    justifyContent: "space-around"
  },
  GridYourName :{
    flexDirection:'row',justifyContent:'space-around'
  }
});
   
export default class CreditCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          state: 'Card type',
         
        }
      }
    render(){
        return(
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
    
                <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}  >
                <Ionicons name="md-menu" size={25}></Ionicons>
                     </TouchableOpacity>
                </Right>
                </Header>
            <Content padder>
            <View style={{marginTop:18}}>
                <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}> Credit Card</Text>  
            </View>
              <Form >
              <Item stackedLabel>
                  <Label>Card Type</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "23%"} ]}
                  />
               <Picker
          style={{width: '100%'}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Card type" value="Card type" />
          <Picker.Item label="ATM" value="atm" />
          <Picker.Item label="Visa" value="visa" />
        </Picker>
                </Item>
                <Item stackedLabel>
                  <Label>Name On Card</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "32%"} ]}
                  />
                  <Input    textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Card Number</Label>
                  <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "28%"} ]}
                  />
                  <Input    style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Grid style={styleSUp.GridYourName}>
            
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >Expired Date</Label>
                <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "90%"} ]}
                  />
                 <Picker 
                        style={{width: '100%'}}
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                     </Picker>
               
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label></Label>
                     <Picker 
                        style={{width: '100%'}}
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                        <Picker.Item label="yy" value="yy" />
                        <Picker.Item label="2020" value="2020" />
                        <Picker.Item label="2019" value="2019" />
                        <Picker.Item label="2018" value="2018" />
                        
                    </Picker>
               
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={{ width:'90%'  }}>
                <Label >CVV Code</Label>
                <Icon name="asterisk"
                    style={[
                      styleSUp.Icon,
                      { left: "70%"} ]}
                  />
                    <Input placeholder='xxx'></Input>
               
                </Item>
              </Row>
            </Grid>
              </Form>
             
                   
             
             
            </Content>
            <View style={{ paddingHorizontal: "5%",justifyContent: 'center',flexDirection: 'row',alignItems: 'center',marginBottom:10}}>
                <Button full style={{width:'50%',borderRadius:3,backgroundColor:'#0764b0'}} onPress={()=>{this.props.navigation.navigate('AddBankAndCard')}}>
                  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Add</Text>
                </Button>
              </View>
          </Container>
        )
    }
}
