import { useState } from "react";

function PasswordChanger() {
    const [password, setPassword] = useState("");
    const [confermaPassword, setConfermaPassword] = useState("");  
    const [messaggio, setMessaggio] = useState("");
   
    function verificaPassword() {
    password !== "" && password === confermaPassword
        ? setMessaggio("Password cambiata")
        : setMessaggio("Le password non coincidono");
    setPassword("");
    setConfermaPassword("");
}
    return (
    <div>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nuova password"
        />

        <input
            type="password"
            value={confermaPassword}
            onChange={(e) => setConfermaPassword(e.target.value)}
            placeholder="Conferma password"
        />

            <button onClick={verificaPassword}>
                Cambia password
            </button>

            <p>{messaggio}</p>
    </div>
);

}

export default PasswordChanger;