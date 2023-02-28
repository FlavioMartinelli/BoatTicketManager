// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3FC6w3br-hKiRQfNO5xg8FoOwQGATi8k",
  authDomain: "ticketmanager-cf774.firebaseapp.com",
  projectId: "ticketmanager-cf774",
  storageBucket: "ticketmanager-cf774.appspot.com",
  messagingSenderId: "560375044383",
  appId: "1:560375044383:web:5e3ebb6319ebf320f6b82a",
  measurementId: "G-FQN8EVRR39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);