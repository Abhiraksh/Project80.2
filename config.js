import firebase from "firebase";
require("@firebase/firestore");
 
var firebaseConfig = {
    apiKey: "AIzaSyBigFT6FWclmrT2e3L0t41W8BjrcO8JQGU",
    authDomain: "project77-3e9d4.firebaseapp.com",
    projectId: "project77-3e9d4",
    storageBucket: "project77-3e9d4.appspot.com",
    messagingSenderId: "195002753385",
    appId: "1:195002753385:web:b4c55e1517d837a14d9df8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();