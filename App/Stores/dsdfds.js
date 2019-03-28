import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image,TouchableOpacity,Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Input, Container,Left,Right,Header,Body,Button, Content } from "native-base";
import Icon from "react-native-vector-icons/Entypo";
import Ic from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';
import IcAwe5 from'react-native-vector-icons/FontAwesome5';
const Harmony = [
  {
    title: "Harmony Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave , New York , NY 100019 , USA"
  },
  {
    title: "Happy Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave , New York , NY 100019,USA"
  },
  {
    title: "Woderful Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave , New York , NY 100019,USA"
  }
];
const Store = StyleSheet.create({
  Container: {
    padding: 0,
    margin: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  Search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%"
  },
  Map: {width: "100%", flex: 0.8 },
  LayoutList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  IconHeart: { position: "absolute", right: 0, bottom: "19%" },
  IconInList: { fontSize: 20, marginRight: 12 }
});
export default class MainSsdstore extends Component {
  constructor() {
    super();
    this.state = {
      Data: Harmony,
      isColor: [],
      like :[]
    };
  }
  componentWillMount(){
    let Data = this.state.Data;
    let like = this.state.like;
    let initiallike = Data.map(x=>false);
    this.setState({like:initiallike});
  }
  Like = (index) => {
    let like = [...this.state.like];
    like[index] = !like[index]; 
    this.setState({like});
  };
  render() {
    let Data = this.state.Data;
    let like = this.state.like;
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
       
        <View style={Store.Container}>
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
          
          <FlatList
            style={{ width: "96%", flex: 
          3 }}
            data={this.state.Data}
            renderItem={({ item,index }) => (
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabStores')}}>
              <View style={Store.LayoutList}>
             

              
                <View style={{ marginTop: "4%" }}>
                  <Image
                    source={require("./ImgStores/ImgList.png")}
                    resizeMode={"contain"}
                  />
                  <Text style={{ fontSize: 18, color: "black" }}>
                    {item.title}
                  </Text>
                  <View style={{alignSelf:'flex-start',marginVertical:'1%'}}>
                  <Rating type="star" readonly imageSize={15} />
                  </View>
                  <View style={[Store.Search,{paddingHorizontal:0}]}>
                    <Icon name="clock" style={Store.IconInList} />
                    <Text >{item.time}</Text>
                  </View>
                  <View style={[Store.Search,{paddingHorizontal:0}]}>
                    <Icon name="location" style={Store.IconInList} />
                    <Text>{item.address}</Text>
                  </View>
                </View>
                <View style={Store.IconHeart}>
                  
                  <Icon
                    name="heart"
                    style={[like[index] ?{color:'red'} :{color:'black'} , { fontSize: 30 }]}
                    onPress={() => alert(like[index])}
                  />
                </View>
                
              </View>
              </TouchableOpacity>
            )}
          />
              
        </View>
  
      </Container>
    );
  }
}