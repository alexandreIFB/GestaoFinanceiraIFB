import React, { useState } from "react";
import ResgistroForm from "../../components/RegistroForm/RegistroForm";
import { Redirect } from "react-router-dom";

function SingIn() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ email: "", username: "", password: "" });
    const [register, setRegister] = useState(false);

    const Registro = ({
        email,
        confirmEmail,
        username,
        password,
        confirmPassword,
    }) => {
        if (
            email !== confirmEmail ||
            password !== confirmPassword ||
            email === "" ||
            password === "" ||
            username === ""
        ) {
            setError("Dados Invalidos");
        } else {
            setUser({ email: email, username: username, password: password });
            setRegister(true);
        }
    };

    return (
        <div className="App">
            {register ? (
                <Redirect to="/dashboard"></Redirect>
            ) : (
                <ResgistroForm
                    Registro={Registro}
                    error={error}
                    setError={setError}
                ></ResgistroForm>
            )}
        </div>
    );
}

export default SingIn;
