import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import {
  Header,
  Content,
  Title,
  Input,
  Item,
  Container,
  Form,
  Label,
  Button,
  Grid,
  Row,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./StyleSignInUp";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome5";
const styleSUp = StyleSheet.create({
  Icon: {
    fontSize: 6,
    color: "red",
    position: "absolute",
    top: "9%"
  },
  FormSignUp: {
    width: "95%",
    height: "60%",
    justifyContent: "space-around"
  },
  GridYourName: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPass: "",
      message: "",
      ValidEmail :false
    };
  }

 PostRegister =  () => {
    if (this.state.Password != this.state.ConfirmPass) {
      Alert.alert("Password not same!!");
    }
    else  if (this.state.Password === this.state.ConfirmPass) {
      let url = "https://hp-api-dev.azurewebsites.net/api/Users";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          FirstName:this.state.FirstName,
          LastName : this.state.LastName,
          Email : this.state.Email,
          Password : this.state.Password,
          CityId : 1,
          StateId : 1,
          Status : 1

        }),
        headers:{
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(resjson => {
            this._ResetForm(resjson.code);
            this.props.navigation.navigate("SUpSuccess");
            
        })
        .catch(error =>  console.log(error)); 
   
    } 
    
  };
  _ResetForm = (resjson) =>{
    if(resjson ==1 ){
    this.setState({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPass: "",
    });
    Alert.alert('Success');
    
  }
  else if(resjson >= 2 && resjson<=4){
    Alert.alert('Fail');
  }
  }
  _FormRegister = (text, type) => {
    var typeEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (type === "firstname") {
      this.setState({
        FirstName: text
      });
    } else if (type === "lastname") {
      this.setState({
        LastName: text
      });
    } else if (type === "email") {
      this.setState({Email:text})
      if(!typeEmail.test(this.state.Email)){
        this.setState({
          ValidEmail : false
        });
    }else{
      this.setState({
        ValidEmail : true
      });
    }
    } else if (type === "password") {
      this.setState({
        Password : text
      });
      }
    else if (type === "confirmPass") {
      this.setState({
        ConfirmPass: text
      });
    }
  };
  showBtnLogin = (...value)=>{
    var count = 0;
      for(let i=0;i<value.length;i++){
        if(value[i] != "" ){
         count = count+1;
        }
      }
      if(count == 5 && this.state.ValidEmail != false){
        return false;
      }
      else
        return true; 
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
                <Text>
                  <Icons size={20} name="chevron-left" />
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
          </Body>
        </Header>
        <Content padder>
          <Title style={{ color: "black", marginBottom: "7%" }}>
            Create an account
          </Title>
          <Form style={styleSUp.FormSignUp}>
            <Grid style={styleSUp.GridYourName}>
              <Row>
                <Item stackedLabel style={{ width: "90%" }}>
                  <Label>Your Name</Label>
                  <Icon
                    name="asterisk"
                    style={[
                      styleSUp.Icon,
                      {
                        left: "58%"
                      }
                    ]}
                  />
                  <Input
                    placeholder="First Name"
                    placeholderTextColor={"#d9d9d9"}
                    style={styles.fontSizeInPut}
                    onChangeText={text => this._FormRegister(text, "firstname")}
                    value={this.state.FirstName}
                  />
                </Item>
              </Row>
              <Row>
                <Item stackedLabel style={[{ width: "90%" }]}>
                  <Label />
                  <Input
                    placeholder="Last Name"
                    placeholderTextColor={"#d9d9d9"}
                    style={styles.fontSizeInPut}
                    onChangeText={text => this._FormRegister(text, "lastname")}
                    value={this.state.LastName}
                  />
                </Item>
              </Row>
            </Grid>
            <Item stackedLabel  >
              <Label>Email Address</Label>
              <Icon
                name="asterisk"
                style={[
                  styleSUp.Icon,
                  {
                    left: "35%"
                  }
                ]}
              />
              <Input
                textContentType="emailAddress"
                style={[styles.fontSizeInPut]}
                onChangeText={text => this._FormRegister(text, "email")}
                value={this.state.Email}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Icon
                name="asterisk"
                style={[
                  styleSUp.Icon,
                  {
                    left: "25%"
                  }
                ]}
              />
              <Input
                textContentType="password"
                secureTextEntry={true}
                onChangeText={text => this._FormRegister(text, "password")}
                value={this.state.Password}
              />
            </Item>
            <Item stackedLabel>
              <Icon
                name="asterisk"
                style={[
                  {
                    left: "45%"
                  },
                  styleSUp.Icon
                ]}
              />
              <Label>Confirm Password</Label>
              <Input
                textContentType="password"
                secureTextEntry={true}
                onChangeText={text => this._FormRegister(text, "confirmPass")}
                value={this.state.ConfirmPass}
              />
            </Item>
          </Form>
          <View style={{ paddingHorizontal: "5%", marginTop: 70 }}>
            <Button
             disabled= {this.showBtnLogin(this.state.Password,this.state.Email,this.state.LastName,this.state.FirstName,this.state.ConfirmPass)}
              full
              style={styles.btnSignIn}
              onPress={ this.PostRegister}
                
                
              
            >
              <Text style={styles.btnTextSignIn}>Sign Up</Text>
            </Button>
          </View>
          <View style={[styles.SignInWith, { paddingHorizontal: "20%" }]}>
            <Text>Have an account ?</Text>
            <Button
             transparent
              onPress={() => this.props.navigation.navigate("signin")}
            >
              <Text
                style={[styles.btnTextSignUp, { borderBottomColor: "white" }]}
              >
                Sign in
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
