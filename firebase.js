// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaZEpINBrO1wiBBS_HkNk-dgP3CI4orz8",
  authDomain: "gym-mahe.firebaseapp.com",
  projectId: "gym-mahe",
  storageBucket: "gym-mahe.firebasestorage.app",
  messagingSenderId: "775946426762",
  appId: "1:775946426762:web:f827483ec35e7a97715073",
  measurementId: "G-8NPHTB1KLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
