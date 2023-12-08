// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAH5BleuAcpYhYxx32Nc1uC2I_7CcrBXg",
  authDomain: "tripma-48238.firebaseapp.com",
  projectId: "tripma-48238",
  storageBucket: "tripma-48238.appspot.com",
  messagingSenderId: "81581772980",
  appId: "1:81581772980:web:e04ff75a58a31b525787e1",
  measurementId: "G-8FYCDFCRBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;