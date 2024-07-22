// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu-khBE0rvoG1Gw3ei1-wNVtB8Js-G1XM",
  authDomain: "ai-trip-planner-d816f.firebaseapp.com",
  projectId: "ai-trip-planner-d816f",
  storageBucket: "ai-trip-planner-d816f.appspot.com",
  messagingSenderId: "999014213583",
  appId: "1:999014213583:web:86d6c8e9c5c3d0d47494ba",
  measurementId: "G-GTCFXBYC14",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
