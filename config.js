import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC8IeOsJyRL8bd1IBxWZ2h4uaqt_Yn-ZJA",
    authDomain: "barter-app-1cc0c.firebaseapp.com",
    databaseURL: "https://barter-app-1cc0c.firebaseio.com",
    projectId: "barter-app-1cc0c",
    storageBucket: "barter-app-1cc0c.appspot.com",
    messagingSenderId: "559399505606",
    appId: "1:559399505606:web:230d058f3fcf8975c511c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
