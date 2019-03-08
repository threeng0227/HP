import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Footer, FooterTab, Button} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './style/style';
export default class FooterApp extends Component{
render(){
    return(
    
    <Footer > 
        <FooterTab style={{backgroundColor:'white'}}>
            <Button style={styles.foobtn}>
             <Ic name="home" size={33}/>
             <Text >Home</Text>
            </Button>
            <Button style={styles.foobtn} >
                <Icon name="store-alt" size={25}/>
             <Text style={styles.footext} >Stores</Text>
            </Button>
            <Button   style={[styles.foobtn,styles.active]}>
                <Ic style={styles.active}  name="calendar"size={25} />
                <Text style={[styles.footext,styles.active]}>Appointment</Text>
            </Button>
            <Button style={styles.foobtn}>
                <Ic name="gift" size={33}/>
                <Text >P2P</Text>
            </Button>
        </FooterTab>
    </Footer>)
    
}}
