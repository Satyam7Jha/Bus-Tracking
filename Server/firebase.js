// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArWoXy-2p-eFY4x2K5pBafjJTVDDRQPhI",
    authDomain: "bustrack-27015.firebaseapp.com",
    databaseURL: "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bustrack-27015",
    storageBucket: "bustrack-27015.appspot.com",
    messagingSenderId: "394942805670",
    appId: "1:394942805670:web:4ee531e6ffd7506bafa667"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };