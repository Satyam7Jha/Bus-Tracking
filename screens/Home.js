import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import SendLoc from '../Server/SendLoc';




export default function Home(props) {

  //1. Getting current location---------------------------------------------------------
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 12.9037432,
    longitude: 77.5193716,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getLastKnownPositionAsync({
        accuracy: 6,
      });
      setLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);

  }
  // **************************************************************************************
  // 2 getting loc from server-----------------------------------------------------------------------

  const [isLoading, setLoading] = useState(false);
  const [busLoc, setBusLoc] = useState([]);
  console.log("GetData.js")

  console.log("Get", busLoc);

  useEffect(() => {
    fetch("https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLocation.json")
      .then((response) => response.json())
      .then((json) => setBusLoc(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(true));
  }, []);




  // let lat = busLoc.userLoc.latitude;
  // let lon = busLoc.userLoc.longitude;
  // console.log(lat, "my variable", lon)

  // ********************************************************************************************

  function markerr(isLoding) {

    if (isLoading) {
      let lat = busLoc.userLoc.latitude;
      let lon = busLoc.userLoc.longitude;
      console.log(lat, "my variable", lon)

      return (

        <Marker coordinate={{ latitude: lat, longitude: lon }}
          title="Bus Location" onPress={() => console.log("marker_BUS")}
          description={"2 .This is a marker in React Natve"}
          icon={require('../assets/Bus.png')}
        />
      )
    }
    else {
      console.log("api not loded");
    }


  }
  return (

    <View style={styles.container} showsUserLocation={true}>


      <MapView style={styles.map}
        initialRegion={{
          latitude: 12.9037432,
          longitude: 77.5193716,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>


        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="My current location" onPress={() => console.log("marker_curr")}
          description={"1 . This is a marker in React Natve"}
          icon={require('../assets/boy.png')}
        />
        {markerr(isLoading)}

        {/* <Marker coordinate={{ latitude: lat, longitude: lon }}
          title="Bus Location" onPress={() => console.log("marker_BUS")}
          description={"2 .This is a marker in React Natve"}
          icon={require('../assets/Bus.png')}
        /> */}
      </MapView>
      <SendLoc userLoc={region} />
      <View style={{ marginVertical: 10, marginLeft: 315 }}>
        <MaterialIcons name="gps-fixed" size={34} color="black" onPress={() => alert("GPS Under Construction !!")} />


      </View>




    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 1
  }

});