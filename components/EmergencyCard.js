import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';

export default function EmergencyCard() {
  return (
    <View style={{alignSelf:'center'}}>
    <View style={styles.container}>
      <View style={{height:70,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Emergency</Text>
      </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#30364A',
    backgroundColor:'red',
    // marginTop:20,
    height:70,
    width:Dimensions.get('window').width - 40,
    borderRadius:10
  },
});
