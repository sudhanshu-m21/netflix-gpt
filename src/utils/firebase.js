// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAasbpLwG395CUc4Rl4wWRXHPYHFpRthpg",
  authDomain: "netflixgpt-d15c8.firebaseapp.com",
  projectId: "netflixgpt-d15c8",
  storageBucket: "netflixgpt-d15c8.appspot.com",
  messagingSenderId: "846014100445",
  appId: "1:846014100445:web:afe95ab6b8f6043d617c34",
  measurementId: "G-DCDWJN3R5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
