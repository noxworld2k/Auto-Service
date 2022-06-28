import React, {useEffect, useState} from "react";
import "../scss/admin/users.scss"



function UsersFromDataBase() {
    // const initialValues = mapFormUserValues();
    // const [values, setValues] = useState(initialValues);
    // const [users, setUsers] = useState([]);
    // const [user, setUser] = useState({});
    // const usersCollectionRef = collection(db, "users");
    // const [updateRecord, setUpdateRecord] = useState([]);
    // const [isHidden, setIsHidden] = useState(true);
    //
    // const handleInputChange = (e) => {
    //     e.preventDefault();
    //     const target = e.target;
    //     const name = target.name;
    //     setUser({...user, [name]: target.value});
    // }
    //
    // const addUserToDataBase = async () => {
    //     const userDoc = collection(db, "users");
    //     const newFields = {
    //         nickname: user.nickname,
    //         name: user.name,
    //         email: user.email,
    //         phone: user.phone,
    //         address: user.address,
    //         city: user.city,
    //         isAdmin: user.isAdmin,
    //     }
    //     addDoc(userDoc, newFields);
    // }
    //
    //
    //
    // const updateUserRecord = async (field, value) => {
    //     const userDoc = collection(db, "users", doc.id);
    //     const newFields = {
    //         [field]: value,
    //     };
    //     await updateDoc(userDoc, newFields);
    // }
    //
    //
    // const deleteUser = async () => {
    //     const userDoc = collection(db, "users", doc.id);
    //     await deleteDoc(userDoc);
    // };
    //
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map((doc) => ({
    //             ...doc.data(), id: doc.id, hidden: true
    //         })))
    //     };
    //     getUsers();
    // }, []);


    return (
        <>

            <div>

                <h2>
                    Add user to database
                </h2>
                <form className="users__form" onSubmit={addUserToDataBase}>
                    <div className="users__form-row">
                        <label>Nickname</label>
                        <input value={user.nickname} onChange={handleInputChange} type="text" id="nickname" name="nickname"
                               placeholder="Nickname"/>
                        <label>Name</label>
                        <input value={user.name} onChange={handleInputChange} type="text" id="name" name="name" placeholder="Name"/>
                        <label>Email</label>
                        <input value={user.email} onChange={handleInputChange} type="text" id="email" name="email" placeholder="Email"/>
                        <label>Phone</label>
                        <input value={user.phone} onChange={handleInputChange} type="text" id="phone" name="phone" placeholder="Phone"/>
                        <label>Address</label>
                        <input value={user.address} onChange={handleInputChange} type="text" id="address" name="address" placeholder="Address"/>
                        <label>City</label>
                        <input value={user.city} onChange={handleInputChange} type="text" id="city" name="city" placeholder="City"/>
                        <label>Is Admin</label>
                        <input onChange={handleInputChange} type="checkbox" id="isAdmin" name="isAdmin"

                               placeholder="Is Admin"/>
                        <button className="users__form-button" type="submit">Add</button>
                    </div>
                </form>
            </div>

            <h2>
                All Users from DataBase
            </h2>
            <table className="users__table">

                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Permission</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    return (<tr key={user.id}>

                        <td>{user.nickname}
                            <br/>
                            <tr>
                                <input
                                    type="text"
                                    value={user.nickname}
                                    name={user.nickname}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="Nickname..."
                                    hidden={isHidden}
                                />
                                <button name={user.nickname} onClick={(e) => setIsHidden(!isHidden)}>Want Update
                                </button>
                                <button onClick={() => updateUserRecord(user.id, "nickname", user.nickname)}>Update
                                </button>
                            </tr>

                        </td>

                        <td>{user.name}

                            <tr>
                                <input
                                    type="text"
                                    value={user.name}
                                    name={user.name}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="Name ..."
                                    hidden={isHidden}
                                />
                                <button name={user.name} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                                <button onClick={() => updateUserRecord(user.id, "name", user.name)}>Update</button>
                            </tr>
                        </td>

                        <td>{user.email}

                            <tr>
                                <input
                                    type="text"
                                    value={user.email}
                                    name={user.email}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="email ..."
                                    hidden={isHidden}
                                />
                                <button name={user.email} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                                <button onClick={() => updateUserRecord(user.id, "email", user.name)}>Update</button>
                            </tr>

                        </td>
                        <td>{user.phone}

                            <tr>
                                <input
                                    type="text"
                                    value={user.phone}
                                    name={user.phone}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="phone ..."
                                    hidden={isHidden}
                                />
                                <button name={user.phone} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                                <button onClick={() => updateUserRecord(user.id, "phone", user.phone)}>Update</button>
                            </tr>

                        </td>
                        <td>{user.address}

                            <tr>
                                <input
                                    type="text"
                                    value={user.address}
                                    name={user.address}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="address ..."
                                    hidden={isHidden}
                                />
                                <button name={user.address} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                                <button onClick={() => updateUserRecord(user.id, "address", user.address)}>Update
                                </button>
                            </tr>
                        </td>
                        <td>{user.city}


                            <tr>
                                <input
                                    type="text"
                                    value={user.city}
                                    name={user.city}
                                    onChange={(e) => updateUserRecord(user.id, e.target.value)}
                                    placeholder="city ..."
                                    hidden={isHidden}
                                />
                                <button name={user.city} onClick={(e) => setIsHidden(!isHidden)}>Want Update</button>
                                <button onClick={() => updateUserRecord(user.id, "address", user.city)}>Update</button>
                            </tr>

                        </td>
                    </tr>);
                })}
                </tbody>
            </table>


        </>
    )
}

export default UsersFromDataBase;
