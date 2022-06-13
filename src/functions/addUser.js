import {initializeApp} from "firebase/app";
import {getFirestore, doc, addDoc, setDoc, onSnapshot, collection} from "firebase/firestore";
import {db} from "../config";

const docRef = await addDoc(collection(db, "users"));


function addUserData(userData) {
    return docRef.add(userData);
}




export default addUserData;


