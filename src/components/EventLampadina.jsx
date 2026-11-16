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
              <p className={accesa ? "accesa" : "spenta"}>  </p>
            {accesa ? <p>Lampadina accesa</p> : <p>Lampadina spenta</p>}
        </div>

    );
}

export default EventLampadina;