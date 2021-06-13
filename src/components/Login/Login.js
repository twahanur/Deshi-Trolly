import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import GoolgeIcon from '../../media/socialicon/google.svg';
import {
    BrowserRouter as Router,
    useHistory,
    useLocation
} from "react-router-dom";

const Login = () => {
    document.title = 'Login - Deshi-Trolly.Com';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    // SignIn With Google
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = async () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
                const { displayName, email, photoURL, emailVerified } = result.user;
                const signedInUser = { 
                    username: displayName,
                    useremail: email, 
                    userpicture: photoURL, 
                    verified: emailVerified }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage, error.code)
            });
    };

    // SignIn With GitHub
   
    return (
        <div className="container">
            <div className="Login">
                <h3>Social Login</h3>
                <button className="GoogleSignIn-Btn" onClick={handleGoogleSignIn}><img src={GoolgeIcon} alt="Google Login" /> <p>Continue with Google</p></button><br />
            </div>
        </div>
    );
};

export default Login;