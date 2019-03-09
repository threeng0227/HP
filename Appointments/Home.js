import React, {Component} from 'react';
import { Container,Header, Content, Button, Body,Right,Image} from 'native-base';
import {Text,TouchableOpacity} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'

export default class Home  extends Component{
    static navigationOptions={
       
        header:null,
    };
   
    render(){
        
        
        return(
            <Container>
                <Header style={{ backgroundColor: "white" }}>
           
                <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
                    <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Home</Text>
                </Body>
                <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
                <Text><Ic name="bell" size={20}></Ic></Text>

                <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
                <Ionicons name="md-menu" size={25}></Ionicons>
                        </TouchableOpacity>
                </Right>
           </Header>
                
                <Content>
               
                </Content>
               
            </Container>
            
        )
    }
}