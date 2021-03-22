import React from "react";

import { Menu } from "./style";
import imgProfile from "../../assets/Arthur.jpg";

function Header({ Login, error, setError }) {
    return (
        <Menu>
            <nav class="menu-nav">
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Meus gastos</a>
                    </li>
                    <li>
                        <a href="#">Anos</a>
                    </li>
                </ul>
            </nav>
            <div class="menu-profile">
                <div class="profile-nome">
                    <p>Arthur Monici</p>
                </div>
                <div class="profile-picture">
                    <img src={imgProfile} alt="" />
                </div>
            </div>
        </Menu>
    );
}

export default Header;
