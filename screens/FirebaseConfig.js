/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDW6R5o6nvCSyYumGgv5TOK5aIreEDfX9Q",
  authDomain: "seewe-762fa.firebaseapp.com",
  databaseURL: "https://seewe-762fa-default-rtdb.firebaseio.com",
  projectId: "seewe-762fa",
  storageBucket: "seewe-762fa.appspot.com",
  messagingSenderId: "606786664243",
  appId: "1:606786664243:web:f3e117344d5c816cabf046",
  measurementId: "G-5MTQBB2PTV"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)