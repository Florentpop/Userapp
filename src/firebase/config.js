import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCiwHy_c8fNKCmVJZh0AnBopezqx4NkWJ0",
    authDomain: "userapp-b7e2d.firebaseapp.com",
    databaseURL: "https://userapp-b7e2d.firebaseio.com",
    projectId: "userapp-b7e2d",
    storageBucket: "userapp-b7e2d.appspot.com",
    messagingSenderId: "814520318594",
    appId: "1:814520318594:web:fca1a4d91b7e7f8e44d29b"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;