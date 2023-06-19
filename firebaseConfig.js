import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_peY4N61h33ysCwm4JT3Kj86jIBs9rjg",
  authDomain: "fitness-app-4e1ba.firebaseapp.com",
  projectId: "fitness-app-4e1ba",
  storageBucket: "fitness-app-4e1ba.appspot.com",
  messagingSenderId: "634237139775",
  appId: "1:634237139775:web:86df93f49717e9875f318a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
