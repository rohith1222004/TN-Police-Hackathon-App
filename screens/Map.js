import { StyleSheet, Text, View,Image} from 'react-native';
import React,{useState} from 'react';
import MapView ,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import NavBar from './components/NavBar';

export default function App() {
  const [originMarker,setOriginMarker] = useState({
    latitude:10.939,
    longitude: 76.955
  })
  return (
    <View style={styles.container}>
      <NavBar/>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} > 
          <Marker coordinate={originMarker} pinColor = 'red'/>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30364A',
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex:-1
  },

});
