// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sanctuary-4c6e1.firebaseapp.com",
  projectId: "sanctuary-4c6e1",
  storageBucket: "sanctuary-4c6e1.appspot.com",
  messagingSenderId: "297794002521",
  appId: "1:297794002521:web:2067ec22839b6b5e9fdb48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);