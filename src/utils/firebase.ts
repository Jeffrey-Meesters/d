// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMy9k5Op014rWLde6efqsgzuu4R_2RlLA",
  authDomain: "dreamerzdo.firebaseapp.com",
  projectId: "dreamerzdo",
  storageBucket: "dreamerzdo.firebasestorage.app",
  messagingSenderId: "1081543455859",
  appId: "1:1081543455859:web:9cc019fde3f39ab64ba606",
  measurementId: "G-KEFQPY1PF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);