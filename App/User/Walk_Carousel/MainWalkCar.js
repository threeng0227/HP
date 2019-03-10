import React, { Component } from "react";
import { Text, View, Dimensions,StyleSheet } from "react-native";
import Marketing from "./Marketing";
import Booking from "./Booking";
import PosSystem from "./PosSystem";
import ReportManager from "./ReportManager";
import Carousel from "react-native-looped-carousel";
import { Button } from "native-base";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    btnSkip :{ marginHorizontal: "8%", borderTopWidth: 1.2 ,borderColor :'#5893d4',borderRadius : 6},
    btnSkip_Text :{
        fontSize : 16,
        color : '#5893d4',
        
    }
})
export default class MainWalkCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          style={[this.state.size, { flex: 7 }]}
          autoplay
          onAnimateNextPage={p => console.log(p)}
        >
          <Booking />
          <PosSystem />
          <Marketing />
          <ReportManager />
        </Carousel>
        <View style={{ flex: 1 }}>
          <Button
            bordered
            info
            full
            style={styles.btnSkip}
            onPress={()=>this.props.navigation.navigate('signin')}
          >
            <Text style={styles.btnSkip_Text} >Skip</Text>
          </Button>
        </View>
      </View>
    );
  }
}
