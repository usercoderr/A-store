import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCCFXeCj5c2RwO1RlKuPABNLJnEUa9XGN0",
  authDomain: "a-store-e851d.firebaseapp.com",
  projectId: "a-store-e851d",
  storageBucket: "a-store-e851d.appspot.com",
  messagingSenderId: "281236531274",
  appId: "1:281236531274:web:f4f26515fd717c64dc1eb3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app