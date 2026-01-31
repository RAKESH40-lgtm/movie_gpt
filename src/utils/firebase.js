// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrpKxcAqYdGtqO9IrIrHn_rQ4XNapu9HE",
  authDomain: "netflixgpt-257d5.firebaseapp.com",
  projectId: "netflixgpt-257d5",
  storageBucket: "netflixgpt-257d5.firebasestorage.app",
  messagingSenderId: "64257791549",
  appId: "1:64257791549:web:2dc617f3c84ad69dc37c54",
  measurementId: "G-9JX7CEQ0Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const  auth = getAuth()