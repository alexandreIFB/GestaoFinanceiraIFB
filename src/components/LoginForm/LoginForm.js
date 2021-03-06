import React, { useState } from "react";

import { Main } from "./styled";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function LoginForm({ Login, error, setError }) {
    const [details, setDetails] = useState({
        username: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    };

    return (
        <Main className="container">
            <h2>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <form onSubmit={submitHandler}>
                <div className="input-field">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                        onChange={(e) => {
                            setDetails({
                                ...details,
                                username: e.target.value,
                            });
                            setError("");
                        }}
                        value={details.username}
                    />
                    <div className="underline"></div>
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        onChange={(e) => {
                            setDetails({
                                ...details,
                                password: e.target.value,
                            });
                            setError("");
                        }}
                        value={details.password}
                    />
                    <div className="underline"></div>
                </div>
                <input type="submit" value="Entrar" />
            </form>

            <div className="footer">
                <span>
                    <Link to="./register">Criar Conta</Link>
                </span>
                <div className="social-fields">
                    <div className="social-field twitter">
                        <Link to="login">
                            <FontAwesomeIcon icon={["fab", "twitter"]} /> Sign
                            in with twitter
                        </Link>
                    </div>
                </div>
                <div className="social-fields">
                    <div className="social-field facebook">
                        <Link to="login">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />{" "}
                            Sign in with facebook
                        </Link>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default LoginForm;
