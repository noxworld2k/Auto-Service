
const API = "http://localhost:3000";

const addData = async (userName, userEmail) => {
    let userData = {
        "userName": userName,
        "email": userEmail
    }
    fetch(`${API}/${userName}/email/${userEmail}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)})
        .then(response => response.json())
        .then(userData => {
            console.log(userData);
        })
        .catch(error => {
            console.log(error);
        });
}
export default addData;