import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image,TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Input, Container,Left,Right,Header,Body,Button, Content } from "native-base";
import Icon from "react-native-vector-icons/Entypo";
import Ic from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';

import IcAwe5 from'react-native-vector-icons/FontAwesome5';

const Harmony = [
  {
    title: "Harmony Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave ,New York,NY 100019,USA"
  },
  {
    title: "Happy Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave ,New York,NY 100019,USA"
  },
  {
    title: "Woderful Spa",
    time: "08:00 AM - 18:00 PM",
    address: "700 5th Ave ,New York,NY 100019,USA"
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
  IconInList: { fontSize: 20, marginRight: 15 }
});
export default class MainStore extends Component {
  constructor() {
    super();
    this.state = {
      Data: Harmony,
      isColor: {}
    };
  }
  Like = () => {
    this.setState({
      isColor: { color: "red" }
    });
  };
  render() {
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
            style={{ width: "96%", flex: 3 }}
            data={this.state.Data}
            renderItem={({ item }) => (
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
                  <Text>Danh gia</Text>
                  <Text>
                    <Icon name="clock" style={Store.IconInList} />
                    {item.time}
                  </Text>
                  <Text>
                    <Icon name="location" style={Store.IconInList} />
                    {item.address}
                  </Text>
                </View>
                <View style={Store.IconHeart}>
                  <Icon
                    name="heart"
                    style={[this.state.isColor, { fontSize: 30 }]}
                    onPress={this.Like.bind(this)}
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
