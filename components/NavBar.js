import { Dimensions, StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';

export default function NavBar() {
  return (
    <View style={styles.container}>
   
      <View  style={{ flexDirection:'row',justifyContent:'space-between',marginRight:15,marginLeft:15,alignItems:'center',height:Dimensions.get('window').height - 500}}>
        <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>F3 POLICE STATION</Text>
          <Text style={{color:'white',fontSize:17}}>Valluvar Kottam, Chennai</Text>
        </View>
        <View>
          <Image style={{width:33,height:33}} source={require('../assets/settings.png')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#30364A',
    // backgroundColor:'red',
    marginTop:20,
    height:Dimensions.get('window').height - 500
  },
});
