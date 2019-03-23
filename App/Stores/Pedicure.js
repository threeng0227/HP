import React, { Component } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { CheckBox, Button, Badge } from "native-base";
import Icon from "react-native-vector-icons/SimpleLineIcons";
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
    backgroundColor: "#5893d4"
  },
  btnText: { color: "white", paddingHorizontal: "7%", fontSize: 17 },
  BtnDot: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#5893d4",
    right: "2.2%"
  },
  IconBook: { fontSize: 40, color: "white", paddingHorizontal: "3%" },
  Badge: {
    width: 24,
    height: 24,
    borderRadius: 20,
    position: "absolute",
    left: "9%",
    bottom: "18%",
    zIndex: 2000,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2
  }
});
const Harmony = [
  {
    id: 1,
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 50.00"
  },
  {
    id: 2,
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "70min",
    Price: "$ 70.00"
  },
  {
    id: 3,
    title: "Spa pedi- Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  },
  {
    id: 4,
    title: "Spa pedi- Artwork",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  },
  {
    id: 5,
    title: "Spa pedi-Artwork & Gel Color",
    Dec:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    Duration: "40min",
    Price: "$ 70.00"
  }
];

export default class Pedicure extends Component {
  constructor(props) {
    super(props);
    this.props = { pedicure: "" };
    this.state = {
      Data: Harmony,
      isChecked: [],
      count: 0
    };
  }
  componentWillMount() {
    let { Data, isChecked } = this.state;
    let initialChecked = Data.map(x => false);
    this.setState({ isChecked: initialChecked });
  }
  handleChange = index => {
    let isChecked = [...this.state.isChecked];
    isChecked[index] = !isChecked[index];
    this.setState({ isChecked });
    if (isChecked[index]) {
      this.setState({
        count: this.state.count + 1
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  render() {
    let { Data, isChecked } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          //keyExtractor={(item)=>item.id}
          style={{ flex: 1, marginTop: "5%" }}
          data={this.state.Data}
          renderItem={({ item, index }) => (
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
                    style={{ marginLeft: "40%" }}
                    onPress={() => this.handleChange(index)}
                    checked={isChecked[index]}
                  />
                </View>
              </View>
            </View>
          )}
        />
        <Button 
          style={Mani.btnBook}
          onPress={() => {
            this.props.pedicure.navigate("BookProcess1");
          }}
        >
          <Badge style={Mani.Badge}>
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              {this.state.count}
            </Text>
          </Badge>
          <Icon name="handbag" style={Mani.IconBook} />
          <Text style={Mani.btnText}>Book Now</Text>
          <View style={[Mani.BtnDot, { bottom: "11%" }]} />
          <View style={[{ bottom: "7%" }, Mani.BtnDot]} />
        </Button>
      </View>
    );
  }
}
