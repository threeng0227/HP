import React, {Component} from 'react';
import { Container, Content, List, ListItem, Left, Button,Footer, Right} from 'native-base';
import {Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FarIcon from 'react-native-vector-icons/Feather';


export default class Menu  extends Component{

    render(){
        
      
        return(
            <Container>
                <Content>
                <List>
                <ListItem>
                    <Left  >
                    <Text style={{fontSize:25,fontWeight:'bold'}}>MENU</Text>    
                        
                     </Left>
                    <Right >
                    <TouchableOpacity style={{flexDirection:'row',width:'100%'}} onPress={()=>{this.props.navigation.closeDrawer()}}>
                            
                            <AntIcon name="close" size={25}></AntIcon>
                              
                          
                      </TouchableOpacity> 
                    </Right>
                </ListItem> 
                <ListItem>
                    <Left >
                        <TouchableOpacity style={{flexDirection:'row',width:'100%'}} onPress={()=>{this.props.navigation.navigate('favories')}}>
                            
                              <Icon name="heart" size={25}></Icon>
                                <Text style={{marginLeft:'20%',fontSize:20}}>Favories</Text>    
                            
                        </TouchableOpacity> 
                     </Left>
                
                </ListItem> 
                <ListItem>
                    <Left >
                        <TouchableOpacity style={{flexDirection:'row',width:'100%'}} onPress={()=>{this.props.navigation.navigate('wishlist')}}>
                            
                              <Ic name='list-alt' size={25}></Ic>
                                <Text style={{marginLeft:'20%',fontSize:20}}>Wish List</Text>    
                            
                        </TouchableOpacity> 
                     </Left>
                
                </ListItem> 
                <ListItem>
                    <Left >
                        <TouchableOpacity style={{flexDirection:'row',width:'100%'}} onPress={()=>{this.props.navigation.navigate('settingaccount')}}>
                            
                              <AntIcon name="setting" size={25}></AntIcon>
                                <Text style={{marginLeft:'20%',fontSize:20}}>Setting</Text>    
                            
                        </TouchableOpacity> 
                     </Left>
                
                </ListItem> 
                <ListItem>
                    <Left >
                        <TouchableOpacity style={{flexDirection:'row',width:'100%'}} onPress={()=>{this.props.navigation.navigate('abouthamony')}}>
                            
                                <Icon name='user-friends' size={20}></Icon> 
                                <Text style={{marginLeft:'20%',fontSize:20}}>About Hamony Page</Text>    
                            
                        </TouchableOpacity> 
                     </Left>
                
                </ListItem> 
            </List>
                </Content>
            
              <Footer style={{marginBottom:'10%',
              backgroundColor:'white',
              marginRight:'2%',marginLeft:'2%',
              borderRadius:10,
              borderColor:'#0069c0',
              borderWidth:2,
             
              }}>
                  <TouchableOpacity style={{marginTop:'2%'}} >< Text style={{fontSize:25, color:'#0069c0'}}>Sign Out</Text></TouchableOpacity>
     
              </Footer>
            </Container>
            
        )
    }
}