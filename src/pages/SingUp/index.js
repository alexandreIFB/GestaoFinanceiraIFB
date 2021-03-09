import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

function SingIn() {
    const adminUser = {
        username: "admin",
        password: "admin123",
    };

    const [user, setUser] = useState({ username: "", password: "" });

    const [error, setError] = useState("");

    const Login = ({ username, password }) => {
        if (
            username === adminUser.username &&
            password === adminUser.password
        ) {
            setUser({
                username: username,
                password: password,
            });
            console.log("Loggin Sucess");
        } else {
            console.log("Login invalid");
            setError("Login invalid");
        }
    };

    const Logout = () => {
        setUser({
            username: "",
            password: "",
        });
        console.log("Logout");
    };

    return (
        <div className="App">
            {user.username !== "" ? (
                <div className="welcome">
                    <h2>
                        Welcome, <span>{user.username}</span>
                    </h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} setError={setError} />
            )}
        </div>
    );
}

export default SingIn;
