import { useState } from "react";

function Newsletter() {
   const [isChecked, setIsChecked] = useState(false);
   const [confermato, setConfermato] = useState(false);

        return (
        <div>
            {!confermato && (
                <>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label>Acconsento a proseguire</label>

                    <button
                        disabled={!isChecked}
                        onClick={() => setConfermato(true)}
                    >
                        Continua
                    </button>
                </>
            )}

            {confermato && <p>Grazie! Conferma completata.</p>}
        </div>
    );
}

export default Newsletter;