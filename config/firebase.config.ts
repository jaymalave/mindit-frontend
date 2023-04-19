import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyBxzMOPGD5srod2sTI0TgR5Dpz8InKgJTk",
  authDomain: "mindit-b5529.firebaseapp.com",
  projectId: "mindit-b5529",
  storageBucket: "mindit-b5529.appspot.com",
  messagingSenderId: "230557193362",
  appId: "1:230557193362:web:e4789468565e2ddf93424b",
  measurementId: "G-2ZCMB7SMDP",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const Providers = { google: new GoogleAuthProvider() };
