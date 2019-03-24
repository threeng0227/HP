import React, { Component } from "react";
import { Text, View, Image, StyleSheet, CheckBox, Alert } from "react-native";
import {
  Container,
  Left,
  Body,
  Header,
  Form,
  Item,
  Input,
  Button,
  Title,
  Content
} from "native-base";
import Modal from "react-native-modal";
import styles from "./StyleSignInUp";
import Icon from "react-native-vector-icons/FontAwesome5";
//Modal : Terms & Conditions
const styleTerms = StyleSheet.create({
  Text: {
    textAlign: "center",
    paddingHorizontal: "6%",
    lineHeight: 22
  },
  ButTon: { borderRadius: 6 },
  error: { borderColor: "red" }
});

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      isChecked: false,
      flat: true,
      Email: "",
      Password: "",
      ValidEmail: true,
      ValidPassWord: true
    };
  }
  ShowModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  };
  CloseModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  };

  // Handle Checkbox
  Checked = () => {
    this.setState({ isChecked: !this.state.isChecked, flat: !this.state.flat });
  };

Submit_Form_Login = async () =>{
  let respone = await fetch('http://192.168.0.108:81/api/Users/login',{
      method : 'POST',
      headers :{"Content-Type": "application/json"},
      body :JSON.stringify({
          Email : this.state.Email,
          Password : this.state.Password
      })
  });
  let resJson = await respone.json();
  if(resJson.code ==1){
    let accessToken = resJson.data;
    Alert.alert(resJson.message);
  }
  else{
    Alert.alert(resJson.message);
  }
}

  //Handle Form Login
  Handle_Field_Form = (text, type) => {
    var typeEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (type === "email") {
      this.setState({ Email: text });
      if (typeEmail.test(this.state.Email)) {
        this.setState({
          ValidEmail: true
        });
      } else {
        this.setState({
          ValidEmail: false
        });
      }
    } else if (type === "password") {
      this.setState({
        Password: text
      });
      if (text != "" && text.length >= 5) {
        this.setState({
          ValidPassWord: true
        });
      } else {
        this.setState({
          ValidPassWord: false
        });
      }
    }
  };

  //Show button login check conditon
  ShowBtnSignIn = (...value) => {
    var count = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] != "") {
        count = count + 1;
      }
    }
    if (count == value.length && this.state.ValidEmail) {
      return false;
    } else return true;
  };
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
                <Text>
                  <Icon size={20} name="chevron-left" />
                </Text>
              </Button>
            </View>
          </Left>
          <Body
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 2,
              marginLeft: "-10%"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Text>
          </Body>
        </Header>
        <Content>
          <View style={styles.container}>
            <View style={styles.ImgTitle}>
              <Image source={require("./imgSignUp/Group3127.png")} />
              <Image source={require("./imgSignUp/Group3128.png")} />
            </View>
            <Form style={styles.FormLogin}>
              <Item
                style={[
                  { marginBottom: 20 },
                  !this.state.ValidEmail ? styleTerms.error : null
                ]}
              >
                <Input
                  placeholder="Phone Number"
                  placeholderTextColor={"#d9d9d9"}
                  //textContentType={"telephoneNumber"}
                  style={{ fontSize: 15 }}
                  onChangeText={text => this.Handle_Field_Form(text, "email")}
                  value={this.state.Email}
                />
              </Item>
              <Item style={!this.state.ValidPassWord ? styleTerms.error : null}>
                <Input
                  placeholder="Password"
                  placeholderTextColor={"#d9d9d9"}
                  textContentType={"password"}
                  secureTextEntry={true}
                  style={styles.fontSizeInPut}
                  onChangeText={text => this.Handle_Field_Form(text, "password")}
                  value={this.state.Password}
                />
              </Item>
            </Form>
            <View style={styles.btnForgot}>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate("ForgotPass");
                }}
              >
                <Text style={{ color: "#1cb3c8", fontSize: 15 }}>
                  Forgot Password?
                </Text>
              </Button>
            </View>
            <View style={styles.SignIn}>
              <Button
                full
                style={styles.btnSignIn}
                disabled={this.ShowBtnSignIn(
                  this.state.Email,
                  this.state.Password
                )}
                onPress={this.Submit_Form_Login
                //   () => {
                //   this.props.navigation.navigate("SetupPinOrBiometric");
                // }
              }
              >
                <Text style={styles.btnTextSignIn}>Sign In</Text>
              </Button>
            </View>

            {/*Modal start trang 140 */}
            <Modal
              style={{ marginVertical: "8%", flex: 1 }}
              isVisible={this.state.openModal}
            >
              <View
                style={[
                  styles.container,
                  { flex: 1, backgroundColor: "white" }
                ]}
              >
                <Title style={styles.Title}>Terms Conditions</Title>
                <Text numberOfLines={6} style={styleTerms.Text}>
                  1. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text numberOfLines={2} style={styleTerms.Text}>
                  2. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Text numberOfLines={4} style={styleTerms.Text}>
                  3. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release o
                </Text>
                <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
                  <CheckBox
                    value={this.state.isChecked}
                    onChange={this.Checked}
                  />
                  <Text style={{ marginTop: "2%" }}>
                    I accept the terms and conditions
                  </Text>
                </View>
                <View style={[styles.SignInWith, { width: "100%" }]}>
                  <Button
                    style={{ width: "40%" }}
                    full
                    bordered
                    onPress={this.CloseModal}
                  >
                    <Text style={{ fontSize: 15, color: "#1cb3c8" }}>
                      Cancel
                    </Text>
                  </Button>
                  <Button
                    disabled={this.state.flat}
                    full
                    style={{ width: "40%" }}
                    onPress={() => {
                      this.setState({ openModal: false }),
                        this.props.navigation.navigate("signup");
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "white" }}>
                      Confirm
                    </Text>
                  </Button>
                </View>
              </View>
            </Modal>
            {/*Modal end trang 140 */}

            <View style={[styles.SignInWith, { marginTop: "10%" }]}>
              <View style={styles.Divide} />
              <Text style={styles.TextDivide}>Or sign in with</Text>
              <View style={styles.Divide} />
            </View>
            <View style={[styles.SignInWith, { width: 300 }]}>
              <Button transparent>
                <Image source={require("./imgSignUp/facebook.png")} />
              </Button>
              <Button transparent>
                <Image source={require("./imgSignUp/twitter.png")} />
              </Button>
              <Button transparent>
                <Image source={require("./imgSignUp/Gmail1.png")} />
              </Button>
            </View>
            <View style={[styles.SignInWith, { width: 300 }]}>
              <Text>Don't have an account?</Text>
              <Button transparent onPress={this.ShowModal}>
                <Text style={styles.btnTextSignUp}>Sign Up</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
