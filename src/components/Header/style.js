import styled from "styled-components";

export const Menu = styled.main`
    width: 100%;
    height: 8vh;
    background-color: #0a1d60;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .menu p {
        color: white;
    }

    .menu-nav {
        margin-left: 30px;
        margin-top: 25px;
    }

    .menu-nav ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
    .menu-nav ul li {
        margin-left: 10px;
    }

    .menu-nav a {
        text-decoration: none;
        color: #f9f9f9;
    }
    .menu-nav a:hover {
        color: #8e54e9;
    }

    .menu-profile {
        display: flex;
    }

    .profile-nome p {
        color: white;
        text-align: center;
    }

    .profile-nome {
        text-align: center;
        margin: 0 auto;
        padding: 24px;
        width: 170px;
        height: 74px;
    }

    .profile-picture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 12px;
    }

    .profile-picture img {
        max-width: 50px;
        max-height: 50px;
    }
`;
