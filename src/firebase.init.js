
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCnTyMR_sqWsTGl7nLu27ivs_zSD1P3yw",
  authDomain: "react-glasses-fdbed.firebaseapp.com",
  projectId: "react-glasses-fdbed",
  storageBucket: "react-glasses-fdbed.appspot.com",
  messagingSenderId: "716585559564",
  appId: "1:716585559564:web:8a7bfa7f72f7ed9fde7029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);