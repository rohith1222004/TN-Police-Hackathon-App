import { StyleSheet, Text, View,Image, Dimensions} from 'react-native';
import React,{useState} from 'react';
import MapView ,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import NavBar from './components/NavBar';
import VehicleCard from './components/VehicleCard';
import EmergencyCard from './components/EmergencyCard';

export default function App() {
  const [originMarker,setOriginMarker] = useState({
    latitude:10.939,
    longitude: 76.955
  })
  const [mapRegion, setmapRegion] = useState({
    latitude:originMarker.latitude,
    longitude:originMarker.longitude,
    latitudeDelta: 0,
    longitudeDelta: 0.002,
  });
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#30364A',height:250}}>
        <NavBar/>
        <VehicleCard/>
      </View>
      <View style={{height:520}}>
              {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={mapRegion``}> 
          <Marker coordinate={originMarker} pinColor = 'red'/>
      </MapView> */}
      </View>
      <View style={{backgroundColor:"#30364A",height:100,justifyContent:'center'}}>
        <EmergencyCard/>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex:-1
  },

});
