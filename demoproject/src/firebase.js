import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCP9y74-39-zFAMMvnjfN5mT94VE4u0S1c",
    authDomain: "project-3928008232007055394.firebaseapp.com",
    projectId: "project-3928008232007055394",
    storageBucket: "project-3928008232007055394.appspot.com",
    messagingSenderId: "378100856010",
    appId: "1:378100856010:web:6cb094d10157d6c17bb033",
    measurementId: "G-LE6RRH4HRC"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;