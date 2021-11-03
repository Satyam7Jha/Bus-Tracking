import React,{useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { AuthenticationContext } from "../authentication/authentication.context";

export default function SendLoc(userLoc) {
  const { user} = useContext(AuthenticationContext);
  console.log("Sendloc.js")
  // console.log(,"0-------------------------------------")
  console.log(user,"dfkdjfdjfdkjflkdjfldjfljfldkjfdkjfl")
  
  let url = `https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLocation/${user["user"]["email"].slice(0,-4)}.json`;
  console.log(url);

  fetch(
    url,
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
