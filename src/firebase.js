// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzXLAZPDT5c4pgMD5uwHbwI7WAnjdhKDY",
  authDomain: "newsaggregator-44e5d.firebaseapp.com",
  projectId: "newsaggregator-44e5d",
  storageBucket: "newsaggregator-44e5d.appspot.com",
  messagingSenderId: "598576502654",
  appId: "1:598576502654:web:84baf569a1abd4e49e852f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
