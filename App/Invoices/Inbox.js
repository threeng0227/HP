import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Container, Content, List, ListItem } from "native-base";
const Invoice = StyleSheet.create({
  LayoutList: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginHorizontal: "3%",
    backgroundColor: "#ffcd46",
    borderRadius: 6,
    marginBottom: "2%"
  },
  Price: {
    width: 65,
    height: 65,
    borderRadius: 35,
    //backgroundColor: "#1cb3c8",
    justifyContent: "center",
    flex: 0.8,
    marginHorizontal: "4%"
  },
  PriceText: { color: "white", textAlign: "center", fontSize: 18 },
  ContentList: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 3,
    marginLeft: "3%"
    //marginRight:47,
  },
  Time: {
    position: "absolute",
    top: "3%",
    right: "2%",
    color: "white"
  },
  TitleList: { color: "white", fontSize: 16, marginBottom: "6%" },
  GroupList: { fontSize: 17, fontWeight: "400", color: "black" }
});
export default class Inbox extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem style={{ backgroundColor: "white" }} itemDivider>
              <Text style={Invoice.GroupList}>Today</Text>
            </ListItem>
            <ListItem style={Invoice.LayoutList}>
              <View style={Invoice.Price}>
                <Image
                  source={require("./ImgInBox/Invoice.png")}
                  resizeMode={"contain"}
                />
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Invoice</Text>
                <Text style={{ color: "white" }}>
                  Message : You request have been sent to Wiliiam{" "}
                </Text>
              </View>
              <Text style={Invoice.Time}>09:00 AM</Text>
            </ListItem>
            <ListItem
              style={[Invoice.LayoutList, { backgroundColor: "#dd5144" }]}
            >
              <View style={Invoice.Price}>
                <Image
                  source={require("./ImgInBox/RequestMoney.png")}
                  resizeMode={"contain"}
                />
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Request money</Text>
                <Text style={{ color: "white" }}>
                  Message : You request have been sent to Wiliiam{" "}
                </Text>
              </View>
              <Text style={Invoice.Time}>09:00 AM</Text>
            </ListItem>
            <ListItem
              style={[Invoice.LayoutList, { backgroundColor: "#4c8bf5" }]}
            >
              <View style={Invoice.Price}>
                <Image
                  source={require("./ImgInBox/GiftCard.png")}
                  resizeMode={"contain"}
                />
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Gift Card</Text>
                <Text style={{ color: "white" }}>
                  Message : You request have been sent to Wiliiam{" "}
                </Text>
              </View>
              <Text style={Invoice.Time}>09:00 AM</Text>
            </ListItem>
            <ListItem
              style={[Invoice.LayoutList, { backgroundColor: "#1da462" }]}
            >
              <View style={Invoice.Price}>
                <Image
                  source={require("./ImgInBox/GiftCard.png")}
                  resizeMode={"contain"}
                />
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Gift Card</Text>
                <Text style={{ color: "white" }}>
                  Message : You request have been sent to Wiliiam{" "}
                </Text>
              </View>
              <Text style={Invoice.Time}>09:00 AM</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
