var firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyBl1P1xZCEc0QidtyKljSTmQDCeBYgWZyU",
    authDomain: "libros-6c68c.firebaseapp.com",
    databaseURL: "https://libros-6c68c-default-rtdb.firebaseio.com",
    projectId: "libros-6c68c",
    storageBucket: "libros-6c68c.appspot.com",
    messagingSenderId: "807960380833",
    appId: "1:807960380833:web:9e9dd3d48933aa2356f7e0",
    measurementId: "G-WWRGGEPMYX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  export{db}