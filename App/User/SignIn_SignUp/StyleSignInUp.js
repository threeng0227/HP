import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    },
    ImgTitle: {
      alignItems: "center",
      marginVertical: "5%"
    },
    FormLogin: {
      width: 320,
      paddingRight: "3%"
    },
    btnForgot: {
      alignSelf: "flex-end",
      marginRight: "12%"
    },
    SignIn: {
      width: 320,
      paddingHorizontal: "3%"
      //paddingVertical: "3%"
    },
    btnSignIn: {
      borderRadius: 6
    },
    btnTextSignIn:{ color: "white", fontSize: 16 },
    SignInWith: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    Divide: { width: 90, borderWidth: 0.5, borderColor: "#d9d9d9" },
    TextDivide: {
      fontSize: 15,
      paddingHorizontal: "3%",
      color: "#d9d9d9"
    },
    btnTextSignUp: {
      borderBottomColor: "#cde8f6",
      borderBottomWidth: 1,
      color: "#1cb3c8",
      marginLeft: "5%"
    },
    fontSizeInPut :{
        fontSize : 15
    }

  });