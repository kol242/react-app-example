import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCe0ZMd1xWgktV7_tTDd19mK9Maw56r0I0",
  authDomain: "test-project-fc8e9.firebaseapp.com",
  projectId: "test-project-fc8e9",
  storageBucket: "test-project-fc8e9.appspot.com",
  messagingSenderId: "513517147618",
  appId: "1:513517147618:web:5d4b516ff7bb3ea99355bb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)