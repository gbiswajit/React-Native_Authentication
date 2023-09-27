// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZPBIa40CkXacNOx9imoWFvsWuTcC6go",
  authDomain: "react-native-login-f0a6b.firebaseapp.com",
  projectId: "react-native-login-f0a6b",
  storageBucket: "react-native-login-f0a6b.appspot.com",
  messagingSenderId: "260357151840",
  appId: "1:260357151840:web:c5ed1cff8df1fcc7473705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);