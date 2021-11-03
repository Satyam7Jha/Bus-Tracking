// not using right now
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import  { Marker } from 'react-native-maps';

export default GetData = () => {
  const [isLoading, setLoading] = useState(true);
  const [busLoc, setBusLoc] = useState([]);
  console.log("GetData.js")

  console.log("Get",busLoc);

  useEffect(() => {
    fetch('https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLocation/userLoc.json')
      .then((response) => response.json())
      .then((json) => setBusLoc(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    

    <View >
        
       {console.log(busLoc)}
    </View>
  );
};