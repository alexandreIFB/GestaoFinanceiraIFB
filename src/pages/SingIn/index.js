import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

import { Redirect } from "react-router-dom";

import "./index.css";

function SingIn() {
    const adminUser = {
        username: "admin",
        password: "admin123",
    };

    const [user, setUser] = useState({ loged: false });

    const [error, setError] = useState("");

    const Login = ({ username, password }) => {
        if (
            username === adminUser.username &&
            password === adminUser.password
        ) {
            setUser({
                loged: true,
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
            {user.loged ? (
                <Redirect to="/dashboard"></Redirect>
            ) : (
                <LoginForm Login={Login} error={error} setError={setError} />
            )}
        </div>
    );
}

export default SingIn;