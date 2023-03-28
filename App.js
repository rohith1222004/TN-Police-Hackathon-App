import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import NavBar from './components/NavBar';
import VehicleCard from './components/VehicleCard';
import EmergencyCard from './components/EmergencyCard';


export default function App() {
  return (
    <View style={styles.container}>
     <NavBar/>
     <VehicleCard />
     <View style={{width:Dimensions.get('window').width-20,height:250,backgroundColor:'white',alignSelf:'center',borderRadius:15,marginTop:20}}>
        <Image style={{width:350,height:230,alignSelf:'center',alignContent:'center',borderRadius:10,marginTop:10}} source={require('./assets/CarLiveTracking.png')} />
     </View>
     <View style={{width:Dimensions.get('window').width,height:250,backgroundColor:'white',marginTop:20}}>
     </View>
     <View style={{marginTop:20}}>
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
