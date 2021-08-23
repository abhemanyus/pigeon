import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

firebase.initializeApp(
  {
    apiKey: "AIzaSyAqNIXThnlV_JE4GmuZItVHoeHSQt1R8Bk",
    authDomain: "pigeon-850cb.firebaseapp.com",
    projectId: "pigeon-850cb",
    storageBucket: "pigeon-850cb.appspot.com",
    messagingSenderId: "94819366470",
    appId: "1:94819366470:web:4715a99ba23047446a3c47",
    measurementId: "G-SLGV1J17V3"
  }
);

const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const firestore = firebase.firestore();
firestore.enablePersistence();

export function App() {
  const [user] = useAuthState(auth);
  return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        {user
          ? <ChatRoom auth={auth} firestore={firestore} firebase={firebase}/>
          : <SignIn provider={firebase.auth.GoogleAuthProvider} auth={auth}/>}
      </div>
  );
}


export default App;
