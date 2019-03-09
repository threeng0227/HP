import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right, View, Content} from 'native-base';
import {Text,TouchableOpacity,Image} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';

export default class Favories  extends Component{
    
    
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
                    <Text><Ic name="bell" size={20}></Ic></Text>

                    <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Ionicons name="md-menu" size={25}></Ionicons>
                            </TouchableOpacity>
                </Right>
                </Header>
                <Content>
                    <Text style={{fontWeight:'bold', fontSize:20,marginTop:'2%'}}>Store</Text>
                <View style={{marginTop:5}}>
                <View style={{height:150}}>
                    <Image style={styles.imggif} source={require('./images/img.png')}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Left style={{flexDirection:'column',marginLeft:'5%',flex:3}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Hamony Spa</Text>
                            <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><EntIcon name='location-pin' ></EntIcon>  700 5th Ave,New York,NY 10019,USA</Text>
                        </Left>
                        <Right style={{marginRight:'5%',marginTop:'-15%'}}>
                        <AntIcon name="heart" color="red" size={20}></AntIcon>
                        </Right>
                    </View>
                </View>
                <View style={{marginTop:5}}>
                <View style={{height:150}}>
                    <Image style={styles.imggif} source={require('./images/favories.png')}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Left style={{flexDirection:'column',marginLeft:'5%',flex:3}}>
                            <Text style={{fontWeight:'bold', fontSize:20}}>Hamony Spa</Text>
                            <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><EntIcon name='location-pin' ></EntIcon>  700 5th Ave,New York,NY 10019,USA</Text>
                        </Left>
                        <Right style={{marginRight:'5%',marginTop:'-15%'}}>
                        <AntIcon name="heart" color="red" size={20}></AntIcon>
                        </Right>
                    </View>
                </View>
                    
                    
                   
                </Content>
            </Container>
            
        )
    }
}