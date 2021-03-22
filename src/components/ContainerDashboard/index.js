import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container } from "./style";

import Popup from "../Popup/index";

import ItensContainer from "../ItensContainer";

function ContainerDashboard() {
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
    ];
    const itensC = [
        {
            name: "alimentacao",
            price: 250,
        },
        {
            name: "lazer",
            price: 300,
        },
        {
            name: "compras",
            price: 700,
        },
        {
            name: "aluguel",
            price: 1000.29,
        },
        {
            name: "agua",
            price: 150,
        },
        {
            name: "luz",
            price: 350,
        },
    ];

    const [panelMonth, setPanelMonth] = useState(months[0]);

    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.getElementById("month").innerHTML = panelMonth;
    });

    /*const itensRender = ({ name, price }) => {
        return (
            <>
                <div class="itens">
                    <p class={name}>{name.toUpperCase()}</p> <p>R$ {price}</p>
                    <button></button>
                </div>
                <Popup trigger={false}>
                    <div id={`pop${name}`} class="popup">
                        <Link to="#" class="close">
                            &times;
                        </Link>
                        <form class="popup-form">
                            <br />
                            <label for="addvalor">Adicionar um valor </label>
                            <br />
                            <input
                                type="number"
                                id="addvalor"
                                name="addvalor"
                            />
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                    <Link to="#" class="close-popup"></Link>
                </Popup>
            </>
        );
    };*/

    const buttonMonth = (month) => {
        return (
            <button class="months" onClick={() => setPanelMonth(month)}>
                <Link href="" class="fill-div">
                    {month}
                </Link>
            </button>
        );
    };

    return (
        <Container>
            <div class="lateral-scroll scroll-style">
                {months.map(buttonMonth)}
            </div>
            <div class="panel">
                <div>
                    {" "}
                    <p id="month" class="month">
                        {panelMonth}
                    </p>
                </div>
                <div class="itens-container">
                    {}
                    {itensC.map(ItensContainer)}
                </div>
                <div class="total">
                    <p>Total do mês: R$ 1500,00</p>
                </div>
            </div>
        </Container>
    );
}

export default ContainerDashboard;
