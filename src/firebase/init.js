import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA0kmZhK_8LDu2KR4xNssxfd5dzrs5vvH4",
    authDomain: "geodiscov.firebaseapp.com",
    projectId: "geodiscov",
    storageBucket: "geodiscov.appspot.com",
    messagingSenderId: "885816552945",
    appId: "1:885816552945:web:6a8056c7bfb2052a0da850",
    measurementId: "G-T25VEBLQER"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()