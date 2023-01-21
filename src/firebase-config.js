import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsEIbJxzgr-q4zgj1P_it6riG67XSFR8A",
  authDomain: "myproject-9884d.firebaseapp.com",
  projectId: "myproject-9884d",
  storageBucket: "myproject-9884d.appspot.com",
  messagingSenderId: "82723447635",
  appId: "1:82723447635:web:75194ba4f4f2e14374b7a6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
