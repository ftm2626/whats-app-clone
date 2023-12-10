import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhwndn0KwqwEFTW1LrUu1MR1qidlEDCQ8",
  authDomain: "whats-app-clone-5dcc0.firebaseapp.com",
  projectId: "whats-app-clone-5dcc0",
  storageBucket: "whats-app-clone-5dcc0.appspot.com",
  messagingSenderId: "509688621916",
  appId: "1:509688621916:web:d9cbfcb97290dad755ef99",
  measurementId: "G-F473CXNCD9",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
