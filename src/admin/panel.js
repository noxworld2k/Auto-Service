import React from "react";
import "../scss/admin/admin.scss"
import UsersFromDataBase from "./users";

function AdminPanel() {
    return (
        <div className="admin">
            <h1>Admin Panel</h1>
            <div className="container flex">
                <h2>
                    All Users from DataBase
                </h2>
                <UsersFromDataBase/>
            </div>

        </div>
    );
}

export default AdminPanel;
