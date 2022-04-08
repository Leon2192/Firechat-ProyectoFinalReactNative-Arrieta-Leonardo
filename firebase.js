import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAs5XFlNz1v4H6sV4-zSJ0NsiFOjDEUh44",
  authDomain: "chat-project-1f53a.firebaseapp.com",
  projectId: "chat-project-1f53a",
  storageBucket: "chat-project-1f53a.appspot.com",
  messagingSenderId: "1023526942562",
  appId: "1:1023526942562:web:a5dd3e0d4eb6cf71e69e3b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = getAuth(app);

export { db, authentication };
