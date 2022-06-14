import React, {useState, useEffect} from 'react';
import "../scss/RegistrationForm.scss";
// import addUserData from "../functions/addUser";


function RegistrationForm() {

    const [user, setUser] = useState(
     {
         userName: "",
         email: "",
         password: "",
     }
    );

    const handleSubmit = e => {
        e.preventDefault();
        // addUserData(user);
        }



    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
        };



    console.log(user);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label form={'username'}>Username</label>
                    <input type="text"
                           name="user"
                           className="form-control"
                           id="username"
                           value={user.userName}
                           onChange={onChange}
                           placeholder="Enter username"/>

                </div>
                <div className="form-group">
                    <label form={'password'}>Password</label>
                    <input type="password"
                           value={user.password}
                           onChange={onChange}
                           className="form-control"
                           id="password"
                           placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label form={'repeatPassword'}>Confirm Password</label>
                    <input type="password"
                           onChange={onChange}
                           className="form-control"
                           id="passwordConfirmation"
                           placeholder="Confirm password"/>
                </div>
                <div className="form-group">
                    <label form={'email'}>Email</label>
                    <input type="email"
                           value={user.email}
                           onChange={onChange}
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

export default RegistrationForm;