// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTRY4Q2tSdLn1z0skWo5ND6tMxKDcovqI",
  authDomain: "manufacturer-website-75365.firebaseapp.com",
  projectId: "manufacturer-website-75365",
  storageBucket: "manufacturer-website-75365.appspot.com",
  messagingSenderId: "1089609808585",
  appId: "1:1089609808585:web:2e72df0ad2ad0e4f78ab18"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;