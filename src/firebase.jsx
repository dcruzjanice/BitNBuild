import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvcEUE9PLZDv544vMQuC_a88uG4oUMjHE",
  authDomain: "corruptionwatch-c9eda.firebaseapp.com",
  projectId: "corruptionwatch-c9eda",
  storageBucket: "corruptionwatch-c9eda.appspot.com",
  messagingSenderId: "603335338088",
  appId: "1:603335338088:web:0caf5c1dde48aa8542f3dd",
  measurementId: "G-DVS5HG0GGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {db}