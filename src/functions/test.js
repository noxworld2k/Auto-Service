import React, {useEffect, useState} from "react";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {db} from "../config"


export default function AddUserToDataBase() {
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newCity, setNewCity] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            name: newName,
            // age: Number(newAge)
            email: newEmail,
            phone: newPhone,
            address: newAddress,
            city: newCity
        });
    };


    const updateUser = async (id, name, email, phone, address, city) => {
        const userDoc = doc(db, "users", id);
        const newFields = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city
        };
        await updateDoc(userDoc, newFields);
    };

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

    return (
        <div className="App">
            <input
                type="text"
                value={newName}
                name={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name..."

            />

                }}
            />
            <input
                type="email"
                placeholder="Please write your email..."
                onChange={(event) => {
                    event.preventDefault();
                    setNewEmail(event.target.value);
                }}
            />

            <input
                type="phone"
                placeholder="Please write your phone..."
                onChange={(event) => {
                    event.preventDefault();
                    setNewPhone(event.target.value);
                }}
                />
            <input
                type="text"
                placeholder="Please write your address..."
                onChange={(event) => {
                    event.preventDefault();
                    setNewAddress(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Please write your city..."
                onChange={(event) => {
                    event.preventDefault();
                    setNewCity(event.target.value);
                }}
            />

            <button onClick={createUser}> Create User</button>

            <table>
                <tbody>
                {users.map((user) => {
                    return (
                        <>

                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                                <button name="Update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateUser(user.id, user.name);
                                    }}
                                />
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                                <button name="Update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateUser(user.id, user.email);
                                    }}
                                />
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{user.phone}</td>
                                <button name="Update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateUser(user.id, user.phone);
                                    }}
                                />
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>{user.address}</td>
                                <button name="Update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateUser(user.id, user.address);
                                    }}
                                />
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{user.city}</td>
                                <button name="Update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateUser(user.id, user.city);
                                    }}
                                />
                            </tr>
                        </>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
