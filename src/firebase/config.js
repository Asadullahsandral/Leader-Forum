// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLfVPGaab_64wbEpba-dfOo79tr6rjuU",
  authDomain: "pakistan-leader-forum-ba6c5.firebaseapp.com",
  projectId: "pakistan-leader-forum-ba6c5",
  storageBucket: "pakistan-leader-forum-ba6c5.firebasestorage.app",
  messagingSenderId: "875553481",
  appId: "1:875553481:web:2186887bc3a3a6a4dd6318",
  measurementId: "G-EZ1WVJF48Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(
  app,
  "gs://pakistan-leader-forum-ba6c5.firebasestorage.app"
);
