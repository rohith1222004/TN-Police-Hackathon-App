import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import NavBar from './components/NavBar';
import VehicleCard from './components/VehicleCard';
import EmergencyCard from './components/EmergencyCard';
export default function App() {
  return (
    <View style={styles.container}>
      
      <NavBar/>
      <Text style={{alignSelf:'center',color:'white',fontSize:20,marginTop:20}}>Fake Number Plates</Text>
      <View style={{marginTop:20,justifyContent:'space-between',height:560}}>
        <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
        <VehicleCard/>
      </View>
      <View style={{justifyContent:'center',height:130}}>
        <EmergencyCard/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30364A',
    // backgroundColor:'red',
  },
});
