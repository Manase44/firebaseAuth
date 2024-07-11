import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOY6oaghLRyoOdeE2x5bG6-so5aQupix0",
  authDomain: "fir-assignment-40e51.firebaseapp.com",
  projectId: "fir-assignment-40e51",
  storageBucket: "fir-assignment-40e51.appspot.com",
  messagingSenderId: "726079974212",
  appId: "1:726079974212:web:3ef9c3f95effaa5cc04511",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Gprovider = new GoogleAuthProvider();
export const FBprovider = new FacebookAuthProvider();
