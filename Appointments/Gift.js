import React, { Component } from 'react';
import { Platform, StyleSheet ,ImageBackground,Text, View, Image } from 'react-native';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Content, Header, List, ListItem, Left, Footer, FooterTab, Body, Button, Right } from 'native-base';
import styles from './style/style'


export default class Gift extends React.Component {
    static navigationOptions={
        header:null
    };
    render() {
        return (
            <Container>
                <Header >
                    
                    <Image style={styles.imggif} source={require('./images/img.png')}></Image>
                    <View style={{flex:1,justifyContent:"center"}}>
                     <Button transparent style={{paddingRight:'80%',justifyContent:"center"}}><Text ><Icon size={25} color="white" name="chevron-left"></Icon> </Text></Button> 
                    </View>
                    <View style={{flex:2,justifyContent:"center"}}>
                        <Text  style={{fontSize:20,color:'white',fontWeight:"bold"}}>P2P Gift</Text>
                    </View>
                    
                
               
      
                   

                </Header>
                <Content>

                </Content>
                <Footer >
            <FooterTab style={{ backgroundColor: 'white' }}>
                <Button style={[styles.foobtn]} onPress={()=>navigate('home')}>
                    <Ic name="home" size={33} />
                    <Text >Home</Text>
                </Button>
                <Button style={styles.foobtn}   >
                    <Icon name="store-alt" size={25} />
                    <Text style={[styles.footext, styles.active]} >Stores</Text>
                </Button>
                <Button style={[styles.foobtn]} onPress={()=>navigate('spa')}>
                    <Ic style={styles.active} name="calendar" size={25} />
                    <Text style={[styles.footext]}>Appointment</Text>
                </Button>
                <Button style={[styles.foobtn, styles.active]} onPress={()=>navigate('gift')}>
                    <Ic name="gift" size={33} />
                    <Text >P2P</Text>
                </Button>
            </FooterTab>
        </Footer>
         </Container>
           )
        }
    }
    