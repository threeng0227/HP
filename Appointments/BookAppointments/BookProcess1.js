import React, {Component} from 'react';
import { Container,Header, Content,Button, Fab, Body,Right,Left, View, Grid, Row, Col} from 'native-base';
import {Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Modal from'react-native-modal'

export default class BookProcess1  extends Component{
    
   

    render(){
       

        return(
            <Container >
                <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Text ><Icon size={20}  name="chevron-left"></Icon> </Text></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Booking Appointments</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>    

             <Content  >
         
             <View >
                   <Image style={{width:'100%'}} source={require('../images/processbook1.jpg')}></Image>
             </View>
             <View style={{flexDirection:'row',marginRight:'3%',marginTop:10,marginBottom:10}}> 
                   <Right  >
                       <View style={{flexDirection:'row'}}>
                       <Text style={{fontSize:17}}>Estimate wating time: </Text>
                       <Text style={{fontSize:17,fontWeight:'bold'}}>30 Min</Text>
                       
                       </View>
                       </Right>
             </View>  
                <Grid style={{marginLeft:'1%',marginRight:'1%'}}>  
                
                <Row >
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text style={{fontSize:15,fontWeight:'bold'}}>Service</Text></Col>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text style={{fontSize:15,fontWeight:'bold'}}>Duration</Text></Col>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text style={{fontSize:15,fontWeight:'bold'}}>Price</Text></Col>
                <Col style={style.table}><Text style={{fontSize:15,fontWeight:'bold'}}></Text></Col>
                </Row>
                <Row>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>Pedicure - Artwork & Gel Color</Text></Col>
                <Col  style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>70 min</Text></Col>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>$ 50.00</Text></Col>
                <Col style={[style.table]}><AntIcon name='delete'></AntIcon></Col>
                </Row>
                <Row>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>Spa pedi- Artwork & Gel Color</Text></Col>
                <Col  style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>40 min</Text></Col>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>$ 50.00</Text></Col>
                <Col style={[style.table]}><AntIcon name='delete'></AntIcon></Col>
                </Row>
                <Row>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>Reguler Pedicure - Artwork</Text></Col>
                <Col  style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>40 min</Text></Col>
                <Col style={[style.table,{justifyContent:'flex-start',borderRightWidth:0}]}><Text>$ 50.00</Text></Col>
                <Col style={[style.table]}><AntIcon name='delete'></AntIcon></Col>
                </Row>
                
              
              
                
             
                </Grid>   
               
                    
                <View style={{flexDirection:'row',marginRight:'3%',marginTop:10}}>
                   
                    <Right  >
                   
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:17}}>Total Duration: </Text>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>150 Min</Text>
                        
                        </View>
                        </Right>
                 </View>  
                 <View style={{flexDirection:'row',marginRight:'3%',marginTop:10}}>
                 <Right>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:32}}>Total: </Text>
                        <Text style={{fontSize:32,fontWeight:'bold'}}>$ 150.00</Text>
                        
                        </View>
                        </Right>
                 </View> 
             </Content>
             <View style={{ backgroundColor: "white", height: 60,  alignItems: 'center', flexDirection: "row" }}>
                   <View style={{justifyContent: "center", alignItems: 'center', flexDirection: "row",flex:1 }}>
                 
                       
                       <Button style={{ width:110,borderRadius:3,height:50,
                            borderWidth:1,
                            borderColor:'blue',
                            justifyContent:"center",
                            backgroundColor:'white'
                           }}>
                        <Text style={{ color: "blue", fontSize: 20 }} >Add Service</Text>
                    </Button>
                   </View>
                   <View style={{justifyContent: "center", alignItems: 'center', flexDirection: "row",flex:1 }}>
                    <Button style={{ width:110,borderRadius:3,height:50,
                            borderWidth:1,
                            borderColor:'blue',
                            justifyContent:"center",
                            backgroundColor:'blue'
                           }} onPress={()=>{this.props.navigation.navigate('BookProcess2')}}>
                        <Text style={{ color: "white", fontSize: 20 }} > Next</Text>
                    </Button>
                   
                    
                   </View>
                    
                </View>
            
        </Container>
            
        )
    }
}
const style = StyleSheet.create({
    table:{justifyContent:'center',
    flexDirection:"row",alignItems:'center',
    borderWidth:1,borderColor:'#eee'}
})