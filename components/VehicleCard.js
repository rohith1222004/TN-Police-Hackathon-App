import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';

export default function VehicleCard() {
  return (
    <View style={{alignSelf:'center'}}>
    <View style={styles.container}>
      <View style={{height:100,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{margin:25}}>
           <Image style={{width:50,height:50}} source={require('../assets/car.png')}/>
          </View>
          <View>
            <Text style={{fontSize:20,fontWeight:'600'}}>TN 29 AD 9845</Text>
            <Text style={{fontSize:15,fontWeight:'500',alignSelf:'center'}}>TATA Nano</Text>
          </View>
      </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#30364A',
    backgroundColor:'white',
    // marginTop:20,
    height:100,
    width:Dimensions.get('window').width - 40,
    borderRadius:10
  },
});
