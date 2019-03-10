import React, { Component } from 'react';
import { Container, Header, Left, Button, Body, Right, Image, View, List, ListItem, Content } from 'native-base';
import { Text, TouchableOpacity, WebView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class AboutHamonyList extends Component {
    constructor(props) {
        super(props);
    }

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
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>About Harmony Page</Text>
                    </Body>
                    <Right style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                        <Text><Ic name="bell" size={20}></Ic></Text>

                        <TouchableOpacity style={{ paddingLeft: '25%' }} onPress={() => { this.props.navigation.openDrawer() }}>
                            <Ionicons name="md-menu" size={25}></Ionicons>
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Content>
                    <View>
                        <List>
                            <ListItem selected onPress={() => { this.props.navigation.navigate('AboutUs'); }}>
                                <Left>
                                    <Text>About us</Text>
                                </Left>
                                <Right>
                                    <Text><Icon name="chevron-right" size={20}></Icon></Text>
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => { this.props.navigation.navigate('ContactUs'); }}>
                                <Left>
                                    <Text>Contact Us</Text>
                                </Left>
                                <Right>
                                    <Text><Icon name="chevron-right" size={20}></Icon></Text>
                                </Right>
                            </ListItem>
                            <ListItem onPress={() => { this.props.navigation.navigate('HelpFeedback'); }}>
                                <Left>
                                    <Text>Help and Feedback</Text>
                                </Left>
                                <Right>
                                    <Text><Icon name="chevron-right" size={20}></Icon></Text>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                </Content>

            </Container>

        )
    }
}