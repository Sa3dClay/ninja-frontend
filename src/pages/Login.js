import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();

        await login(email, password);
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

            <button type="submit" disabled={isLoading}>
                Login
            </button>

            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Login;
