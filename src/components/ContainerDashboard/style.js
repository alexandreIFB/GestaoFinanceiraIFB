import styled from "styled-components";

export const Container = styled.main`
    /* container de elementos abaixo do menu */

    /* min-width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #8e2de3 0%, #4a00e0 100%);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around; */

    // escolha de meses lateral
    /* .lateral-scroll {
        min-width: 320px;
        height: 100vh;
        overflow: auto;
        background: #8e54e9;
        display: flex;
        flex-direction: column;
        scrollbar-width: none;
    } */

    width: 100%;
    height: 92vh;
    background: linear-gradient(90deg, #8e2de3 0%, #4a00e0 100%);
    display: flex;
    flex-direction: row;

    /* escolha de meses lateral */
    .lateral-scroll {
        width: 320px;
        height: 92vh;
        overflow: hidden;
        overflow-y: scroll;
        background: #8e54e9;
        display: flex;
        flex-direction: column;
        scrollbar-width: none;
    }

    .scroll-style::-webkit-scrollbar {
        width: 19px;
    }

    .scroll-style::-webkit-scrollbar-track {
        background: rgb(0, 0, 0);

        border: 10px solid transparent;
        border-top: 0px;
        border-bottom: 0px;
        background-clip: content-box;
    }

    .scroll-style::-webkit-scrollbar-thumb {
        background: rgb(25, 25, 25);
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
    }

    .months {
        display: block;
        width: 273px;
        height: 103px;
        border-radius: 8px;
        background: #f9f9f9;
        justify-content: center;
        text-align: center;
        margin: 10px;
        font-size: 14px;
    }

    /* painel com preços */

    .panel {
        margin: 90px 30px 5px 90px;

        border-radius: 50px;
        background-color: #f9f9f9;
        font-size: 35px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    @media (max-width: 1782px) and (min-width: 1007px) {
        .container {
            margin: 0 auto;
            min-width: 100vw;
            min-height: 100vh;
            background: linear-gradient(90deg, #8e2de3 0%, #4a00e0 100%);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        .panel {
            max-width: 35vw;
            min-width: 550px;
            max-height: calc(100vh - 30px);
        }
        .itens-container {
            max-width: 550px;
            max-height: 500px;
            overflow: hidden;
            overflow-y: scroll;
        }
        .lateral-scroll {
            display: none;
        }
    }

    @media (max-width: 1006px) {
        .container {
            min-width: 100vw;
            min-height: 100vh;
        }
        .panel {
            margin: 90px 30px 5px 10px;
            max-width: 35vw;
            min-width: 550px;
            max-height: calc(100vh - 30px);
        }
        .itens-container {
            max-width: 550px;
            max-height: 500px;
            overflow: hidden;
            overflow-y: scroll;
        }
        .lateral-scroll {
            display: none;
        }
    }

    .month {
        position: relative;
        left: 40px;
        top: 20px;
        display: flex;
        margin-bottom: 30px;
    }

    .month::before {
        content: "";
        position: absolute;
        height: 6px;
        width: 30px;
        bottom: 7px;
        left: 0;
        border-radius: 8px;
        background: linear-gradient(45deg, #8e2de2, #4a00e0);
    }

    .itens-container {
        width: 1100px;
        height: 500px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .itens {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        margin: 15px;
        width: 513px;
        height: 107px;
        background-color: #f9f9f9;
        border-radius: 8px;
        border: 3px #8e54e9 solid;
        position: relative;
    }

    .itens:hover {
        transform: scale(0.9);
    }

    .itens p {
        margin-left: 10px;
    }
    /* gradiente */
    .alimentacao::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(45deg, #8e2de2, #4a00e0);
    }

    .compras::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(180deg, #f7b563 0%, #eacda3 100%);
    }

    .lazer::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(180deg, #43e97b 0%, #38f9d7 100%);
    }

    .aluguel::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(180deg, #00c6fb 0%, #005bea 100%);
    }

    .agua::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(180deg, #e3abec 0%, #fcc2cc 100%);
    }

    .luz::before {
        content: "";
        position: absolute;
        height: 67px;
        width: 8px;
        bottom: 20px;
        left: 12px;
        top: 20px;
        border-radius: 8px;
        background: linear-gradient(180deg, #fe7289 0%, #fdd6bd 100%);
    }

    .total {
        margin: 40px;
        padding: 20px;
    }

    .total p {
        font-size: 30px;
        font-weight: 600;
    }

    /*  teste */
    a.fill-div {
        padding: 40px;
        text-align: center;
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: #000;
    }
    .fill-div:hover {
        color: #8e2de2;
        font-weight: bold;
    }

    i.fa-angle-down {
        color: white;
        font-size: 24px;
    }
    .arrow {
        text-align: center;
        margin: 0 auto;
        padding: 24px;
    }
    .months {
        box-shadow: 5px 5px 5px #000;
    }

    .months:hover {
        transform: scale(1.05);
    }

    .itens button {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: transparent;
        cursor: pointer;
        outline: none;
    }

    .popup-form label {
        font-size: 25px;
    }

    input[type="text"],
    select,
    input[type="number"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type="submit"] {
        width: 100%;
        background-color: #8e2de2;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: solid;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #8e2de2;
    }

    .btn {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px;
        transition: background 0.3s;
    }
`;
