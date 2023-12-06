// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyCupoQcp_Igw59nW0JO0VZYUkZvEhpWO44",
  authDomain: "iot-project-aws.firebaseapp.com",
  projectId: "iot-project-aws",
  storageBucket: "iot-project-aws.appspot.com",
  messagingSenderId: "356573332647",
  appId: "1:356573332647:web:a6473138b53cc6baf68782",
  databaseURL: "https://iot-project-aws-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
