import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBTzQFxEsvF57NRsmQmFj82C40zbSA4hfs',
  authDomain: 'crono-fmed.firebaseapp.com',
  databaseURL: 'https://crono-fmed.firebaseio.com',
  projectId: 'crono-fmed',
  storageBucket: 'crono-fmed.appspot.com',
  messagingSenderId: '521432244631'
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
