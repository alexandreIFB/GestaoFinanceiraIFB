import React, { useState } from "react";

import { Main } from "./styled";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

function ResgistroForm({ Registro, error, setError }) {
    const [details, setDetails] = useState({
        email: "",
        confirmEmail: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        Registro(details);
    };

    return (
        <Main className="container">
            <h2>Register</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <form onSubmit={submitHandler}>
                <div className="input-field">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        onChange={(e) => {
                            setDetails({
                                ...details,
                                email: e.target.value,
                            });
                            setError("");
                        }}
                        value={details.email}
                    />
                    <div className="underline"></div>
                </div>
                <div className="input-field">
                    <input
                        type="email"
                        name="confirmEmail"
                        id="confirmEmail"
                        placeholder="Confimr Your Email"
                        onChange={(e) => {
                            setDetails({
                                ...details,
                                confirmEmail: e.target.value,
                            });
                            setError("");
                        }}
                        value={details.confirmEmail}
                    />
                    <div className="underline"></div>
                </div>
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
                        placeholder="Enter Your password"
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
                <div className="input-field">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Your Password"
                        onChange={(e) => {
                            setDetails({
                                ...details,
                                confirmPassword: e.target.value,
                            });
                            setError("");
                        }}
                        value={details.confirmPassword}
                    />
                    <div className="underline"></div>
                </div>
                <input type="submit" value="Cadastrar" />
            </form>

            <div className="footer">
                <div className="social-fields">
                    <div className="social-field twitter">
                        <Link to="login">
                            <FontAwesomeIcon icon={["fab", "twitter"]} /> Sign
                            Up with twitter
                        </Link>
                    </div>
                </div>
                <div className="social-fields">
                    <div className="social-field facebook">
                        <Link to="login">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} />{" "}
                            Sign Up with facebook
                        </Link>
                    </div>
                </div>
                <span>
                    <Link to="./">Ou faça Login</Link>
                </span>
            </div>
        </Main>
    );
}

export default ResgistroForm;
