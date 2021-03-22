import styled from "styled-components";

export const Div = styled.div`
    position: fixed;
    padding: 10px;
    width: 100%;
    height: 100vh;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0, 0.2);
    -webkit-transition: opacity 0.5s, visibility 0s linear 0.5s;
    transition: opacity 0.5s, visibility 0s linear 0.5s;
    z-index: 1;
    opacity: 1;
    border: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        position: relative;
        padding: 32px;
        max-width: 640px;
        height: 340px;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px) saturate(100%) contrast(45%)
            brightness(130%);
        border-radius: 10px;
    }

    .popup-inner .close-btn {
        background-color: transparent;
        position: absolute;
        top: 16px;
        right: 16px;
        font-size: 20px;
        color: #8e2de2;
    }
`;
