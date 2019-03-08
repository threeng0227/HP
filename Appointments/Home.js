import React, {Component} from 'react';
import { Container, Content, Header,View } from 'native-base';
import {Text} from 'react-native';
import { Footer, FooterTab, Button} from 'native-base';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'

export default class Home  extends Component{
    static navigationOptions={
        header:null
    };
   
    render(){
        const {navigate}=this.props.navigation;
        return(
            <Container>
                <Header style={{backgroundColor:"white"}}>
                    
                    <View style={{flex:2,justifyContent:"center"}}>
                        <Text  style={{fontSize:20,color:'#15d5ea',fontWeight:"bold"}}>Home</Text>
                    </View>
                </Header>
                <Content>



                </Content>
                <Footer >
            <FooterTab style={{ backgroundColor: 'white' }}>
                <Button style={[styles.foobtn, styles.active]} onPress={()=>navigate('home')}>
                    <Ic name="home" size={33} />
                    <Text >Home</Text>
                </Button>
                <Button style={styles.foobtn} onPress={()=>navigate('store')}  >
                    <Icon name="store-alt" size={25} />
                    <Text style={styles.footext} >Stores</Text>
                </Button>
                <Button style={[styles.foobtn]} onPress={()=>navigate('spa')}>
                    <Ic style={styles.active} name="calendar" size={25} />
                    <Text style={[styles.footext, styles.active]}>Appointment</Text>
                </Button>
                <Button style={styles.foobtn} onPress={()=>navigate('gift')}>
                    <Ic name="gift" size={33} />
                    <Text >P2P</Text>
                </Button>
            </FooterTab>
        </Footer>
            </Container>
            
        )
    }
}