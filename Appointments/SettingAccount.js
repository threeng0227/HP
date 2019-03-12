import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right,Image, View, Content, ListItem, Switch} from 'native-base';
import {Text,TouchableOpacity} from 'react-native';
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
                        <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Setting</Text>
                </Body>
                <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
                    <Text><Ic name="bell" size={20}></Ic></Text>

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
                            <Text style={styles.textbtnsetting}><Text style={styles.textbtnsetting}>$ </Text>100</Text>
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}><Text style={styles.textbtnsetting}>$ </Text>200</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}><Text style={styles.textbtnsetting}>$ </Text>300</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}><Text style={styles.textbtnsetting}>$ </Text>400</Text>  
                            </Button>
                            <Button style={styles.buttonsettingaccout} >
                                 <Text style={styles.textbtnsetting}><Text style={styles.textbtnsetting}>$ </Text>500</Text>  
                            </Button>
                        </View>
                    </View>
                    <View>
                   
                        <ListItem style={{marginLeft:3}}>
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
                       
                        
                        <ListItem style={{marginLeft:3,flexDirection:'column'}}  >
                      
                            <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20,marginLeft:'-77%'}}>Account</Text>
                            <TouchableOpacity style={{width:'100%'}} onPress={()=>{this.props.navigation.navigate('personalinfo')}}>
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
                    <View style={{marginTop:15}}>
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Security</Text>
                        <View  style={{flexDirection:'row'}}>
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Security</Text></Left>
                                <Right ><View>
                                            <Switch
                                            onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
                                            
                                            value={this.state.colorFalseSwitchIsOn} />
                                            
                                        </View>  
                                </Right>
                            </View>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{fontWeight:'bold', fontSize:20,marginBottom:20}}>Notification preferences</Text>
                        <View  style={{flexDirection:'row'}}>
                                <Left style={{flex:2}}><Text style={{fontSize:15}}>Inbox messages</Text></Left>
                                <Right ><View>
                                            
                                            <Switch
                                            onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
                                            
                                            value={this.state.colorTrueSwitchIsOn} />
                                        </View>  
                                </Right>
                            </View>
                    </View>
                </Content>
            </Container>
            
        )
    }
}