import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChCk578WV6mLrjx91JSTDIGiIMK1AaDXE",
    authDomain: "meuapp-79888.firebaseapp.com",
    databaseURL: "https://meuapp-79888-default-rtdb.firebaseio.com",
    projectId: "meuapp-79888",
    storageBucket: "meuapp-79888.appspot.com",
    messagingSenderId: "176676293946",
    appId: "1:176676293946:web:9b9967da012b97d7025403",
    measurementId: "G-M5PKT99K6R"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  } 
    export default firebase;