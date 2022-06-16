import { db } from "../config";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "Users");
class UserDataService {
    addUser = (newUser) => {
        return addDoc(usersCollectionRef, newUser);
    };

    updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "Users", id);
        return updateDoc(userDoc, updatedUser);
    };

    deleteUser = (id) => {
        const userDoc = doc(db, "Users", id);
        return deleteDoc(userDoc);
    };

    getAllUsers = () => {
        return getDocs(usersCollectionRef);
    };

    getUser = (id) => {
        const userDoc = doc(db, "Users", id);
        return getDoc(userDoc);
    };
}

export default new UserDataService();