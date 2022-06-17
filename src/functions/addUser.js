import {initializeApp} from "firebase/app";
import {getFirestore, doc, addDoc, setDoc, onSnapshot, collection} from "firebase/firestore";
import {db} from "../config";

const docRef = collection(db, "users");


const addUserData = async (userData) => {
    addDoc(docRef, userData).then
        (() => {
            console.log("Document successfully written!");
        }).catch(error => {
        console.error("Error writing document: ", error);
    })
}




export default addUserData;


