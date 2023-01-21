import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");
class UserDataService {
  addusers = (newuser) => {
    return addDoc(userCollectionRef, newuser);
  };

  updateuser = (id, updateduser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updateduser);
  };

  deleteuser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllusers = () => {
    return getDocs(userCollectionRef);
  };

  getuser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
  allitemsData = () => {
    return getDocs(collection(db, "allitems"));
  };
}

export default new UserDataService();
