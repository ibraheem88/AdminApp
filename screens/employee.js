import React, { useState} from 'react';
import { Text, View, StyleSheet ,ImageBackground,TouchableOpacity,FlatList} from 'react-native';


export default function product ({navigation}) {
    
    const onClick=() => {
      
    }
  
    return (
      <ImageBackground style={styles.container}  source={require("../assets/images/discount.jpg")}>
        <View style={styles.section}>
        <FlatList data={[
            {key: 'Name',city: 'City'},
            {key: 'Ali',city: '   ISB'},
            {key: 'Hassan',city: 'LHR'},
            {key: 'Ahmad',city: 'ISB'},
            {key: 'Ahsan',city: 'KHI'},
        ]}
        renderItem={({item})=> <Text style={styles.item}>{item.key}        {item.city}</Text>}/>
        </View>
        </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "auto",
      width: 800,
      height: null,
      color: "white",
      fontWeight: "bold"
    },
    text:{
      marginTop: 30,
      color: "black",
      width: 250,
      fontSize: 35,
      fontWeight: "bold"

    },
    item: {
      marginTop: 30,
      fontSize: 35,
      color: 'black',
      width: 350,
      paddingLeft: 20
    },
    section: {
      paddingLeft: 20
    },
    button:{
      margin: 30,
      width:350,
      backgroundColor: "#ff781f",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.9,
      borderRadius: 5
    },
    btntext: {
      fontSize: 30,
      padding: 20,
      fontWeight: "bold",
      color: "black"
      
    },
  });