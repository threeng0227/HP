import React, {Component} from 'react';
import { Container,Header, Left, Button, Body,Right, View, Content, Input, Switch,Fab, ListItem} from 'native-base';
import {Text,TouchableOpacity,Image} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style'
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';

export default class WishListFavories  extends Component{
    constructor(props) {
        super(props)
          this.state = {
            active: false,
            on:true,
            an:'none',
          };
        }
   state={
       an:'none',
   }
    
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
                        <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Wish List</Text>
                </Body>
                <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
                    <Text><Ic name="bell" size={20}></Ic></Text>

                    <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Ionicons name="md-menu" size={25}></Ionicons>
                            </TouchableOpacity>
                </Right>
                </Header>
                <View style={{borderWidth:1,borderTopWidth:0,borderColor:'#e5e5e5',height:50,marginTop:'1%',flexDirection:'row',alignItems:'center'}}>
                <Input placeholder="Add new item"  ></Input>
              <TouchableOpacity onPress={()=>this.setState({an:'flex'})}><Icon style={{marginRight:'1%'}} name='plus' color="blue" size={25}></Icon></TouchableOpacity> 
                </View>
              <Content>
              <View style={{marginTop:5}}>
                <View style={{flexDirection:'row',
                borderWidth:1,borderColor:'#5d8bf7f7',
                width:200,borderRadius:5,
                height:50,backgroundColor:'#5daff7cc',
                marginBottom:10,
                display:this.state.an}}>
                   <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontSize:20,fontWeight:'bold'}}># Cool Spa</Text></View> 
                   <Right><TouchableOpacity style={{backgroundColor:'#5d8bf7f7',
                   width:50,height:50,flexDirection:'column',
                   justifyContent:'center',alignItems:'center'
                   }} onPress={()=>this.setState({an:'none'})}>
                   <Ic name='close' color="white" size={25}></Ic></TouchableOpacity></Right> 
                </View>
                <View style={{height:200}}>
                    <Image style={styles.imggif} source={require('./images/img.png')}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Left style={{flexDirection:'column',marginLeft:'5%',flex:3}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Hamony Spa</Text>
                        <AntIcon style={{paddingLeft:'2%'}} name="heart" color="red" size={20}></AntIcon>
                        <Text style={{fontStyle:'italic',paddingLeft:'5%'}}>item add February 15, 2019</Text>
                        </View>
                            
                            <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><EntIcon name='location-pin' ></EntIcon>  700 5th Ave,New York,NY 10019,USA</Text>
                        </Left>
                        
                    </View>
                </View>
              </Content>
              <Fab
            active={this.state.active}
            direction="up"
            style={{borderRadius:0,width:150,borderRadius:3}}
            containerStyle={{marginRight:40}}
            
            onPress={() => this.setState({ active: !this.state.active })}>
           <Text >Share</Text>
           <View style={{backgroundColor:'white',width:150,marginLeft:-55,borderRadius:1, flexDirection:'row'}}>
              
               <Text style={{paddingRight:12}} >Share Wish List
                   </Text>  
                   <Right ><Icon style={{paddingRight:10}} name='share-alt'size={20}></Icon></Right>
                   
                </View>
           <View style={{backgroundColor:'white',width:150,marginLeft:-55,borderRadius:1,flexDirection:'row'}}>
             <Left><Text>On/Of Public
                   </Text></Left>  
                    <Switch
                onValueChange={(value) => this.setState({on: value})}
                
                value={this.state.on} />
                </View>
                
          </Fab>
            </Container>
            
        )
    }
}