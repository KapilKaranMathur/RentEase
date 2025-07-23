// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCioCOECOM7Pj6a4YRZkJHPZyUr2uI6y9A",
  authDomain: "rentease-e58c8.firebaseapp.com",
  projectId: "rentease-e58c8",
  storageBucket: "rentease-e58c8.firebasestorage.app",
  messagingSenderId: "116631810409",
  appId: "1:116631810409:web:0a6d30021983cf64a40df8",
  measurementId: "G-M0X9KMV1JK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth };
