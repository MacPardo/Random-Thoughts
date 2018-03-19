import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyD0FBkyiMfeV4YbwbwclZujjQgkk1qBPDU",
  authDomain: "random-thoughts-b746d.firebaseapp.com",
  databaseURL: "https://random-thoughts-b746d.firebaseio.com",
  projectId: "random-thoughts-b746d",
  storageBucket: "random-thoughts-b746d.appspot.com",
  messagingSenderId: "968749901057"
});

ReactDOM.render(
  <App/>, document.getElementById('root'));
registerServiceWorker();
