import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Div } from "./styled";

export default function Popup(props) {
    return props.trigger ? (
        <Div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger({ trigger: false })}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {props.children}
            </div>
        </Div>
    ) : (
        ""
    );
}
