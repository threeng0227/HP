import React, {Component} from 'react';
import { Container,Header, Content,Button, Fab, Body,Right,Left, View, Grid, Row, Col, Footer} from 'native-base';
import {Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import HeaderApp from './HeaderApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style/style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Modal from'react-native-modal'

export default class InvoiceDetail2  extends Component{
    
    state = {
        isModalVisible: false,
      };
      _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

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
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Invoice Details</Text>
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
                    <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                    <Left style={{marginLeft:'2%',flex:2}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}> Harmony Spa</Text>
                    </Left>
                       <Body></Body>  
                    </View>  
                    <View style={{flexDirection:'row',flex:1}}>
                    <Left style={{marginLeft:'2%'}}> 
                        <View style={{flexDirection:'column'}}>
                        <Image source={require('./images/start.jpg')}></Image>
                            <Text><AntIcon name='clockcircleo' ></AntIcon>  8:00 AM - 18:00 PM</Text>
                            <Text><Icon name='map-marker-alt' ></Icon>  700 5th Ave,New York,NY 10019,USA</Text>
                                
                        </View>
                        </Left>
                        
                        
                    </View>
                </View>
              
                <View style={{marginBottom:10}}>
                
                    <View style={{flexDirection:'row',marginBottom:10,marginTop:5}}>
                    <Left style={{marginLeft:'2%',flex:2}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}> Service Details</Text>
                    </Left>
                      
                        
                    </View>  
                    <View style={{flexDirection:'row'}}>
                    <Left style={{marginLeft:'2%'}}> 
                        <View style={{flexDirection:'column'}}>
                            <Text>Date/Time: 05 Jan 2019 / 8:00 AM - 11:00 AM</Text>
                            <Text>Stylist: Ronaldo</Text>
                        </View>
                        </Left>
                        
                      
                    </View>
                </View>
                <Grid style={{marginLeft:'1%',marginRight:'2%'}}>  
                
                <Row >
                <Col style={[style.table,{justifyContent:'flex-start'}]}><Text style={{fontSize:15,fontWeight:'bold'}}>Service</Text></Col>
                <Col style={style.table}><Text style={{fontSize:15,fontWeight:'bold'}}>Duration</Text></Col>
                <Col style={style.table}><Text style={{fontSize:15,fontWeight:'bold'}}>Price</Text></Col>
                </Row>
                <Row>
                <Col style={[style.table,{justifyContent:'flex-start'}]}><Text>Pedicure - Artwork & Gel Color</Text></Col>
                <Col style={style.table}><Text>70 min</Text></Col>
                <Col style={style.table}><Text>$ 50.00</Text></Col>

               </Row>
               <Row>
                <Col style={[style.table,{justifyContent:'flex-start'}]}><Text>Spa pedi- Artwork & Gel Color</Text></Col>
                <Col style={style.table}><Text>40 min</Text></Col>
                <Col style={style.table}><Text>$ 50.00</Text></Col>
                
                </Row>
                <Row>
                <Col style={[style.table,{justifyContent:'flex-start'}]}><Text>Reguler Pedicure - Artwork</Text></Col>
                <Col style={style.table}><Text>40 min</Text></Col>
                <Col style={style.table}><Text>$ 50.00</Text></Col>
                
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
                        <Text style={{fontSize:22}}>Total: </Text>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>$ 150.00</Text>
                        
                        </View>
                        </Right>
                 </View> 
                        
                    
               <View>
               <Modal isVisible={this.state.isModalVisible} 
               onBackButtonPress={() => this.setState({ isModalVisible: false })}>
                    <View style={{ flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'white',width:'100%',height:250}}>
                    
                    <View style={{flexDirection:'row',width:'90%'}}>
                   <Left></Left>
                        <Body><Text style={{fontSize:25,fontWeight:'bold'}}>Add Tip</Text></Body>
                        <Right><Ic name='close' size={35} onPress={this._toggleModal}></Ic></Right>
                   
                      
                    </View>  
                    <View style={{flexDirection:'column',width:'90%'}}>
                        <Text style={{fontSize:20,marginTop:20}}>Amount:</Text> 
                        <View style={{justifyContent:'center',
                        alignItems:'center',
                        height:40,width:'100%',borderRadius:2,
                        borderColor:'#eee',
                        borderWidth:1}}>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#1565c0'}}>$ 27.00</Text></View>
                         <View style={{justifyContent:'center',
                        alignItems:'center',marginTop:'2%',flexDirection:'row'}}>
                             <Button style={{borderRadius:2,borderColor:'blue',backgroundColor:'white',justifyContent:'center',
                        alignItems:'center',flexDirection:'row',borderWidth:1,width:'23%'}}><Text style={{color:'blue',fontSize:15}}>15 %</Text></Button>
                         <Button style={{borderRadius:2,borderColor:'blue',backgroundColor:'white',justifyContent:'center',
                        alignItems:'center',flexDirection:'row',borderWidth:1,width:'23%',marginLeft:'2%',backgroundColor:'#1565c0'}}><Text style={{color:'white',fontSize:15}}>18 %</Text></Button>
                        <Button style={{borderRadius:2,borderColor:'blue',backgroundColor:'white',justifyContent:'center',
                        alignItems:'center',flexDirection:'row',borderWidth:1,width:'23%',marginLeft:'2%'}}><Text style={{color:'blue',fontSize:15}}>20 %</Text></Button>
                        <Button style={{borderRadius:2,borderColor:'blue',backgroundColor:'white',justifyContent:'center',
                        alignItems:'center',flexDirection:'row',borderWidth:1,width:'23%',marginLeft:'2%'}}><Text style={{color:'blue',fontSize:15}}>25 %</Text></Button>
                         </View>
                    </View>
                   
                    <View style={{flexDirection:'row',marginTop:10}} >
                    <TouchableOpacity onPress={this._toggleModal}>
                       <View style={{width:110,borderRadius:3,height:50,marginRight:10,
                        backgroundColor:'white',borderWidth:1,
                        borderColor:'blue',justifyContent:"center",flexDirection:'row',alignItems:"center"
                        }}>
                       <Text style={{color:'blue',fontWeight:'bold',fontSize:20}}>Cancel</Text>
                       </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity  >
                       <View style={{width:110,borderRadius:3,height:50,marginLeft:10,
                        backgroundColor:'blue',borderWidth:1,
                        borderColor:'blue',justifyContent:"center",flexDirection:'row',alignItems:"center"
                        }} >
                       <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Next</Text>
                       </View>
                        
                    </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
               </View>
             </Content>
               
             
                  <View style={{ paddingHorizontal: "5%",justifyContent: 'center',marginTop:'1%',flexDirection:'row',marginBottom:20,height:50}}>
                <Button  style={{width:'50%',borderRadius:3,justifyContent:'flex-end',alignItems:'center',flexDirection:'column'}} onPress={this._toggleModal}>
                  <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Next</Text>
                </Button>
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