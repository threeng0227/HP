import React, {Component} from 'react';
import { Container,Header, Content,Button, Fab, Body,Right,Left, View, Grid, Row, Col,FooterTab, Footer, Badge} from 'native-base';
import {Text,TouchableOpacity,Image,StyleSheet,ImageBackground} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from'../style/style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Modal from'react-native-modal';
import {Calendar} from'react-native-calendars';

export default class BookProcess2  extends Component{
    state = {
        isModalVisible: false,
        isModalAlert:false,
        backboder:'gray',
        boder:'blue',
        width:0,
        boderactive:'gray',
        isCalendar:false,
        widthactive:0,
        
      };
      _toggleModalCalendar=()=>{
        this.setState({ isCalendar: !this.state.isCalendar });
      }
    render(){
        return(
            <Modal isVisible={this.state.isCalendar}  >
                    <Container style={{height:300}}>
                    <Calendar
                        style={{justifyContent:'center',flex:1}}
                        current={'2019-01-03'}
                        markedDates={{
                            '2019-01-03': {selected: true,  selectedColor: '#00adf5'},
                            
                        }}
                        theme={{
                            dayTextColor: '#00adf5',
                            textDayHeaderFontSize: 16,
                            textMonthFontSize :  20 ,
                            monthTextColor : '#00adf5',

                        }}
                      
                        ></Calendar>
                    </Container>
            </Modal>
           

        )
    }
}
