import { useState } from "react";

function PasswordChanger() {
    const [password, setPassword] = useState("");
    const [confermaPassword, setConfermaPassword] = useState("");  
    
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
    </div>
);

}

export default PasswordChanger;