import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Content,Header, List, ListItem, Left, Footer, FooterTab,Body,Button,Right } from 'native-base';
import styles from './style/style'
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SpaDetails from './HamonySpaDetails';
 class Spa extends Component{
    static navigationOptions={
        header:null
    };
    render(){

        return(
            <Container> 
                <Header style={{backgroundColor:"white"}}>
                    <View style={{flex:1,justifyContent:"center"}}>
                     <Button transparent style={{paddingRight:'80%',justifyContent:"center"}}><Text ><Icon size={25} color="#15d5ea" name="chevron-left"></Icon> </Text></Button> 
                    </View>
                    <View style={{flex:2,justifyContent:"center"}}>
                        <Text  style={{fontSize:20,color:'#15d5ea',fontWeight:"bold"}}>Appointment</Text>
                    </View>
                </Header>
                
                  
                
                    <Content style={{backgroundColor:"#eee"}}>
                        <List>
                           
                            
                                <View style={styles.viewitem}>
                                    <ListItem style={styles.listitem}>
                                    <Left style={styles.left}>
                                    <View style={styles.leftview}>
                                        <Text style={{fontSize:30,color:'#170e8c', fontWeight:'bold'}}>31</Text>
                                        <Text style={{fontSize:15,color:'#170e8c'}}>Dec</Text>
                                        </View>
                                    </Left>
                                    
                                    <Body style={{flex:2,marginLeft:5}}>
                                        <Text style={{fontSize:20,color:'#170e8c', fontWeight:'bold'}}>Hamony Spa <Ic name="heart" size={15} color="#15d5ea"></Ic></Text>
                                        <Text style={{color:'#170e8c'}}>Distance: <Text>5.0 miles</Text> </Text>
                                        <Text  style={{color:'#170e8c'}}>Andress: <Text>7 Thommas st...</Text></Text>
                                    </Body>
                                    <Right style={{marginTop:-35}}>
                                        <Button transparent onPress={()=>this.props.navigation.navigate('detail')} >
                                            <Text style={styles.textview} >Open Now</Text>
                                        </Button>
                                    </Right>
                                    </ListItem>
                                    <View style={{borderBottomWidth:1, borderColor:"gray",marginTop:15,marginBottom:15 }}></View>
                                </View>
                                <View style={[styles.viewitem,{marginTop:5}]}>
                                    <ListItem style={styles.listitem}>
                                    <Left style={styles.left}>
                                    <View style={[styles.leftview,{backgroundColor:"white"}]}>
                                        <Text style={{fontSize:30}}>15</Text>
                                        <Text style={{fontSize:15}}>Dec</Text>
                                        </View>
                                    </Left>
                                    
                                    <Body style={{flex:2,marginLeft:5}}>
                                        <Text style={{fontSize:20}}>Hamony Spa <Ic name="heart" size={15} color="#15d5ea"></Ic></Text>
                                        <Text>Distance: <Text>5.0 miles</Text> </Text>
                                        <Text>Andress: <Text>7 Thommas st...</Text></Text>
                                    </Body>
                                    <Right style={{marginTop:-35}}>
                                        <Button transparent onPress={()=>this.props.navigation.navigate('detail')} >
                                            <Text style={styles.textview}>Open Now</Text>
                                        </Button>
                                    </Right>
                                    </ListItem>
                                    
                                </View> 
                                <View style={[styles.viewitem,{marginTop:5}]}>
                                    <ListItem style={styles.listitem}>
                                    <Left style={styles.left}>
                                    <View style={[styles.leftview,{backgroundColor:"white"}]}>
                                        <Text style={{fontSize:30}}>31</Text>
                                        <Text style={{fontSize:15}}>Dec</Text>
                                        </View>
                                    </Left>
                                    
                                    <Body style={{flex:2,marginLeft:5}}>
                                        <Text style={{fontSize:20}}>Hamony Spa <Ic name="heart" size={15} color="#15d5ea"></Ic></Text>
                                        <Text>Distance: <Text>5.0 miles</Text> </Text>
                                        <Text>Andress: <Text>7 Thommas st...</Text></Text>
                                    </Body>
                                    <Right style={{marginTop:-35}}>
                                        <Button transparent onPress={()=>this.props.navigation.navigate('detail')} >
                                            <Text style={styles.textview}>Open Now</Text>
                                        </Button>
                                    </Right>
                                    </ListItem>
                                    
                                </View> 
                        </List>
                   
                     
                         
                         
                    </Content>
                    <View style={{backgroundColor:"#eee",height:60,justifyContent:"center",alignItems:'center'}}>
                    <Button  style={styles.buttonbook}>
                           <Text style={{color:"white",fontSize:20}} >Book</Text>
                        </Button>
                    </View>
                    
        
            </Container>
            
            
        )
    }
}
const SpaRoot = createStackNavigator({
    spa : {
        screen : Spa,
        navigationOptions:{
            header :null
        }
    },
    detail :{
        screen :  SpaDetails,
        navigationOptions:{
            header :null
        }
    } 
},

{
    initialRouteName : 'spa'
}
)
export default Appcontainer = createAppContainer(SpaRoot);