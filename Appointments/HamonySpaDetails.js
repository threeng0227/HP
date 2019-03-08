import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Content, Header, List, ListItem, Left, Footer, FooterTab, Body, Button, Right } from 'native-base';
import styles from './style/style'


export default class SpaDetails extends Component {
    static navigationOptions={
        header:null
    };
    render() {
        
        return (
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Button transparent style={{ paddingRight: 50, justifyContent: "center" }}><Text ><Icon size={25} color="#15d5ea" name="chevron-left"></Icon> </Text></Button>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, color: '#15d5ea', fontWeight: "bold" }}>Appointment Details</Text>
                    </View>
                </Header>
                <Content style={{ flex: 1, backgroundColor: "#eee" }}>
                    <ListItem>
                        <Left style={{ flex: 1, marginLeft: -10 }} >
                            <View style={{ borderRightWidth: 2, borderRightColor: 'gray', paddingRight: 5 }}>
                                <Image source={require('./images/spadetail.jpg')} style={styles.imgspa}></Image>
                            </View>
                        </Left>
                        <Body style={{ flex: 2, marginLeft: 40, marginRight: -12 }}>
                            <Text style={{ fontSize: 20, color: '#170e8c', fontWeight: 'bold' }}>Hamony Spa <Ic name="heart" size={15} color="#15d5ea"></Ic></Text>

                            <Text style={styles.textdetailsp}>7 Thomas Joliet IL 60425</Text>
                            <Text style={styles.textdetailsp}>0123 456 987</Text>
                            <Text style={styles.textdetailsp}>7 Thomas Joliet IL 60425</Text>

                            <Text style={[styles.textdetailsp]}>hamonyspa.com </Text>
                        </Body>
                        <Right style={{ flex: 1, marginTop: 83, marginRight: -10 }}>
                            <Text style={styles.textdetailsp }>More Info <Icon size={15} color="#15d5ea" name="chevron-right"></Icon></Text>
                        </Right>
                    </ListItem>
                    <ListItem style={{ borderBottomWidth: 0 }}>
                        <View><Text style={styles.textspadetail}>Details.</Text></View>
                    </ListItem>

                    <View style={styles. viewspadetail}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textspadetail,{marginRight:'13%' }]}><Ic  name="calendar" color="#170e8c" size={20}></Ic> <Text style={{marginLeft:10}}> 05 - Jan - 2019</Text> </Text>
                            <Text style={styles.textspadetail}><Icon  name="clock" color="#170e8c" size={20}></Icon> <Text style={{marginLeft:10}}> 05 - Jan - 2019</Text> </Text>
                            </View> 
                    </View>
                    <View style={[styles. viewspadetail,{marginTop:2}]}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textspadetail,{flex:2}]}> Services</Text> 
                            <Text style={[styles.textspadetail,{flex:1}]}>Duration</Text> 
                            <Text style={[styles.textspadetail,{flex:1,marginRight:"-7%"}]}>  Price</Text> 
                            </View> 
                    </View>
                   
                    <View style={[styles. viewspadetail,{marginTop:2}]}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textdetail,{flex:2}]}> Spa Pedi - Gel Color</Text> 
                            <Text style={[styles.textdetail,{flex:1}]}>60 min</Text> 
                            <Text style={[styles.textdetail,{flex:1,marginRight:"-7%"}]}><Text> $ </Text>100</Text> 
                            </View> 
                    </View>
                    <View style={[styles. viewspadetail,{marginTop:2}]}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textdetail,{flex:2}]}>Spa Pedi ArtWord & Gel Color</Text> 
                            <Text style={[styles.textdetail,{flex:1}]}>60 min</Text> 
                            <Text style={[styles.textdetail,{flex:1,marginRight:"-7%"}]}><Text> $ </Text>200</Text>  
                            </View> 
                    </View>
                    <View style={[styles.viewspadetail,{marginTop:2}]}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textdetail,{flex:2}]}> Regular Pedicure ArtWord</Text> 
                            <Text style={[styles.textdetail,{flex:1}]}>60 min</Text> 
                            <Text style={[styles.textdetail,{flex:1,marginRight:"-7%"}]}><Text> $ </Text>300</Text> 
                            </View> 
                    </View>
                   
                    <View style={{marginTop:5}}>
                    <Text style={{marginLeft: 18,color:"#15d5ea"}}>Add More <Icon size={15} color="#15d5ea" name="chevron-right"></Icon></Text>
                    </View>
                    <View style={{marginTop:15}}>
                    <Text style={{marginLeft: 18,color:"#170e8c",fontSize:15}}>Count Of Services: <Text> 3</Text></Text>
                    </View>
                    <View style={[styles.viewtotal,{marginTop:10}]}>
                            <View style={{ flexDirection:"row" }}>
                            <Text style={[styles.textdetail,{flex:2,fontSize:15}]}>Total Duration : 180 min </Text> 
                            
                            <Text style={[styles.textdetail,{flex:1,fontSize:20}]}>Total:<Text> $ </Text>300</Text> 
                            </View> 
                    </View>
                   




                </Content>
                <View style={{ backgroundColor: "#eee", height: 60, justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                    <Button style={styles.buttonbookdetatil}>
                        <Text style={{ color: "#15d5ea", fontSize: 20 }} >Cancel</Text>
                    </Button>
                    <View style={{ width: 5 }}></View>
                    <Button style={styles.buttonbookdetatil}>
                        <Text style={{ color: "#15d5ea", fontSize: 20 }} >Edit</Text>
                    </Button>
                </View>
                <Footer >
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button style={styles.foobtn}>
                            <Ic name="home" size={33} />
                            <Text >Home</Text>
                        </Button>
                        <Button style={styles.foobtn} >
                            <Icon name="store-alt" size={25} />
                            <Text style={styles.footext} >Stores</Text>
                        </Button>
                        <Button style={[styles.foobtn, styles.active]}>
                            <Ic style={styles.active} name="calendar" size={25} />
                            <Text style={[styles.footext, styles.active]}>Appointment</Text>
                        </Button>
                        <Button style={styles.foobtn}>
                            <Ic name="gift" size={33} />
                            <Text >P2P</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
