import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGRiWXxTTx_HjCXes7k7kToL3R8Ji23-0",
  authDomain: "she-codes-faa13.firebaseapp.com",
  projectId: "she-codes-faa13",
  storageBucket: "she-codes-faa13.firebasestorage.app",
  messagingSenderId: "723444087927",
  appId: "1:723444087927:web:671ef2af909d63c5ccda72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export { app, auth};