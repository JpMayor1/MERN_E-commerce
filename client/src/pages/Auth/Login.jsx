import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/auth/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }
            console.log(data);
            navigate("/products");
        } catch (error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2500);
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                <h2 className="title">Login as User</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            autoComplete="none"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className="submit-btn">Login</button>
                    <Link to="/register">
                        Don't have an account? <p>Register now !</p>
                    </Link>
                    <Link to="/admin/login">
                        Login as Admin<p>Here!</p>
                    </Link>
                </form>
                {error && (
                    <div className="error-msg">
                        <p>Invalid inputs! try again.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
