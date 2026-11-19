import { useState } from "react";

function Preventivo() {
    const [tariffa, setTariffa] = useState(0);
    const [ore, setOre] = useState(0);
    const totale = tariffa * ore;

    return (
        <div>
<input
    type="number"
    value={tariffa}
    onChange={(e) => setTariffa(Number(e.target.value))}
    placeholder="Tariffa oraria"
/>

<input
    type="number"
    value={ore}
    onChange={(e) => setOre(Number(e.target.value))}
    placeholder="Ore lavorate"
/>
<p>Totale: {totale} €</p>
<p>
    {ore} ore x {tariffa} € = {totale} €
</p>
        </div>
    );
}

export default Preventivo;