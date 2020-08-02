import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBXrFrEjNdQTHaykb8SDheM1Gz0RAF56uE",
  authDomain: "recipepocket-app.firebaseapp.com",
  databaseURL: "https://recipepocket-app.firebaseio.com",
  projectId: "recipepocket-app",
  storageBucket: "recipepocket-app.appspot.com",
  messagingSenderId: "414851481381",
  appId: "1:414851481381:web:39ef375ed8d093812824cc",
  measurementId: "G-FD4KVLRZG7"
};

firebase.initializeApp(config);

export default firebase;
