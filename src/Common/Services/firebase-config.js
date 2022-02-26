import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAPgFSOXmggjlR9LLKvN3LvLWL5d0m4geM",
  authDomain: "test-project2-46b17.firebaseapp.com",
  projectId: "test-project2-46b17",
  storageBucket: "test-project2-46b17.appspot.com",
  messagingSenderId: "356659047567",
  appId: "1:356659047567:web:42b469acc0aef50c1054fa"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = getFirestore(app)