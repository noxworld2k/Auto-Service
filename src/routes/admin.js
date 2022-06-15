import React from "react";
import AdminPanel from "../admin/panel";
import Header from "../components/header";
import Footer from "../components/footer";

function Admin() {
    return (
        <div>
            <Header/>
            <AdminPanel/>
            <Footer/>
        </div>
    );
}
export default Admin;