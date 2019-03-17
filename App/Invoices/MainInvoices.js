import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Footer,
  Content,
  List,
  ListItem,
  Button
} from "native-base";
const Invoice = StyleSheet.create({
  LayoutList: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderWidth: 1.5,
    borderColor: "#5893d4",
    marginHorizontal: "3%",
    backgroundColor: "#defcfc",
    borderRadius: 6,
    marginBottom:'3%'
  },
  Price: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#1cb3c8",
    justifyContent: "center"
  },
  PriceText: { color: "white", textAlign: "center", fontSize: 18 },
  ContentList: {
    flexDirection: "column",
    alignItems: "flex-start"
    //marginRight:47,
  },
  BtnUnpaid: {
    marginLeft: 40
  },
  TitleList: { color: "#113f67", fontSize: 16, marginBottom: "6%" },
  BtnTextUpaid: { color: "#113f67", fontSize: 15, marginBottom: "60%" },
  GroupList: { fontSize: 17, fontWeight: "400", color: "black" },
  BtnPay: {
    position: "absolute",
    bottom: "12%",
    right: "5%",
    width: 220,
    height: 63,
    borderRadius: 6
  }
});
export default class MainInvoices extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem style={{ backgroundColor: "white" }} itemDivider>
              <Text style={Invoice.GroupList}>New Invoices</Text>
            </ListItem>
            <ListItem style={Invoice.LayoutList}>
              <View style={Invoice.Price}>
                <Text style={Invoice.PriceText}>$ 150</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Harmony Spa</Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={Invoice.BtnTextUpaid}>Unpaid</Text>
              </Button>
            </ListItem>
            <ListItem style={Invoice.LayoutList}>
              <View style={Invoice.Price}>
                <Text style={Invoice.PriceText}>$ 150</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Harmony Spa</Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={Invoice.BtnTextUpaid}>Unpaid</Text>
              </Button>
            </ListItem>
            <ListItem style={Invoice.LayoutList}>
              <View style={Invoice.Price}>
                <Text style={Invoice.PriceText}>$ 150</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={Invoice.TitleList}>Harmony Spa</Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={Invoice.BtnTextUpaid}>Unpaid</Text>
              </Button>
            </ListItem>
          </List>
          <List>
            <ListItem style={{ backgroundColor: "white" }} itemDivider last>
              <Text style={Invoice.GroupList}>History</Text>
            </ListItem>
            <ListItem
              style={[
                Invoice.LayoutList,
                { backgroundColor: "#fafafa", borderColor: "white" }
              ]}
            >
              <View style={[Invoice.Price, { backgroundColor: "#c5c5c5" }]}>
                <Text style={Invoice.PriceText}>$ 50</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={[Invoice.TitleList, { color: "black" }]}>
                  Harmony Spa
                </Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={[Invoice.BtnTextUpaid, { color: "black" }]}>
                  Paid
                </Text>
              </Button>
            </ListItem>
            <ListItem
              style={[
                Invoice.LayoutList,
                { backgroundColor: "#fafafa", borderColor: "white" }
              ]}
            >
              <View style={[Invoice.Price, { backgroundColor: "#c5c5c5" }]}>
                <Text style={Invoice.PriceText}>$ 50</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={[Invoice.TitleList, { color: "black" }]}>
                  Harmony Spa
                </Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={[Invoice.BtnTextUpaid, { color: "black" }]}>
                  Paid
                </Text>
              </Button>
            </ListItem>
            <ListItem
              style={[
                Invoice.LayoutList,
                { backgroundColor: "#fafafa", borderColor: "white" }
              ]}
            >
              <View style={[Invoice.Price, { backgroundColor: "#c5c5c5" }]}>
                <Text style={Invoice.PriceText}>$ 50</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={[Invoice.TitleList, { color: "black" }]}>
                  Harmony Spa
                </Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={[Invoice.BtnTextUpaid, { color: "black" }]}>
                  Paid
                </Text>
              </Button>
            </ListItem>
            <ListItem
              style={[
                Invoice.LayoutList,
                { backgroundColor: "#fafafa", borderColor: "white" }
              ]}
            >
              <View style={[Invoice.Price, { backgroundColor: "#c5c5c5" }]}>
                <Text style={Invoice.PriceText}>$ 50</Text>
              </View>
              <View style={Invoice.ContentList}>
                <Text style={[Invoice.TitleList, { color: "black" }]}>
                  Harmony Spa
                </Text>
                <Text>Date: 05 Jan 2019</Text>
                <Text>Time: 11:00 AM</Text>
              </View>
              <Button style={Invoice.BtnUnpaid} transparent>
                <Text style={[Invoice.BtnTextUpaid, { color: "black" }]}>
                  Paid
                </Text>
              </Button>
            </ListItem>
          </List>
        </Content>
        <Button full style={Invoice.BtnPay}>
          <Text style={[Invoice.PriceText, { paddingRight: 70, fontSize: 20 }]}>
            Pay
          </Text>
        </Button>
        <Footer />
      </Container>
    );
  }
}
