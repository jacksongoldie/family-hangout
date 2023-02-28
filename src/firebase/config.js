import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import { useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyB9MQJWk-Q0ljwltdvtCmZMNtxmDtS4PV8",
    authDomain: "starr-jackson.firebaseapp.com",
    projectId: "starr-jackson",
    storageBucket: "starr-jackson.appspot.com",
    messagingSenderId: "1005724914837",
    appId: "1:1005724914837:web:21f2109f8ed7da4885779c",
    measurementId: "G-4Z26R6TBCN"
  };
  
  // Initialize Firebase
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);  
  },[])
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore }
