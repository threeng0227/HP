import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right,Badge, View, Content, Input, List, ListItem} from 'native-base';
import {Text,TouchableOpacity,ImageBackground} from 'react-native';
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
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inbox")}}><ImageBackground source={require('./images/bell.png')} style={{width:18,height:20}}>
                <Badge style={{borderRadius: 20,width: 20,height: 20,alignSelf: "flex-start",marginLeft:8, marginTop:'-45%'
                 }}><Text style={{color:'white'}}>6</Text></Badge>
           </ImageBackground>
           </TouchableOpacity>

                    <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Ionicons name="md-menu" size={25}></Ionicons>
                            </TouchableOpacity>
                </Right>
                </Header>
                <View style={{borderWidth:1,borderTopWidth:0,borderColor:'#e5e5e5',height:50,marginTop:'1%',flexDirection:'row',alignItems:'center'}}>
                <Input placeholder="Add new item"  ></Input>
               <Icon style={{marginRight:'2%'}} name='plus' color="#0764b0" size={25}></Icon>
                </View>
               <View style={{marginRight:'3%',display:this.setState.display}}>
                   <List>
                       <ListItem>
                         <Left><Text> A New Your Spa</Text></Left>
                          <Body></Body>
                          <Right><Text><Ic name="heart" size={20} color='gray'></Ic> </Text></Right>
                           
                       </ListItem>
                       <ListItem>
                       <Left><Text> Baba Spa</Text></Left>
                          <Body></Body>
                          <Right><Text><Ic name="heart" size={20} color='gray'></Ic> </Text></Right>
                       </ListItem>
                       <ListItem>
                       <Left><Text> Beauty Spa</Text></Left>
                          <Body></Body>
                          <Right><Text><Ic name="heart" size={20} color='red'></Ic> </Text></Right>
                       </ListItem>
                       
                       <ListItem>
                           <TouchableOpacity style={{width:'100%',}} onPress={()=>{this.props.navigation.navigate('WishListFavories')}}>
                           <View style={{flexDirection:'row'}}>
                           <Left><Text> Hamony Spa</Text></Left>
                          <Body></Body>
                          <Right><Text><Ic name="heart" size={20} color='red'></Ic> </Text></Right>
                           </View>
                           
                           </TouchableOpacity>
                       
                       </ListItem>
                       
                       <ListItem>
                       <Left><Text>Sunrise - Sunset Spa</Text></Left>
                          <Body></Body>
                          <Right><Text><Ic name="heart" size={20} color='gray'></Ic> </Text></Right>
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