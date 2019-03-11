import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right,Image, View, Content, Input, List, ListItem} from 'native-base';
import {Text,TouchableOpacity,Alert} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'

export default class WishList  extends Component{
   
    
    render(){
       

        return(
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                <Left>
                    <View style={{ justifyContent: "center"}}>
                        <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
                    </View>
                </Left>
                <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
                        <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Wish List</Text>
                </Body>
                <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
                    <Text><Ic name="bell" size={20}></Ic></Text>

                    <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Ionicons name="md-menu" size={25}></Ionicons>
                            </TouchableOpacity>
                </Right>
                </Header>
                <View style={{borderWidth:1,borderTopWidth:0,borderColor:'#e5e5e5',height:50,marginTop:'1%',flexDirection:'row',alignItems:'center'}}>
                <Input placeholder="Add new item"  ></Input>
               <Icon style={{marginRight:'1%'}} name='plus' color="blue" size={25}></Icon>
                </View>
               <View style={{marginRight:'3%',display:this.setState.display}}>
                   <List>
                       <ListItem>
                           <Text> A New Your Spa</Text>
                           <Ic name="heart" size={20} color='gray'></Ic> 
                       </ListItem>
                       <ListItem>
                           <Text> BaBa Spa</Text>
                           <Ic name="heart" size={20} color='gray'></Ic> 
                       </ListItem>
                       
                       <ListItem>
                       <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.props.navigation.navigate('WishListFavories')}}>
                           <Text> Hamony Spa</Text>
                           <Ic name="heart" size={20} color='red'></Ic> 
                           </TouchableOpacity>
                       </ListItem>
                       
                       
                       <ListItem>
                           <Text> Beauty Spa</Text>
                           <Ic name="heart" size={20} color='red'></Ic> 
                       </ListItem>
                       <ListItem>
                           <Text> Sunrise-Sunset Spa</Text>
                           <Ic name="heart" size={20} color='gray'></Ic> 
                       </ListItem>
                   </List>
               </View>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',flex:1}}>
                  <Text> 0 item in this view</Text>
                   
                </View>
            </Container>
            
        )
    }
}