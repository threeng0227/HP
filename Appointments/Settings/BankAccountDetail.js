import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,Image } from "react-native";
import {
  Header, Content,Title,Input,Item, Container, Form, Label,Button,Grid,Row,Left,Right,Body
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
export default class BankAccountDetail extends Component{
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
                <Text><Ic name="bell" size={20}></Ic></Text>
    
                <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}} >
                <Ionicons name="md-menu" size={25}></Ionicons>
                     </TouchableOpacity>
                </Right>
                </Header>
                
            
            <Content padder >
            <View style={{marginTop:18}}>
                <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}> Bank account detail</Text>  
            </View>
            <View style={{marginRight:'5%',marginLeft:'5%',width:'90%'}}>
                <Image style={{resizeMode:'stretch',width:'100%'}} source={require('../images/bankdetail.png')}>
                    
                </Image>
            </View>
            <View style={{marginTop:15}}>
            <Form >
              <Item stackedLabel>
                  <Label>Bank Name</Label>
                  
                  <Input  value='NORTHERN SKIES FEDERAL REDIT UNION' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Andress</Label>
                  
                  <Input  value='700 5th Aver, New York,NY 10019,USA'  textContentType="emailAddress" style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Routing Number</Label>
                  
                  <Input  value='325272157'  style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
                <Item stackedLabel>
                  <Label>Account Number</Label>
                
                  <Input  value='08888675446768' style={[styles.fontSizeInPut,{fontSize:18}]} />
                </Item>
               
                   
              </Form>
              
            </View>
              
            <View style={{ backgroundColor: "white", height: 60, justifyContent: "center", marginTop:'3%',alignItems: 'center', flexDirection: "row" }}>
                   <Button style={{ width:110,borderRadius:3,height:50,marginRight:'2%',
                            borderWidth:1,
                            borderColor:'blue',
                            backgroundColor:'white',
                            justifyContent:"center",
                           }}>
                        <Text style={{ color: "blue", fontSize: 20 }} >Edit</Text>
                    </Button>
                    
                    <Button style={{ width:110,borderRadius:3,height:50,marginLeft:'2%',
                            borderWidth:1,
                            borderColor:'blue',
                            justifyContent:"center",
                            backgroundColor:'white',
                           }}>
                        <Text style={{ color: "blue", fontSize: 20 }} >Remove</Text>
                    </Button>
                </View>
            </Content>
          </Container>
        )
    }
}
