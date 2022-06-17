import React from "react";
import "../scss/admin/admin.scss"
import UsersFromDataBase from "./users";
import {Link} from "react-router-dom";
import client from "./../images/Client3.JPG";
import book from "./../images/book.png";

function AdminPanel() {
    return (
        <>
            <div className="full_width_admin">
                <div className="admin_menu container">
                    <div className="client__logo">
                        <img src={client} alt="admin_logo"/>
                    </div>
                    <div>
                        <h2>
                            User Name
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="admin_menu_item">
                        <Link to="/admin/users">Personal Data </Link>
                        <Link to="/admin/users">Cars</Link>
                        <Link to="/admin/users">Repairs</Link>
                        <Link to="/admin/users">Time Table</Link>
                    </div>
                    <div>
                        <Link to="/admin/users">Logout</Link>
                    </div>
                </div>
                <div className="admin_content container">
                    <img src={book} alt="book a date"/>
                </div>




            <div className="admin">
                <h1>Admin Panel</h1>
                <div className="container flex">
                    <UsersFromDataBase/>
                </div>
            </div>

            </div>
        </>



    );
}

export default AdminPanel;
