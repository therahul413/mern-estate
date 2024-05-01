// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c1e8e.firebaseapp.com",
  projectId: "mern-estate-c1e8e",
  storageBucket: "mern-estate-c1e8e.appspot.com",
  messagingSenderId: "333290206800",
  appId: "1:333290206800:web:de1bf6c2f8012194f78355"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);