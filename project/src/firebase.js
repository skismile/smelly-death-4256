// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN3Bd_-MwO-6P-xGxlWrVtSa9ZqF6EJ6I",
  authDomain: "react-authentication-fbcb7.firebaseapp.com",
  projectId: "react-authentication-fbcb7",
  storageBucket: "react-authentication-fbcb7.appspot.com",
  messagingSenderId: "176327124609",
  appId: "1:176327124609:web:fd9c76b0eb765ddd164f80",
  measurementId: "G-Q147CBPQM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);