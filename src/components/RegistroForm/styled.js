import styled from "styled-components";

export const Main = styled.main`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
    * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        background: linear-gradient(45deg, #8e2de2, #4a00e0);
        background-repeat: no-repeat;
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    background-color: white;
    min-width: 350px;
    min-height: 40vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    input {
        width: 100%;
    }

    h2 {
        font-weight: 600;
        margin-bottom: 2rem;
        position: relative;
    }

    h2::before {
        content: "";
        position: absolute;
        height: 4px;
        width: 22px;
        bottom: 3px;
        left: 0;
        border-radius: 8px;
        background: linear-gradient(45deg, #8e2de2, #4a00e0);
    }

    .error {
        color: red;
    }
    form {
        display: flex;
        flex-direction: column;
        align-content: space-between;
    }

    .input-field {
        position: relative;
        background: #ededed;
        margin-bottom: 16px;
        width: 270px;
        height: 38px;
        border-radius: 3px;
        display: flex;
        padding: 10px 10px 10px 10px;
    }

    .input-field input {
        outline: none;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.7);
        background-color: #ededed;
    }

    .input-field input::placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
    }

    form input[type="submit"] {
        margin-top: 1rem;
        padding: 0.4rem;
        background: linear-gradient(to left, #4776e6, #8e54e9);
        cursor: pointer;
        color: white;
        font-size: 0.9rem;
        font-weight: 300;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    form input[type="submit"]:hover {
        letter-spacing: 0.5px;
        background: linear-gradient(to right, #4776e6, #8e54e9);
    }

    .footer {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

    .footer span {
        margin-top: 0.5rem;
    }
    .footer span a {
        color: #c3c3c3;
        font-size: 0.8rem;
        text-align: center;
    }
    .footer span a:hover {
        color: #8e54e9;
    }

    .footer .social-field {
        padding: 0.4rem;
        border-radius: 4px;
        font-size: 0.85rem;
        width: 100%;
        cursor: pointer;
        margin-top: 1rem;
    }

    .footer.social-field a i {
        padding: 10px;
        margin: 0 1rem;
        width: 15px;
    }

    .footer .social-field a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 13.16px;
    }

    .footer .social-field.twitter {
        background: linear-gradient(to right, #56a7f2, #468aca);
    }
    .footer .social-field.facebook {
        background: linear-gradient(to right, #1e3c62, #2a5298);
    }
`;
