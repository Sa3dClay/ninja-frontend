import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <form className="signup" onSubmit={handleSignup}>
            <h2>Signup</h2>

            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            ></input>

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            ></input>

            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
