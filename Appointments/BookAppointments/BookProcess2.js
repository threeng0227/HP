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
      _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    _toggleAlert = () =>
    this.setState({ isModalAlert: !this.state.isModalAlert },
       
      this.setState ({backboder:this.state.boder} ) ,
      this.setState ({width:1} ) 
        );
     _toggleAlertBack=()=>
        this.setState({ isModalAlert: !this.state.isModalAlert },
       
            this.setState ({backboder:this.state.backboder} ) ,
            this.setState ({width:0} ) 
      );
     _bookactive=()=>{
        this.setState ({boderactive:'blue'} ) ,
            this.setState ({widthactive:1} ) 
     }

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
                   <Image style={{width:'100%'}} source={require('../images/processbook2.jpg')}></Image>
             </View>
             <View style={{marginTop:10,marginBottom:10}}> 
                <Grid style={{marginLeft:'1%',marginRight:'1%'}}>  
                    
                    <Row >
                        <Col style={[style.table,{borderRightWidth:0,backgroundColor:'#5d4037',flexDirection:'column',alignItems:'center'}]}>
                        
                        <Text style={{color:'white'}}>Today</Text>
                        <Text style={{color:'white'}}>01/03/19</Text>
                        </Col>
                        
                        <Col style={[style.table,{borderRightWidth:0,justifyContent:'flex-start',backgroundColor:'#5d4037'}]}>
                        <TouchableOpacity style={{width:'100%'}} onPress={this._toggleModal}>
                            <View  style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>
                            <Image source={require('../images/stylistlike.png')} style={{resizeMode:'stretch'}}>
                            
                            </Image>
                            
                            <Text style={{color:'white'}}>Ronaldo</Text>
                            
                            <Right >
                            <Ic name="sort-down" color="white"></Ic>
                        </Right>
                        </View>
                        
                        </TouchableOpacity>
                        </Col>
                        
                        <Col style={[style.table,{borderRightWidth:0,backgroundColor:'#5d4037',flexDirection:'column',alignItems:'center'}]}>
                        <Text style={{color:'white'}}>Next Available</Text>
                        </Col>
                       
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0,}]}>
                             <Text style={{fontWeight:'bold',color:'black'}}>8:00 AM</Text>
                        </Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}>
                        <TouchableOpacity style={{width:'100%',height:'100%',borderColor:this.state.backboder,borderWidth:this.state.width}} onPress={this._toggleAlert}><Text></Text>
                        </TouchableOpacity></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text >8:15 AM</Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text >8:30 AM</Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0,backgroundColor:"#eee"}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text >8:45 AM</Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0,backgroundColor:"#eee"}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}>
                                 <Text style={{fontWeight:'bold',color:'black'}}>9:00 AM</Text>    
                        </Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}>
                        <TouchableOpacity style={{width:'100%',height:'100%',borderColor:this.state.boderactive,borderWidth:this.state.widthactive}}
                         onPress={this. _bookactive} >
                        <Text></Text>
                        </TouchableOpacity>
                        </Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 9:15 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 9:30 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 9:45 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text style={{fontWeight:'bold',color:'black'}}> 10:00 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 10:15 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 10:30 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>

                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text > 10:45 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0,backgroundColor:"#eee"}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                    <Row style={{height:50}}>
                        <Col style={[style.table,{borderRightWidth:0}]}><Text style={{fontWeight:'bold',color:'black'}}> 11:00 AM </Text></Col>
                        <Col  style={[style.table,{borderRightWidth:0,backgroundColor:"#eee"}]}><Text></Text></Col>
                        <Col style={[style.table]}><Text></Text></Col>
                        
                    </Row>
                   
                 </Grid>  
             </View>  
                 
               
                    
               
                   {/*  Modal List stylist */}
                 <Modal isVisible={this.state.isModalVisible} 
               onBackButtonPress={() => this.setState({ isModalVisible: false })}>
                    <Container style={{ flexDirection:'column',backgroundColor:'white'}}>
                    <Header style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Employees list</Text> 
                    </View> 
                    </Header>
                   <Content>
                   <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <TouchableOpacity onPress={this._toggleModal} style={{width:"100%"}}>
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/Ronaldolike.jpg')}>
                            </Image>
                            <Text style={{fontSize:20}}>Ronaldo</Text> 
                           <Right style={{marginRight:'2%'}}>
                               <Icon name="check" color='blue' size={25}></Icon>
                           </Right>
                        </View>
                            
                        </TouchableOpacity>
                   
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/MessiLike.png')}>
                            </Image>
                            <Text style={{fontSize:20}}>Lionel Messi</Text> 
                           <Right style={{marginRight:'2%'}}>
                             
                           </Right>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/RonaldoList.png')}>
                            </Image>
                            <Text style={{fontSize:20}}>Wayne Rooney</Text> 
                           <Right style={{marginRight:'2%'}}>
                             
                           </Right>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/RoneyList.jpg')}>
                            </Image>
                            <Text style={{fontSize:20}}>Lukaku</Text> 
                           <Right style={{marginRight:'2%'}}>
                             
                           </Right>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/RonaldoList.png')}>
                            </Image>
                            <Text style={{fontSize:20}}>Icer Casilass</Text> 
                           <Right style={{marginRight:'2%'}}>
                             
                           </Right>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,width:"100%",marginBottom:10}} >
                        <View style={{width:'100%',height:60,paddingLeft:10,
                            backgroundColor:'white',borderBottomWidth:1,
                            borderColor:'#eee',justifyContent:"center",flexDirection:'row',alignItems:"center"
                            }}>
                            
                            <Image source={require('../images/RonaldoList.png')}>
                            </Image>
                            <Text style={{fontSize:20}}>Benzema</Text> 
                           <Right style={{marginRight:'2%'}}>
                             
                           </Right>
                        </View>
                    </View>
                    
                            </Content>
                 </Container>
                </Modal>
                {/* ModalAlert */}
                <Modal isVisible={this.state.isModalAlert} 
                 onBackButtonPress={() => this.setState({ isModalAlert: false })}
               >
                    <View style={{ flexDirection:'column',justifyContent:"center",alignItems:'center',backgroundColor:'white',width:'100%',height:300}}>
                    
                    <View style={{justifyContent:"center",flexDirection:'column',width:'90%', alignItems:"center"}}>
                    <Right><TouchableOpacity style={{marginLeft:'90%',marginTop:'-20%'}} onPress={this._toggleAlertBack}><Ic name='close' size={35}></Ic></TouchableOpacity></Right>
                    <Text style={{fontSize:32}}>Oops !</Text>
                    <Ic name='warning' color='red' size={40}></Ic>
                    <Text>
                                The time rang you selected is not available
                            </Text>
                            <Text >
                            Do you want to edit service list?
                            </Text>   
                    </View>         
                    <View style={{flexDirection:'row',marginTop:10}} >
                    <TouchableOpacity onPress={this._toggleAlertBack}>
                       <View style={{width:110,borderRadius:3,height:50,marginRight:10,
                        backgroundColor:'white',borderWidth:1,
                        borderColor:'blue',justifyContent:"center",flexDirection:'row',alignItems:"center"
                        }}>
                       <Text style={{color:'blue',fontWeight:'bold',fontSize:20}}>No</Text>
                       </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity  >
                       <View style={{width:110,borderRadius:3,height:50,marginLeft:10,
                        backgroundColor:'blue',borderWidth:1,
                        borderColor:'blue',justifyContent:"center",flexDirection:'row',alignItems:"center"
                        }}>
                       <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Yes</Text>
                       </View>
                        
                    </TouchableOpacity>
                    </View>
                 </View>
                </Modal>
            {/*   Modal  Calendar  */}
            <Modal isVisible={this.state.isCalendar}  >
                    <View style={{height:450}}>
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
                      onDayPress={this._toggleModalCalendar}
                        ></Calendar>
                    </View>
                   
                    
            </Modal>
           
           
             </Content>
             <View style={{ backgroundColor: "white", height: 60,  alignItems: 'center', flexDirection: "row" }}>
                   <View style={{justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                 
                       <TouchableOpacity style={{marginLeft:'10%'}}  onPress={this._toggleModalCalendar} >
                        <View style={{ width:150,borderRadius:3,height:30,
                            borderWidth:1,
                            borderColor:'gray',
                            justifyContent:"center",alignItems:'center',flexDirection:'row'}}
                          
                            >
                            <Text style={{color:'black',fontWeight:'bold'}}>3 Jan 2019</Text>
                           <Right><AntIcon name='calendar' color="blue" size={25}></AntIcon></Right> 
                        </View>
                       </TouchableOpacity>
                   
                    <Right style={{marginRight:'10%'}} >
                    <Button style={{ width:110,borderRadius:3,height:50,
                            borderWidth:1,
                            borderColor:'blue',
                            justifyContent:"center",
                            
                           }} onPress={()=>{this.props.navigation.navigate('BookProcess3')}}>
                        <Text style={{ color: "white", fontSize: 20 }} >Next</Text>
                    </Button>
                    </Right>
                    
                   </View>
                    
                </View>
               
        </Container>
            
        )
    }
}
const style = StyleSheet.create({
    table:{justifyContent:'center',
    flexDirection:"row",alignItems:'center',
    borderWidth:1,borderColor:'gray'}
})