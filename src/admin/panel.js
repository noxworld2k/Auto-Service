import React from "react";
import "../scss/admin/admin.scss"
import UsersFromDataBase from "./users";

function AdminPanel() {
    return (
        <div className="admin">
            <h1>Admin Panel</h1>
            <div className="container flex">
                <UsersFromDataBase/>
            </div>

        </div>
    );
}

export default AdminPanel;
