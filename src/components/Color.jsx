
import { useState } from "react";

function Color() {
    const [color, setColor] = useState("black");
    const [selectedColor, setSelectedColor] = useState("black");

    function selezionaColore(event) {
        setSelectedColor(event.target.value);
    }

    function cambiaColore() {
        setColor(selectedColor);
    }

    return (
        <div>
            <div className={color}>
            </div>

            <select onChange={selezionaColore} value={selectedColor}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="black">black</option>
            </select>

            <button onClick={cambiaColore}>
                Cambia colore
            </button>
        </div>
    );
}

export default Color;
