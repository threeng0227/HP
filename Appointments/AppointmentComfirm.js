import React, {Component} from 'react';
import { Container,Header, Content,Button, Badge, Body,Right,Left, View} from 'native-base';
import {Text,TouchableOpacity,ImageBackground} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'

export default class AppointmentComfirm  extends Component{
    
    
    render(){
       

        return(
            <Container >
                <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Appointments</Text>
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

             <Content  >
         <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppointmentUnConfirm')}}>
             <View style={{backgroundColor:'#fff176',marginBottom:10}}>
                    <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                    <Left style={{marginLeft:'2%',flex:2}}>
                    <Text style={{fontSize:20,color:'#42a5f5', fontWeight:'bold'}}> Harmony Salon</Text>
                    </Left>
                       <Body></Body> 
                       <Right style={{marginRight:'2%',fontWeight:"bold"}}><Text  style={{fontWeight:'bold'}}>Unconfirm</Text></Right>
                        
                    </View>  
                    <View style={{flexDirection:'row',flex:1}}>
                    <Left style={{marginLeft:'2%'}}> 
                        <View style={{flexDirection:'column'}}>
                             <Text>Stylist:</Text>
                           
                            <Text>Date/Time:</Text>
                                <Text>Andress:</Text>
                                
                        </View>
                        </Left>
                        
                        <Right style={{marginRight:'2%',flex:2}}>  
                        <View style={{flexDirection:'column'}}>
                        <Text> Ronaldo</Text>
                        <Text>05 Jan 2019/8:00 AM - 11:00 AM</Text>
                        <Text>700 5th Awe,NewYork,NY 10019,USA</Text>
                        </View>
                        </Right>
                    </View>
                </View>
            </TouchableOpacity>
                <View style={{backgroundColor:'#baffff'}}>
                    <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                    <Left style={{marginLeft:'2%',flex:2}}>
                    <Text style={{fontSize:20,color:'#42a5f5', fontWeight:'bold'}}> Harmony Salon</Text>
                    </Left>
                       <Body></Body> 
                       <Right style={{marginRight:'2%',fontWeight:"bold"}}><Text  style={{fontWeight:'bold'}}>Comfirmed</Text></Right>
                        
                    </View>  
                    <View style={{flexDirection:'row',flex:1}}>
                    <Left style={{marginLeft:'2%'}}> 
                        <View style={{flexDirection:'column'}}>
                             <Text>Stylist:</Text>
                           
                            <Text>Date/Time:</Text>
                                <Text>Andress:</Text>
                                
                        </View>
                        </Left>
                        
                        <Right style={{marginRight:'2%',flex:2}}>  
                        <View style={{flexDirection:'column'}}>
                        <Text> Ronaldo</Text>
                        <Text>05 Jan 2019/8:00 AM - 11:00 AM</Text>
                        <Text>700 5th Awe,NewYork,NY 10019,USA</Text>
                        </View>
                        </Right>
                    </View>
                </View>
                <Text style={{fontSize:20, fontWeight:'bold',marginBottom:10,marginTop:5}}> History</Text>
                <View style={{backgroundColor:'#f5f5f5' ,marginBottom:10}}>
                
                    <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                    <Left style={{marginLeft:'2%',flex:2}}>
                    <Text style={{fontSize:20,color:'#42a5f5', fontWeight:'bold'}}> Harmony Salon</Text>
                    </Left>
                       <Body></Body> 
                       <Right style={{marginRight:'2%',fontWeight:"bold"}}><Text  style={{fontWeight:'bold'}}>Paid</Text></Right>
                        
                    </View>  
                    <View style={{flexDirection:'row',flex:1}}>
                    <Left style={{marginLeft:'2%'}}> 
                        <View style={{flexDirection:'column'}}>
                             <Text>Stylist:</Text>
                           
                            <Text>Date/Time:</Text>
                                <Text>Andress:</Text>
                                
                        </View>
                        </Left>
                        
                        <Right style={{marginRight:'2%',flex:2}}>  
                        <View style={{flexDirection:'column'}}>
                        <Text> Ronaldo</Text>
                        <Text>05 Jan 2019/8:00 AM - 11:00 AM</Text>
                        <Text>700 5th Awe,NewYork,NY 10019,USA</Text>
                        </View>
                        </Right>
                    </View>
                </View>
                <View style={{backgroundColor:'#f5f5f5' ,marginBottom:10}}>
                
                <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                <Left style={{marginLeft:'2%',flex:2}}>
                <Text style={{fontSize:20,color:'#42a5f5', fontWeight:'bold'}}> Harmony Salon</Text>
                </Left>
                   <Body></Body> 
                   <Right style={{marginRight:'2%',fontWeight:'bold'}}><Text  style={{fontWeight:'bold'}}>Paid</Text></Right>
                    
                </View>  
                <View style={{flexDirection:'row',flex:1}}>
                <Left style={{marginLeft:'2%'}}> 
                    <View style={{flexDirection:'column'}}>
                         <Text>Stylist:</Text>
                       
                        <Text>Date/Time:</Text>
                            <Text>Andress:</Text>
                            
                    </View>
                    </Left>
                    
                    <Right style={{marginRight:'2%',flex:2}}>  
                    <View style={{flexDirection:'column'}}>
                    <Text> Ronaldo</Text>
                    <Text>05 Jan 2019/8:00 AM - 11:00 AM</Text>
                    <Text>700 5th Awe,NewYork,NY 10019,USA</Text>
                    </View>
                    </Right>
                </View>
            </View>
            <View style={{backgroundColor:'#f5f5f5',marginBottom:10}}>
                
                <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                <Left style={{marginLeft:'2%',flex:2}}>
                <Text style={{fontSize:20,color:'#42a5f5', fontWeight:'bold'}}> Harmony Salon</Text>
                </Left>
                   <Body></Body> 
                   <Right style={{marginRight:'2%',fontWeight:'bold'}}><Text  style={{fontWeight:'bold'}}>Paid</Text></Right>
                    
                </View>  
                <View style={{flexDirection:'row',flex:1}}>
                <Left style={{marginLeft:'2%'}}> 
                    <View style={{flexDirection:'column'}}>
                         <Text>Stylist:</Text>
                       
                        <Text>Date/Time:</Text>
                            <Text>Andress:</Text>
                            
                    </View>
                    </Left>
                    
                    <Right style={{marginRight:'2%',flex:2}}>  
                    <View style={{flexDirection:'column'}}>
                    <Text> Ronaldo</Text>
                    <Text>05 Jan 2019/8:00 AM - 11:00 AM</Text>
                    <Text>700 5th Awe,NewYork,NY 10019,USA</Text>
                    </View>
                    </Right>
                </View>
            </View>
             </Content>
            
        </Container>
            
        )
    }
}