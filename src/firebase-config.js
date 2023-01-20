import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDsW_MT3qhZE4mZd3PSEU5DO9Qt397AX8",
  authDomain: "myproject-b95e5.firebaseapp.com",
  projectId: "myproject-b95e5",
  storageBucket: "myproject-b95e5.appspot.com",
  messagingSenderId: "38583165263",
  appId: "1:38583165263:web:f7a57714d9f9e7ebe0253a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
