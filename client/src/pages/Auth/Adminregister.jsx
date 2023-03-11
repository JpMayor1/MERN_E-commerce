import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Adminregister() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [adminSecretKey, setAdminSecretKey] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (confirmPass !== password) {
                throw new Error("Passwords do not match");
            }
            const secretKey = "DandJ2023";
            if (adminSecretKey !== secretKey) {
                setError("Invalid secret key.");
            }
            const res = await fetch(
                "http://localhost:5000/auth/admin/register",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                }
            );
            if (res.status === 404 || res.status === 500) {
                throw new Error("Invalid inputs! try again.");
            }
            const data = await res.json();
            console.log(data);
            navigate("/admin/login");
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
            <div className="wrapper">
                <h2 className="title">Register as Admin</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
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
                    <label htmlFor="adminSecretKey">
                        <input
                            type="text"
                            id="adminSecretKey"
                            placeholder="Enter secret key"
                            onChange={(e) => setAdminSecretKey(e.target.value)}
                        />
                    </label>
                    <button className="submit-btn">Register</button>
                    <Link to="/admin/login">
                        Already have an account? <p>Login now !</p>
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

export default Adminregister;
