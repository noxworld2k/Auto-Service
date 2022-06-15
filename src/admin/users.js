import React, {useState, useEffect} from "react";
import {db} from "../config";
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";


function UsersFromDataBase() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const updateUser = async (id, name, email, phone, address, city) => {
        const userDoc = doc(db, "users", id);
        const newFields = {
            name: name,
            email: email,
            phone: Number(phone),
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
        <>
            <table>
                <tbody>
                {users.map((user) => {
                    return (
                        <>
                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                              <td>
                                  <input type="submit"
                                         onClick={(e) => {
                                             e.preventDefault();
                                             updateUser(user.id, user.name);
                                         }}
                                  />
                              </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                                <td>
                                    <input type="submit" name="Update"
                                           onClick={(e) => {
                                               e.preventDefault();
                                               updateUser(user.id, user.email);
                                           }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{user.phone}</td>
                                <td>
                                    <input type="submit"
                                           onClick={(e) => {
                                               e.preventDefault();
                                               updateUser(user.id, user.phone);
                                           }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>{user.address}</td>
                                <td>
                                    <input type="submit"
                                           onClick={(e) => {
                                               e.preventDefault();
                                               updateUser(user.id, user.address);
                                           }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{user.city}</td>
                                <td>
                                    <input type="submit"
                                           onClick={(e) => {
                                               e.preventDefault();
                                               updateUser(user.id, user.city);
                                           }}
                                    />
                                </td>

                            </tr>
                        </>
                    );
                })}
                </tbody>
            </table>


        </>
    )
}

export default UsersFromDataBase;
