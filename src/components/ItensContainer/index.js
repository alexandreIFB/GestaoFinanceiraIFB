import React, { useState } from "react";

import Popup from "../Popup/index";

function ItensContainer({ name, price }) {
    const [trigger, setTrigger] = useState({ trigger: false });

    return (
        <>
            <div class="itens">
                <p class={name}>{name.toUpperCase()}</p> <p>R$ {price}</p>
                <button onClick={() => setTrigger({ trigger: true })}></button>
            </div>
            <Popup trigger={trigger.trigger} setTrigger={setTrigger}>
                <div class="popup">
                    <form class="popup-form">
                        <br />
                        <label for="addvalor">Adicionar um valor </label>
                        <br />
                        <input type="number" id="addvalor" name="addvalor" />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </Popup>
        </>
    );
}

export default ItensContainer;
