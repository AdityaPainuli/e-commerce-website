import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAX7FNYPpRMEyNZAH1vmoHxxFXO0an22Q",
  authDomain: "overlay-57d6a.firebaseapp.com",
  projectId: "overlay-57d6a",
  storageBucket: "overlay-57d6a.appspot.com",
  messagingSenderId: "449060781456",
  appId: "1:449060781456:web:6e68311c6f19c9dbf94715",
  measurementId: "G-4QR7YVWKRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
