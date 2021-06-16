import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyClph_ACJ-2jZ0U31yXRJScT_uEzJWOzH0",
  authDomain: "wily-app-2969a.firebaseapp.com",
  projectId: "wily-app-2969a",
  storageBucket: "wily-app-2969a.appspot.com",
  messagingSenderId: "93695637847",
  appId: "1:93695637847:web:7eb76f128b89499cd46612"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
