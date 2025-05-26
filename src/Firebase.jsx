// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPqQnN6foCmvd9ngxPtjUeiTwmKAqLnVY",
  authDomain: "pelatihan-sintaks.firebaseapp.com",
  projectId: "pelatihan-sintaks",
  storageBucket: "pelatihan-sintaks.firebasestorage.app",
  messagingSenderId: "74448782202",
  appId: "1:74448782202:web:9130af62ab5d6dddd10cc3",
  measurementId: "G-1S5ZPXCS6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
// const analytics = getAnalytics(app);