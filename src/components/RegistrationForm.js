const { MongoClient } = require('mongodb');
import {connect} from "../connection";
import React, {useCallback, useRef, useState} from 'react';
import "../scss/RegistrationForm.scss";

export default function UserForm() {

    const initialUserData = {
        user: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    const [userData, setUserData] = useState(initialUserData);
    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();
            setUserData({
                ...userData,
                [event.target.name]: event.target.value
            })
        },
        [userData]
    );

    const updateUserDataHandler = useCallback(
        (type) => (event) => {
            setUserData({ ...userData, [type]: event.target.value });
        },
        [userData]
    );
    console.log(userData);

    connect().then(client => {
        client.db().collection("users").insertOne(userData);
        client.close();
    }
    );

    return (
        <div className="container">
            <form onSubmit={formHandler}>
                <div className="form-group">
                    <label form={'username'}>Username</label>
                    <input type="text"
                        name="user"
                           className="form-control"
                           id="username"
                           value={userData.user}
                           onChange={updateUserDataHandler("user")}
                           placeholder="Enter username"/>

                </div>
                <div className="form-group">
                    <label form={'password'}>Password</label>
                    <input type="password"
                           value={userData.password}
                           onChange={updateUserDataHandler("password")}
                           className="form-control"
                           id="password"
                           placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label form={'password'}>Confirm Password</label>
                    <input type="password"
                           value={userData.passwordConfirmation}
                           onChange={updateUserDataHandler("passwordConfirmation")}
                           className="form-control"
                           id="passwordConfirmation"
                           placeholder="Confirm password"/>
                </div>
                <div className="form-group">
                    <label form={'email'}>Email</label>
                    <input type="email"
                           value={userData.email}
                           onChange={updateUserDataHandler("email")}
                           className="form-control" id="email"
                           placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary">
                        Registration of a new believer
                    </button>
                </div>
            </form>
        </div>
    );
}
