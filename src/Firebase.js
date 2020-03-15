import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyC6_Tbm3SWWQMZHhfKnDfddr7I78Up61CY",
    authDomain: "bets-manager-6ed2f.firebaseapp.com",
    databaseURL: "https://bets-manager-6ed2f.firebaseio.com",
    projectId: "bets-manager-6ed2f",
    storageBucket: "bets-manager-6ed2f.appspot.com",
    messagingSenderId: "47221833562",
    appId: "1:47221833562:web:f84a98422807277a5afd63",
    measurementId: "G-WGLP9GGP3D"
  };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
