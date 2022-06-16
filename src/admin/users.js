import React, {useState, useEffect} from "react";
import {db} from "../config";
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

function mapFormUserValues(values) {
    return {
        id: values.id,
        nickname: values.nickname,
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        city: values.city,
        isAdmin: values.booleanValue,
    }
}


function UsersFromDataBase() {

    const initialValues = mapFormUserValues();
    const [values, setValues] = useState(initialValues);
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "users");
    const [updateRecord, setUpdateRecord] = useState([]);

    const updateUser = async (id, nickname, name, email, phone, address, city, isAdmin) => {
        const userDoc = doc(db, "users", id);
        const newFields = {
            nickname: nickname, name: name, email: email, phone: phone, address: address, city: city, isAdmin: false,
        };
        await updateDoc(userDoc, newFields);
    };





    function handleChange(event) {
        const { name, value, id } = event.target;
        setValues(values => ({ ...values, [name]: value, id }));
    }


    const updateUserRecord = async (id, field, value) => {
        const userDoc = doc(db, "users", id, field);
        const userValue = {
            field: value,
        }
        await updateDoc(userDoc, field, userValue);
    }


    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        };
        getUsers();
    }, []);


    return (<>
        <table>
            <thead>
            <tr>
                <th>Nickname</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>IsAdmin</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => {
                return (<tr key={user.id}>

                    <td>{user.nickname}
                        <input />
                        <button onClick={() => updateUserRecord(user.id, "nickname", user.nickname)}>Update</button>
                    </td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>{user.phone}</td>

                    <td>{user.address}</td>

                    <td>{user.city}</td>

                    <td>{user.isAdmin}</td>

                </tr>);
            })}
            </tbody>
        </table>


    </>)
}

export default UsersFromDataBase;
