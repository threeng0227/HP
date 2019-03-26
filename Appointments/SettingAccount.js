import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right,Badge, View, Content, ListItem, Switch} from 'native-base';
import {Text,TouchableOpacity,ImageBackground} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'
export default class SettingAccount  extends Component{
    static navigationOptions={
       
        header:null,
    };
   
    state = {
        colorTrueSwitchIsOn: true,
        colorFalseSwitchIsOn: false,
      };
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
                        <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Settings</Text>
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
                <Content style={{marginLeft:'5%'}}>
                <View style={{marginTop:15}}>
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Jerry Nguyen</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{flexDirection:'column'}}><Icon name='credit-card'size={20}></Icon><Ionicons name='ios-mail' size={30}></Ionicons></View>
                            <View style={{flexDirection:'column',fontSize:15,marginLeft:'5%'}}><Text  style={{fontSize:15}}>123456<Text  style={{fontSize:15}}> - </Text> 012345689</Text><Text  style={{fontSize:15}}>jerry.nguyen@gmail.com</Text></View>
                        </View>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Hamony Account</Text>
                        <View style={{flexDirection:'row',marginBottom:15}}><Text style={{color:'#0069c0',fontSize:30}}>$ </Text><Text  style={{color:'#0069c0',fontSize:30}}>1234,45</Text></View>
                        <Text  style={{fontSize:15}}>Reaload now: </Text>
                        <View style={{ flexDirection:'row',marginTop:5}}>
                            <Button style={styles.buttonsettingaccout} >
                            <Text style={styles.textbtnsetting}>$ 100</Text>
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}>$ 200</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}>$ 300</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}>$ 400</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}>$ 500</Text>  
                            </Button>
                        </View>
                    </View>
                    <View>
                   
                        <ListItem style={{marginLeft:1}}>
                        <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('moresetting')}}>
                        <View style={{flexDirection:'row'}}>
                        <Left  >
                                <Text style={{fontSize:15}}>More settings</Text>
                               
                            </Left>
                            <Right>
                            <Icon   name="chevron-right"></Icon>
                            </Right>
                        </View>
                           </TouchableOpacity>
                           
                        </ListItem>
                       
                        
                        <ListItem style={{marginLeft:1,flexDirection:'column'}}  >
                      
                            <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20,marginLeft:'-77%'}}>Account</Text>
                            <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('PersonalInfo')}}>
                            <View style={{flexDirection:'row'}}  >
                            
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Personal info</Text></Left>
                                
                                <Right ><Icon   name="chevron-right"></Icon></Right>
                               
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('BankAndCard')}}>
                            <View  style={{flexDirection:'row',paddingTop:10}}>
                           
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Bank account and cards</Text></Left>
                                <Right ><Icon   name="chevron-right"></Icon></Right>
                                
                            </View>
                            </TouchableOpacity>
                        </ListItem>
                    </View>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#eee'}}>
                        
                        <ListItem style={{marginLeft:1,flexDirection:'column',borderBottomWidth:0}}  >
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20,marginLeft:'-77%'}}>Security</Text>
                      <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('ChangePassword')}}>
                      <View style={{flexDirection:'row'}}  >
                          <Left style={{flex:2}}><Text style={{fontSize:15}}>Change Password</Text></Left>
                          <Right ><Icon   name="chevron-right"></Icon></Right>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('CurrentPinCode')}}>
                      <View  style={{flexDirection:'row',paddingTop:10}}>
                          <Left style={{flex:2}}><Text style={{fontSize:15}}>Change PIN Code</Text></Left>
                          <Right ><Icon   name="chevron-right"></Icon></Right>  
                      </View>
                      </TouchableOpacity>
                      
                  </ListItem>
                  <View  style={{flexDirection:'row',marginBottom:15,}}>
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Biometric Login</Text></Left>
                                <Right ><View>
                                            <Switch
                                            onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
                                            value={this.state.colorFalseSwitchIsOn} /> 
                                        </View>  
                                </Right>
                     </View>
                    </View>
                    <View style={{marginTop:15,marginBottom:15}}>
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Notification preferences</Text>
                        <View  style={{flexDirection:'row'}}>
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Inbox messages</Text></Left>
                                <Right style={{flex:1}} >
                                            <Switch
                                            onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
                                            
                                            value={this.state.colorTrueSwitchIsOn} />
                                        
                                </Right>
                            </View>
                    </View>
                </Content>
            </Container>
            
        )
    }
}