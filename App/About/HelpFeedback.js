import React, { Component } from 'react';
import { Container, Header, Left, Button, Body, Right, Image, View, List, ListItem, Content } from 'native-base';
import { Text, TouchableOpacity, WebView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class HelpFeedback extends Component {


    render() {


        return (
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                    <Left>
                        <View style={{ justifyContent: "center" }}>
                            <Button transparent style={{ justifyContent: "center" }} onPress={() => { this.props.navigation.goBack() }}>
                                <Text ><Icon size={20} name="chevron-left"></Icon> </Text>
                            </Button>
                        </View>
                    </Left>
                    <Body style={{ justifyContent: "center", alignItems: "center", flex: 4 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Help and Feedback</Text>
                    </Body>
                    <Right style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                        <Text><Ic name="bell" size={20}></Ic></Text>

                        <TouchableOpacity style={{ paddingLeft: '25%' }} onPress={() => { this.props.navigation.openDrawer() }}>
                            <Ionicons name="md-menu" size={25}></Ionicons>
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Content contentContainerStyle={{ flex: 1, padding: 10 }}>
                  
                        <WebView
                            source={{ uri: 'http://reward.tuscript.com/test/about/help.html' }}

                        />
                  
                </Content>

            </Container>

        )
    }
}