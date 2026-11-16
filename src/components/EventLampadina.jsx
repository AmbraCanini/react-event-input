import { useState } from "react";

function EventLampadina() {
    const [accesa, setAccesa] = useState(false);
    function cambiaStato() {
        setAccesa(!accesa);
    }
    return (
        <div>
            <button onClick={cambiaStato}>
                Cambia stato
            </button>
            {accesa && <p>Lampadina accesa</p>}
        </div>
    );
}

export default EventLampadina;