import React, {Component} from 'react';
import { Container, Content, Header,View } from 'native-base';
import {Text} from 'react-native';
import {  FooterTab, Button} from 'native-base';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style';
import FooterApp from './footers';
export default class store  extends Component{
    static navigationOptions={
        header:null
    };
   
    render(){
        const {navigate}=this.props.navigation;
        return(
            <Container>
                <Header style={{backgroundColor:"white"}}>
                    <View style={{flex:1,justifyContent:"center"}}>
                     <Button transparent style={{paddingRight:'80%',justifyContent:"center"}}><Text ><Icon size={25} color="#15d5ea" name="chevron-left"></Icon> </Text></Button> 
                    </View>
                    <View style={{flex:2,justifyContent:"center"}}>
                        <Text  style={{fontSize:20,color:'#15d5ea',fontWeight:"bold"}}>Stores</Text>
                    </View>
                </Header>
                <Content>



                </Content>
                <FooterApp/>
            </Container>
            
        )
    }
}