import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-I3UGrs7WcpoCfRSQUXALxfN9aCWx5Y",
  authDomain: "house-market-a51a5.firebaseapp.com",
  projectId: "house-market-a51a5",
  storageBucket: "house-market-a51a5.appspot.com",
  messagingSenderId: "471665853867",
  appId: "1:471665853867:web:072b72a31e92f8d8e1beee",
  measurementId: "G-C0VW9XWC4D",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
