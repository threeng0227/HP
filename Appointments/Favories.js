import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right, View,Badge, Content, Thumbnail, Title, Subtitle} from 'native-base';
import {Text,TouchableOpacity,Image,ImageBackground} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';

export default class Favories  extends Component{
    
  constructor(props)
  {
      super(props)
      this.state={
          like:'red',
          status:true,
          
      }
  }
  check(value){
      this.setState({status:value})
      if(this.state.status==false)
      {
          this.setState({like:'gray'});
      }
      if(this.state.status==true)
      {
          this.setState({like:'red'});
      }
  }
  
        
   
    render(){
       

        return(
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                <Left>
                    <View style={{ justifyContent: "center"}}>
                        <Button transparent style={{justifyContent: "center" }}onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
                    </View>
                </Left>
                <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
                        <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Favories</Text>
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
                <Content>
                    <Text style={{fontWeight:'bold', fontSize:20,marginTop:'2%',marginLeft:'2%'}}>Store</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabStores')}}>
                <View style={{marginTop:5}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabStores')}}>
                <View style={{height:200}}>
                    <Image style={styles.imggif} source={require('./images/img.png')}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:10,width:'95%',marginLeft:'2%',marginRight:'2%'}}>
                        <Left style={{flexDirection:'column',marginLeft:'5%',flex:4}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Harmony Spa</Text>
                            <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><Icon name='map-marker-alt' ></Icon>  700 5th Ave,New York,NY 10019,USA</Text>
                        </Left>
                        <Right style={{marginRight:'5%',marginTop:'-15%'}}>
                        <AntIcon name="heart" color="red" size={20}></AntIcon>
                        </Right>
                    </View>
                </View>
                </TouchableOpacity>
                
                <View style={{marginTop:5}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabStores')}}>
                <View style={{height:200}}>
                    <Image style={styles.imggif} source={require('./images/favories.png')}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:10 ,width:'95%',marginLeft:'2%',marginRight:'2%'}}>
                        <Left style={{flexDirection:'column',marginLeft:'5%',flex:4}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Harmony Spa</Text>
                            <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><EntIcon name='location-pin' ></EntIcon>  700 5th Ave,New York,NY 10019,USA</Text>
                        </Left>
                        <Right style={{marginRight:'5%',marginTop:'-15%'}}>
                        <AntIcon name="heart" color={this.state.like} size={20} onPress={()=>{this.check(!this.state.status)}}></AntIcon>
                        </Right>
                    </View>
                </View>
                
                   <View>
                   <Text style={{fontWeight:'bold', fontSize:20,marginTop:'2%',marginBottom:10,marginLeft:'2%'}}>Stylist</Text>
                   <View style={{flexDirection:'column',marginBottom:10,width:'95%',
                   justifyContent:'center',alignItems:'center',marginLeft:'2%'}}>
                        <View  style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#eee'}}>
                        <Left  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Thumbnail source={require('./images/stylist1.png')}></Thumbnail>
                            
                            </Left> 
                            <Body style={{flex:2,justifyContent:'flex-start'}}>
                            <View style={{marginLeft:'-50%'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Jessica Miles</Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Harmony Spa</Text>
                            </View>
                            
                            </Body>

                          <Right style={{marginRight:'5%'}}>
                          <AntIcon name="heart" color="red" size={20} ></AntIcon>
                            </Right> 
                        </View>
                        <View  style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#eee'}}>
                        <Left  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Thumbnail source={require('./images/stylist1.png')}></Thumbnail>
                            
                            </Left> 
                            <Body style={{flex:2,justifyContent:'flex-start'}}>
                            <View style={{marginLeft:'-50%'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Jessica Miles</Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Harmony Spa</Text>
                            </View>
                            
                            </Body>

                          <Right style={{marginRight:'5%'}}>
                          <AntIcon name="heart" color="red" size={20}></AntIcon>
                            </Right> 
                        </View>
                        <View  style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#eee'}}>
                        <Left  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Thumbnail source={require('./images/stylist1.png')}></Thumbnail>
                            
                            </Left> 
                            <Body style={{flex:2,justifyContent:'flex-start'}}>
                            <View style={{marginLeft:'-50%'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>Jessica Miles</Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Harmony Spa</Text>
                            </View>
                            
                            </Body>

                          <Right style={{marginRight:'5%'}}>
                          <AntIcon name="heart" color="red" size={20}></AntIcon>
                            </Right> 
                        </View>
                       
                        
                        
                   </View>
                   </View>
                </Content>
            </Container>
            
        )
    }
}