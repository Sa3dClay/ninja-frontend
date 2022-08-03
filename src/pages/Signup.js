import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isLoading, error } = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault();

        await signup(email, password);
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

            <button type="submit" disabled={isLoading}>
                Signup
            </button>

            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Signup;
