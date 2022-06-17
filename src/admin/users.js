import React, {useState, useEffect} from "react";
import {db} from "../config";
import "../scss/admin/users.scss"
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

// function mapFormUserValues() {
//     return {
//         nickname: nickname,
//         name: name,
//         email: email,
//         phone: phone,
//         address: address,
//         city: city,
//         isAdmin: isAdmin,
//     }
// }


function UsersFromDataBase() {

    // const initialValues = mapFormUserValues();
    // const [values, setValues] = useState(initialValues);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const [updateRecord, setUpdateRecord] = useState([]);
    const [isHidden, setIsHidden] = useState(true);

    const updateUser = async (id, nickname, name, email, phone, address, city, isAdmin) => {
        const userDoc = doc(db, "users", id);
        const newFields = {
            nickname: nickname, name: name, email: email, phone: phone, address: address, city: city, isAdmin: false,
        };
        await updateDoc(userDoc, newFields);
    };


    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     setValues(values => ({ ...values, [name]: value }));
    // }


    const updateUserRecord = async (field, value) => {
        const userDoc = collection(db, "users", doc.id);
        const newFields = {
            [field]: value,
        };
        await updateDoc(userDoc, newFields);
    }


    const deleteUser = async () => {
        const userDoc = doc(db, "users", doc.id);
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
        <table className="users__table">
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
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <button name={user.nickname} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                        <input
                            type="text"
                            value={user.nickname}
                            name={user.nickname}
                            onChange={(e) => updateUserRecord(user.id, e.target.value)}
                            placeholder="Nickname..."
                            hidden={isHidden}
                        />
                        <button onClick={() => updateUserRecord(user.id, "nickname", user.nickname)}>Update</button>
                    </td>

                    <td>{user.name}</td>
                    <button name={user.name} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                    <input
                        type="text"
                        value={user.name}
                        name={user.name}
                        onChange={(e) => updateUserRecord(user.id, e.target.value)}
                        placeholder="Name ..."
                        hidden={isHidden}
                    />
                    <button onClick={() => updateUserRecord(user.id, "name", user.name)}>Update</button>
                    <td>{user.email}</td>
                    <button name={user.email} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                    <input
                        type="text"
                        value={user.email}
                        name={user.email}
                        onChange={(e) => updateUserRecord(user.id, e.target.value)}
                        placeholder="email ..."
                        hidden={isHidden}
                    />
                    <button onClick={() => updateUserRecord(user.id, "email", user.name)}>Update</button>
                    <td>{user.phone}</td>
                    <button name={user.phone} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                    <input
                        type="text"
                        value={user.phone}
                        name={user.phone}
                        onChange={(e) => updateUserRecord(user.id, e.target.value)}
                        placeholder="phone ..."
                        hidden={isHidden}
                    />
                    <button onClick={() => updateUserRecord(user.id, "phone", user.phone)}>Update</button>
                    <td>{user.address}</td>
                    <button name={user.address} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                    <input
                        type="text"
                        value={user.address}
                        name={user.address}
                        onChange={(e) => updateUserRecord(user.id, e.target.value)}
                        placeholder="address ..."
                        hidden={isHidden}
                    />
                    <button onClick={() => updateUserRecord(user.id, "address", user.address)}>Update</button>
                    <td>{user.city}</td>

                    <button name={user.city} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                    <input
                        type="text"
                        value={user.city}
                        name={user.city}
                        onChange={(e) => updateUserRecord(user.id, e.target.value)}
                        placeholder="city ..."
                        hidden={isHidden}
                    />
                    <button onClick={() => updateUserRecord(user.id, "address", user.city)}>Update</button>

                </tr>);
            })}
            </tbody>
        </table>


    </>)
}

export default UsersFromDataBase;
