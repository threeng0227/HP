import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Title } from 'native-base';
import styles from './StyleSheetOfWalk';
export default class ReportManager extends Component {
  render() {
    return (
      <View style={styles.container}>
        
            <Title style={styles.TiTle}>Report And Manager</Title>
            <Image source={require('./Img_Walk_caraousel/report.png')}  style={styles.imgBG} />
            <Text numberOfLines={3} style={styles.TextContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
        
      </View>
    )
  }
}
