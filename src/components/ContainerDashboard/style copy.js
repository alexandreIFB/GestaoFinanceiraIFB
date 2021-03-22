import styled from "styled-components";

export const Container = styled.main`
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
    }

    /* painel com preços */

    .panel {
        margin: 30px;
        margin-left: 120px;
        width: 70vw;
        height: 85vh;
        border-radius: 50px;
        background-color: #f9f9f9;
        font-size: 35px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
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
        width: 1110px;
        height: 600px;
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
    }
`;
