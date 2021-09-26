import React from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";

export default function SendLoc(userLoc) {
  console.log("Sendloc.js")
  
  

  fetch(
    "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLocation.json",
    {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoc),
    }
  );

  return <View>
    {console.log("send",userLoc)}</View>;
}
