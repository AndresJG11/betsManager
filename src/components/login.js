import React, {Component} from 'react';
import * as firebase from 'firebase';


class Login extends Component{
    email = " ";
    
    render(){
        this.observador();
        return <div>
            <div>
                <input placeholder="correo@electronico.com" type="text" id = "usuario" defaultValue="ajimenezg@uqvirtual.edu.co"/>
                <input type="password" id = "password" placeholder="Contraseña" defaultValue="andres"/>
                <button onClick={this.login}> Entrar</button>
                <button onClick={this.registrar}> Quiero registrarme </button>
            </div>

            <div>
                <button onClick={this.cerrarSesion}> Cerrar Sesión </button>
                <p> Hola! {this.email} </p>
            </div>
        </div>
    }

    registrar() {
        var email = document.getElementById("usuario").value;
        var pass = document.getElementById("password").value;
    
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(function(){
            console.log("Registrado")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          });
    }

    login() {
        var email = document.getElementById("usuario").value;
        var pass = document.getElementById("password").value;
    
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => { console.log(email)})
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    cerrarSesion(){
        firebase.auth().signOut()
        .then(function() {
            console.log('Saliendo')
        })
        .catch(function(error){
            console.log(error)
        });
    }


    observador() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              this.email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log(user)
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
    }
}

export default Login;