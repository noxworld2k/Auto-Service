import React, {useState, useEffect} from 'react';
import "../scss/RegistrationForm.scss";
import addUserData from "../functions/addUser";


function RegistrationForm() {
    const [user, setUser] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        if (
            user.name === "" || user.email === "" || user.password === ""
        ) {
            alert("Please fill in all fields");
        } else if (user.password !== user.repeatPassword) {
            alert("Passwords do not match");
        } else {
            alert("Registration successful");
            return addUserData(user);
        }
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setUser({...user, [name]: target.value});
    }


    console.log(user);

    return (
        <section className="form__section">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label form={'username'}>Username</label>
                    <input type="text"
                           name="userName"
                           className="form-control"
                           id="username"
                           value={user.userName}
                           onChange={handleInputChange}
                           placeholder="Enter username"/>

                </div>
                <div className="form-group">
                    <label form={'password'}>Password</label>
                    <input type="password"
                           name="password"
                           value={user.password}
                           onChange={handleInputChange}
                           className="form-control"
                           id="password"
                           placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label form={'repeatPassword'}>Confirm Password</label>
                    <input type="password"
                           name="repeatPassword"
                           onChange={handleInputChange}
                           className="form-control"
                           id="passwordConfirmation"
                           placeholder="Confirm password"/>
                </div>
                <div className="form-group">
                    <label form={'email'}>Email</label>
                    <input type="email"
                           name="email"
                           value={user.email}
                           onChange={handleInputChange}
                           className="form-control" id="email"
                           placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
        </div>
        </section>
    );
}

export default RegistrationForm;