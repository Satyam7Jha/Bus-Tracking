// import { StatusBar } from "expo-status-bar";
import React ,{useState,useEffect} from "react";

import { Navigation } from "./navigation/index";
import { AuthenticationContextProvider } from "./authentication/authentication.context";

import * as firebase from "firebase";
//const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyArWoXy-2p-eFY4x2K5pBafjJTVDDRQPhI",
  authDomain: "bustrack-27015.firebaseapp.com",
  databaseURL: "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bustrack-27015",
  storageBucket: "bustrack-27015.appspot.com",
  messagingSenderId: "394942805670",
  appId: "1:394942805670:web:4ee531e6ffd7506bafa667"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  console.log("App executed");
 
  //if (!isAuthenticated) return null;

  return (  

    <AuthenticationContextProvider>
       <Navigation />
    </AuthenticationContextProvider>




  );
}