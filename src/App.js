import React from 'react';
import './App.css';
import Login from './components/login.js';
import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC6_Tbm3SWWQMZHhfKnDfddr7I78Up61CY",
    authDomain: "bets-manager-6ed2f.firebaseapp.com",
    databaseURL: "https://bets-manager-6ed2f.firebaseio.com",
    projectId: "bets-manager-6ed2f",
    storageBucket: "bets-manager-6ed2f.appspot.com",
    messagingSenderId: "47221833562",
    appId: "1:47221833562:web:f84a98422807277a5afd63",
    measurementId: "G-WGLP9GGP3D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function NavMenu(){
  return(
      <div> 
        <h2> nav menu</h2>
        <Login/>
      </div>
  );
}

function MainPage(){
  return(
    <div> 
      <h1> Main page </h1>
    </div>
  );
}


function App() {
  return (
    <div>
        {NavMenu()}
        {MainPage()}
    </div>
  );
}

export default App;
