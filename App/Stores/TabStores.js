import React, { Component } from "react";
import {
  Tabs,
  Container,
  Left,
  Right,
  Body,
  Button,
  Tab,
  Header,
  ScrollableTab
} from "native-base";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import HomeStore from "./HomeStore";
import Manicure from "./Manicure";
import Pedicure from "./Pedicure";
import Ic from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import IcAwe5 from "react-native-vector-icons/FontAwesome5";

const TabStyle = StyleSheet.create({
  subTab: {
    backgroundColor: "white",
    maxWidth: 150,
    maxHeight: 38
  },
  SubTabActive: {
    backgroundColor: "blue",
    borderRadius: 60,
    maxWidth: 150,
    maxHeight: 38
  },

  SubTabTextActive: { color: "#fff", fontWeight: "normal" }
});
export default class TabStores extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <View style={{ justifyContent: "center" }}>
              <Button
                transparent
                style={{ justifyContent: "center" }}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <IcAwe5 size={20} name="chevron-left" />
              </Button>
            </View>
          </Left>
          <Body
            style={{ justifyContent: "center", alignItems: "center", flex: 4 }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Stores</Text>
          </Body>
          <Right
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Text>
              <Ic name="bell" size={20} />
            </Text>

            <TouchableOpacity
              style={{ paddingLeft: "25%" }}
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            >
              <Ionicons name="md-menu" size={25} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Tabs
          underlineStyle={{ borderBottomWidth: 0 }}
          tabBarBackgroundColor="white"
          renderTabBar={() => <ScrollableTab />}
        >
          <Tab
            heading="Home"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          >
            <HomeStore />
          </Tab>
          <Tab
            heading="Manicure"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          >
            <Pedicure pedicure = {this.props.navigation} />

          </Tab>
          <Tab
            heading="Pedicure"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          >
            <Pedicure />
          </Tab>
          <Tab
            heading="Geil Nails"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          />
          <Tab
            heading="Products"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          />
          <Tab
            heading="Extra"
            tabStyle={TabStyle.subTab}
            textStyle={{ color: "black" }}
            activeTabStyle={TabStyle.SubTabActive}
            activeTextStyle={TabStyle.SubTabTextActive}
          />
        </Tabs>
      </Container>
    );
  }
}