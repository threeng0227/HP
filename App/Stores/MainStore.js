import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image,TouchableOpacity,Dimensions,ActivityIndicator} from "react-native";
import MapView from "react-native-maps";
import { Input, Container,Left,Right,Header,Body,Button, Content } from "native-base";
import Icon from "react-native-vector-icons/Entypo";
import Ic from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';
import IcAwe5 from'react-native-vector-icons/FontAwesome5';
import * as API from '../../Appointments/API';

const Store = StyleSheet.create({
  Container: {
    padding: 0,
    margin: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  Search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%"
  },
  Map: {width: "100%",flex:0.5},
  LayoutList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
 
  IconInList: { fontSize: 20, marginRight: 12 }
});

export default class MainStore extends Component {
  constructor(props) {

    super(props);
    this.state ={ isLoading: true,
      dataSource:[],
      isColor: [],
      like :[],
    colorlike:'red'
      
     }
  
        this.getRespone()
    }
  async getRespone()
  {
    var respone = await API.GetAllStores();
    this.setState({
    isLoading:false,
    dataSource:respone,
   
    })
    
  }
  
  
  render() {
   
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <Container>
        
        <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><IcAwe5 size={20}  name="chevron-left"></IcAwe5></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Stores</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
          <View style={Store.Search}>
            <Input
              placeholder="Search..."
              placeholderTextColor="gray"
              style={{ fontSize: 13 }}
            />
            <Ic name="search" style={{ fontSize: 20 }} />
          </View>
          <View style={Store.Map}>
            <MapView style={{flex:1}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>
         
          <View style={{flex:1,marginTop:10,marginRight:'2%',marginLeft:'2%'}}>
          
              <FlatList
              
               data={this.state.dataSource}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({item,index})=> (
              
                <Content style={{marginBottom:10,borderWidth:1,borderColor:'#eee'}}>
                <View style={{flexDirection:'column',marginBottom:10,}}>
                    <View style={{marginBottom:5,flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"}}>
                      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabStores',{storeid:item.id,nameStore:item.storeName})}}>
                        <View style={{paddingRight:'2%'}}>
                        <Image 
                        source={require("./ImgStores/ImgList.png")}
                        resizeMode={"contain"}/>
                        </View>
                      </TouchableOpacity>
                      
                  </View>
                  <View style={{flexDirection:'row',marginLeft:'2%'}}>
                  <Left>
                  <Text style={{ fontSize: 20, color: "black" }}>
                        {item.storeName}
                      </Text>
                  </Left>
                  <Right style={{marginRight:'5%'}}>
                  <Icon
                    name="heart"
                   color={this.state.colorlike}
                   size={30}
                    /* onPress={() =>this.setState({colorlike:'red'})} */
                  />
                  </Right>
                  
                </View>
                  
                    <View style={{alignSelf:'flex-start',marginVertical:'1%',marginLeft:'2%'}}>
                    <Rating type="star" readonly imageSize={15} />
                    </View>
                    <View style={{flexDirection:'row',marginLeft:'2%'}}>
                      <Icon name="clock" style={Store.IconInList} />
                      <Text >{item.open_time} - {item.close_time}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:10,marginLeft:'2%'}}>
                      <Icon name="location" style={Store.IconInList} />
                      <Text>{item.address}</Text>
                    </View>
                 </View>
             
                </Content>     
           )}
              >
              </FlatList>   
          </View>
      </Container>
    );
  }
}







