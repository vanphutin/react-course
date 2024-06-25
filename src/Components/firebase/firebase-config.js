import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXV65qyPIt8JEaxMBaZmXo4J1sLyK8ikw",
  authDomain: "fir-aa386.firebaseapp.com",
  projectId: "fir-aa386",
  storageBucket: "fir-aa386.appspot.com",
  messagingSenderId: "330433453478",
  appId: "1:330433453478:web:142e52ef2d78f821568367",
  measurementId: "G-RMC2RW2WD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init server
export const db = getFirestore();
export const auth = getAuth();
