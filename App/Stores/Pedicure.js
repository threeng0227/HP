import React, { Component } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { CheckBox, Button } from "native-base";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Mani = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20
  },
  List: {
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "56%",
    marginLeft: "5%"
  },
  btnBook: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    justifyContent: "center",
    borderRadius: 6,
    height: 50,
    backgroundColor:'#5893d4'
  },
  btnText: { color: "white", paddingHorizontal: "7%", fontSize: 17 },
  BtnDot: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#5893d4",
    right: "2.2%"
  },
  IconBook :{ fontSize: 35,color:'white',paddingHorizontal:'3%' }
});
const Harmony = [
  {
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 50.00"
  },
  {
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "70min",
    Price: "$ 70.00"
  },
  {
    title: "Spa pedi- Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  },
  {
    title: "Spa pedi- Artwork",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  },
  {
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  }
];
export default class Pedicure extends Component {
  constructor() {
    super();
    this.state = {
      Data: Harmony,
      isChecked: false,
    };
  }
  CheckProduct = () => {
    this.setState({
      isChecked: !this.state.isChecked,
      isHidden  : !this.state.isHidden
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1, marginTop: "5%" }}
          data={this.state.Data}
          renderItem={({ item }) => (
            <View style={Mani.container}>
              <Image source={require("./ImgStores/Pedicure.png")} />
              <View style={Mani.List}>
                <Text>{item.title}</Text>
                <Text numberOfLines={2} style={{ paddingVertical: "3%" }}>
                  {item.Dec}
                </Text>
                <Text>Duration : {item.Duration}</Text>
                <View
                  style={[
                    Mani.container,
                    { justifyContent: "flex-start", paddingBottom: 0 }
                  ]}
                >
                  <Text>Price : {item.Price}</Text>
                  <CheckBox
                    checked={this.state.isChecked}
                    style={{ marginLeft: "40%" }}
                    onPress={this.CheckProduct}
                  />
                </View>
              </View>
            </View>
          )}
        />
       
      </View>
    );
  }
}
