// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyBHQh6WE98AdZ6XEuc_z9jrXZwMRZFAbcg",
  authDomain: "iot-web-test-ac5b5.firebaseapp.com",
  projectId: "iot-web-test-ac5b5",
  storageBucket: "iot-web-test-ac5b5.appspot.com",
  messagingSenderId: "513318719876",
  appId: "1:513318719876:web:acd4d5156d5752885c4dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);