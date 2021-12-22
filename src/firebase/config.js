import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCn1aeUabrujfxWqdNHFBkeObWuO63cR0U",
  authDomain: "learning-sim.firebaseapp.com",
  projectId: "learning-sim",
  storageBucket: "learning-sim.appspot.com",
  messagingSenderId: "987638536641",
  appId: "1:987638536641:web:14921869cf6a0c7916f740",
  measurementId: "G-48CV5LRL4S"
};

// initialise Firebase
initializeApp(firebaseConfig)

// initialise services
const db = getFirestore()
const auth = getAuth()


export { db, auth }