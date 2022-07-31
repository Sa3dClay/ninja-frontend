import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <form className="login" onSubmit={handleLogin}>
            <h2>Login</h2>

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

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
