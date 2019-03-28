import React, { Component } from "react";
import {Tabs,Container,Left,Right, Body, Button, Tab,Header,ScrollableTab,Content, List,Badge,CheckBox
} from "native-base";
import { StyleSheet,Text,View, FlatList,Image,TouchableOpacity,ActivityIndicator
} from "react-native";
import HomeStore from "./HomeStore";
import Manicure from "./Manicure";
import Pedicure from "./Pedicure";
import IconSP from "react-native-vector-icons/SimpleLineIcons";
import Ic from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import IcAwe5 from "react-native-vector-icons/FontAwesome5";
import MapView from "react-native-maps";
import * as API from '../../Appointments/API';
import { Rating } from 'react-native-ratings';
const TabStyle = StyleSheet.create({
  subTab: {
    backgroundColor: "white",
    maxWidth: 150,
    maxHeight: 38
  },
  SubTabActive: {
    backgroundColor: "#0764b0",
    borderRadius: 60,
    maxWidth: 150,
    maxHeight: 38
  },
  Container: {
    padding: 0,
    margin: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,

  },
  Search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%"
  },
  Map: { width: "96%", flex: 1},
  LayoutList: {
    width: "100%",
    flexDirection: "column",
    marginLeft:'5%'

  },
  IconHeart: { position: "absolute", right: 0, bottom: "19%" },
  IconInList: { fontSize: 20, marginRight: 15 },

  SubTabTextActive: { color: "#fff", fontWeight: "normal" }
});
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
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

export default class TabStores extends Component {
  constructor(props) {

    super(props);
    this.state ={ isLoading: true,
      dataSource:[],
      dataSourceByStore:[],
      btnbook:'none',
     id:this.props.navigation.state.params.storeid,
     name:this.props.navigation.state.params.nameStore,
     checker:false,
     isChecked: [],
     count: 0,

     }
        this.getRespone()
        
    }
    async getRespone()
  {
    
    var respone = await API.GetStoreById(this.state.id);
    var responecat = await API.GetFullAllByStoreId(this.state.id);
    this.setState({
    isLoading:false,
    dataSource:respone,
    dataSourceByStore:responecat,
    
    })
  }
  
  ListEmpty = () => {
    return (
      //View to show when list is empty
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
      </View>
    );
  };
  
 check(){
   if(this.state.checker==true)
   {
     this.setState({checker:false})
     this.setState({btnbook:'none'})
   }
   if(this.state.checker==false)
   {
     this.setState({checker:true})
     this.setState({btnbook:'flex'})
   }
 }
  
  render() {
 
    const tab =[];
    const datacategory=this.state.dataSourceByStore;
    for(let i =0;i<datacategory.length;i++){
      
      tab.push(
        <Tab key={datacategory.id}
        heading={datacategory[i].categoryName
        }
        tabStyle={TabStyle.subTab}
        textStyle={{ color: "black" }}
        activeTabStyle={TabStyle.SubTabActive}
        activeTextStyle={TabStyle.SubTabTextActive}
      >
      
        <View style={{ flex: 1 }}>
        <FlatList
          //keyExtractor={(item)=>item.id}
          style={{ flex: 1, marginTop: "5%" }}
          data={datacategory[i].service}
          
          renderItem={({ item,index}) => (
           
            <View style={Mani.container}>
              <Image source={require("./ImgStores/Pedicure.png")} />
              <View style={Mani.List}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
                <Text numberOfLines={2} style={{ paddingVertical: "3%" }}>
                  {item.description}
                </Text>
               <Text>Duration : <Text style={{fontWeight:'bold'}}> {item.duration} min</Text></Text>
                <View
                  style={[
                    Mani.container,
                    { justifyContent: "flex-start", paddingBottom: 0 }
                  ]}
                >
                <Text>Price : <Text  style={{fontWeight:'bold'}}> $ {item.price}</Text></Text> 
                  <CheckBox
                    style={{ marginLeft: "40%" }}
                 checked={this.state.checker}
                 onPress={()=>this.check()}
                  />
                </View>
              </View>
            </View>
          )}keyExtractor={(item, index) => index.toString()}
        />
        <View style={{display:this.state.btnbook,marginBottom:10}}>
        <Button 
          style={[Mani.btnBook]}
          onPress={() => {
            this.props.navigation.navigate("BookProcess1");
          }}
        >
          <Badge style={Mani.Badge}>
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              {this.state.count}
            </Text>
          </Badge>
          <IconSP name="handbag" style={Mani.IconBook} />
          <Text style={Mani.btnText}>Book Now</Text>
          <View style={[Mani.BtnDot, { bottom: "11%" }]} />
          <View style={[{ bottom: "7%" }, Mani.BtnDot]} />
        </Button>
        </View>
        
      </View>

      </Tab>
      )
    }
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
     
      <Container>
         
        <Header style={{ backgroundColor: "white" ,marginBottom:'2%'}}>
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{this.state.name}</Text>
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
             <View style={TabStyle.Container}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("./ImgStores/RoomSpa.png")}
            />
          </View>
          <View style={TabStyle.Map}>
            <MapView style={{flex:1}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>
                <View style={TabStyle.LayoutList}>
                <View >
                  <Text style={{ fontSize: 20, color: "black" }}>
                  {this.state.dataSource.storeName}
                      </Text>
                </View>
                    <View style={{alignSelf:'flex-start',marginVertical:'1%'}}>
                    <Rating type="star" readonly imageSize={15} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Icon name="phone" style={TabStyle.IconInList} size={30} />
                    
                    <Text style={{marginLeft:'-1%'}}> {this.state.dataSource.phoneNumber}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="clock" style={TabStyle.IconInList} />
                      <Text >{this.state.dataSource.open_time} - {this.state.dataSource.close_time}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:20}}>
                      <Icon name="location" style={TabStyle.IconInList} />
                      <Text>{this.state.dataSource.address}</Text>
                    </View>
                </View>     
          </View>
         
          
          </Tab>
         
       {tab}
         
        </Tabs>
      
      </Container>
    );
  }
}