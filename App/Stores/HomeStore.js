import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Entypo";

const Harmony = [
    {
      title: "Harmony Spa",
      phone : "1-800-123-4567",
      time: "08:00 AM - 18:00 PM",
      address: "700 5th Ave ,New York,NY 100019,USA"
    },
    {
      title: "Happy Spa",
      phone : "1-800-123-4567",
      time: "08:00 AM - 18:00 PM",
      address: "700 5th Ave ,New York,NY 100019,USA"
    },
    {
      title: "Woderful Spa",
      phone : "1-800-123-4567",
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
    flex: 1,
    marginTop:'5%'
  },
  Search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%"
  },
  Map: { width: "96%", flex: 1.5 },
  LayoutList: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  IconHeart: { position: "absolute", right: 0, bottom: "19%" },
  IconInList: { fontSize: 20, marginRight: 15 }
});
export default class HomeStore extends Component {
  constructor() {
    super();
    this.state = {
      Data: Harmony,
    };
  }
  render() {
    return (
        <View style={Store.Container}>
          <View style={[Store.LayoutList, { flex: 1 }]}>
            <Image
              source={require("./ImgStores/RoomSpa.png")}
            />
            
          </View>
          <View style={[Store.Map, { marginTop: "5%" }]}>
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>

          <FlatList
            style={{ width: "96%", flex: 0.5 }}
            data={this.state.Data}
            renderItem={({ item }) => (
              <View style={Store.LayoutList}>
                <View style={{ marginTop: "4%" }}>
                  <Text style={{ fontSize: 18, color: "black" }}>
                    {item.title}
                  </Text>

                  <Text>Danh gia</Text>
                  <Text>
                    <Icon name="phone" style={Store.IconInList} />
                    {item.phone}
                  </Text>
                  <Text>
                    <Icon name="clock" style={Store.IconInList} />
                    {item.time}
                  </Text>
                  <Text>
                    <Icon name="location" style={Store.IconInList} />
                    {item.address}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        
    );
  }
}
