import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCJ7xxHHDqczi3V8SXpCCrTep0oEBIW-k",
  authDomain: "clone-1ab24.firebaseapp.com",
  projectId: "clone-1ab24",
  storageBucket: "clone-1ab24.appspot.com",
  messagingSenderId: "593292617681",
  appId: "1:593292617681:web:644547ab72c05b0d5b22f0",
  measurementId: "G-XJLE7K5PWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
