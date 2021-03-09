import React, { useState } from "react";

import { Main } from "./styled";

import { Link } from "react-router-dom";

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
                <div class="input-field">
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
                    <div class="underline"></div>
                </div>
                <div class="input-field">
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
                    <div class="underline"></div>
                </div>
                <input type="submit" value="Entrar" />
            </form>

            <div class="footer">
                <span>Or Connect with social media</span>
                <div class="social-fields">
                    <div class="social-field twitter">
                        <Link href="login">
                            <i class="fab fa-twitter"></i> Sign in with twitter
                        </Link>
                    </div>
                </div>
                <div class="social-fields">
                    <div class="social-field facebook">
                        <Link href="login">
                            <i class="fab fa-facebook-f"></i> Sign in with
                            facebook
                        </Link>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default LoginForm;
