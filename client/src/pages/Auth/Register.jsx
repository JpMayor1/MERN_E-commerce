import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (confirmPass !== password) {
                throw new Error("Passwords do not match");
            }
            const res = await fetch("http://localhost:5000/auth/register", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ username, email, password }),
            });
            if (res.status === 404 || res.status === 500) {
                throw new Error("Invalid inputs! try again.");
            }
            const data = await res.json();
            console.log(data);
            navigate("/login");
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError(false);
            }, 2500);
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <Link to="/" className="back-to-home">🡠 HOME</Link>
            <div className="wrapper">
                <h2 className="title">Register as User</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            autoComplete="off"
                            onChange={(e) =>
                                setUsername((prev) => e.target.value)
                            }
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            autoComplete="none"
                            onChange={(e) => setEmail((prev) => e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={(e) =>
                                setPassword((prev) => e.target.value)
                            }
                        />
                    </label>
                    <label htmlFor="confirmPass">
                        <input
                            type="password"
                            id="confirmPass"
                            placeholder="Confirm password"
                            onChange={(e) =>
                                setConfirmPass((prev) => e.target.value)
                            }
                        />
                    </label>
                    <button className="submit-btn">Register</button>
                    <Link to="/login">
                        Already have an account? <p>Login now !</p>
                    </Link>
                    <Link to="/admin/register">
                        Register as Admin<p>Here!</p>
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

export default Register;
