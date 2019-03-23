import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Footer,
  Button,
  Title,
  Content,
  CheckBox,
  Card,
  CardItem,
  Input
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ic from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome5";
const reload = StyleSheet.create({
  btnPrice: {
    width: 56,
    height: 40,
    justifyContent: "center",
    borderRadius: 6,
    borderColor: "#0764b0"
  },
  DisPlayMoney: {
    width: "100%",
    borderWidth: 0.5,
    textAlign: "center",
    paddingVertical: "2.5%",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 6,
    marginVertical: "2.5%",
    height: 43
  },
  LayoutPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  ColorText: {
    color: "#0764b0"
  },
  Checkbox: {
    borderRadius: 30,
    width: 26,
    height: 28
  },
  LayoutMoneySources: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  subLayout: { alignItems: "flex-start", width: "90%" },
  BtnReLoad: {
    width: 140,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#0764b0",
    height: 50
  }
});
export default class ReloadAccountStep2 extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: { backgroundColor: "#0764b0" },
      textColor: {},
      price: [],
      flat : false,
      flat1 : false
    };
  }
  
  ChoosePrice = (type, value) => {
    switch (type) {
      case "btn1": {
        this.setState({
          price: value,
        });

        
      }
      case "btn2": {
        this.setState({ price: value});
      }
      case "btn3": {
        this.setState({ price: value});
      }
      case "btn4": {
        this.setState({ price: value});
      }
      case "btn5": {
        this.setState({ price: value});
      }
    }
  };
  CheckMoney = (type) =>{
    switch (type) {
      case "chk1": {
        this.setState({
          flat: true,
        });

        
      }
      case "chk2": {
        this.setState({ flat1: true});
      }
    }
  }
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
                <Icons size={20} name="chevron-left" />
              </Button>
            </View>
          </Left>
          <Body
            style={{ justifyContent: "center", alignItems: "center", flex: 4 }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Select Account
            </Text>
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
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Title style={{ color: "black" }}>Amount :</Title>
                <Input
                  style={reload.DisPlayMoney}
                  disabled={true}
                  value={this.state.price}
                />
                <View style={reload.LayoutPrice}>
                  <Button
                    style={[reload.btnPrice]}
                    bordered
                    onPress={value => this.ChoosePrice("btn1", "$ 50")}
                  >
                    <Text style={[reload.ColorText]}>
                      $ 50
                    </Text>
                  </Button>
                  <Button
                    style={[reload.btnPrice]}
                    bordered
                    onPress={value => this.ChoosePrice("btn2", "$ 100")}
                  >
                    <Text style={reload.ColorText}>$ 100</Text>
                  </Button>
                  <Button
                    style={reload.btnPrice}
                    bordered
                    onPress={value => this.ChoosePrice("btn3", "$ 200")}
                  >
                    <Text style={reload.ColorText}>$ 200</Text>
                  </Button>
                  <Button
                    style={reload.btnPrice}
                    bordered
                    onPress={value => this.ChoosePrice("btn4", "$ 500")}
                  >
                    <Text style={reload.ColorText}>$ 500</Text>
                  </Button>
                  <Button
                    style={reload.btnPrice}
                    bordered
                    onPress={value => this.ChoosePrice("btn5", "$ 1000")}
                  >
                    <Text style={reload.ColorText}>$ 1000</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Title style={{ color: "black" }}>Money sources</Title>
                <View style={reload.LayoutMoneySources}>
                  <View
                    style={[
                      reload.LayoutPrice,
                      reload.subLayout,
                      { marginVertical: "7%" }
                    ]}
                  >
                    <CheckBox style={reload.Checkbox}  onPress={() => this.CheckMoney("chk1")} checked={this.state.flat} />
                    <Image source={require("./ImgSelectAccount/visa.png")} />
                    <Text>dfgfhgfjgfgfd33</Text>
                  </View>
                  <View style={[reload.LayoutPrice, reload.subLayout]}>
                    <CheckBox style={reload.Checkbox} onPress={() => this.CheckMoney("chk2")}  checked={this.state.flat1} />
                    <Image source={require("./ImgSelectAccount/bank.png")} />
                    <Text>dfgfhgfjgfgfd33</Text>
                  </View>
                  <View
                    style={[
                      reload.LayoutPrice,
                      reload.subLayout,
                      {
                        marginLeft: "3.2%",
                        marginTop: "4%",
                        justifyContent: "flex-start"
                      }
                    ]}
                  >
                    <Button style={reload.Checkbox}>
                      <Image source={require("./ImgSelectAccount/plus.png")} />
                    </Button>
                    <Text style={{ paddingHorizontal: "5%" }}>
                      Add Bank Account or Credit/Debit Card
                    </Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          <View style={{ alignSelf: "center", marginTop: "18%" }}>
            <Button
              style={reload.BtnReLoad}
              onPress={() => {
                this.props.navigation.navigate("TransactionSend2");
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "800" }}>

                Reload
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
