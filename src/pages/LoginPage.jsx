import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/ui/Input.jsx";
import Button from "../component/ui/Button.jsx";
import { loginUser } from "../services/authService.js";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isFormValid = username && password;

    useEffect(() => {
        const savedUsername = localStorage.getItem("rememberUsername");
        if (savedUsername) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    }, []);

    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem("rememberUsername", username);
        } else {
            localStorage.removeItem("rememberUsername");
        }
    }, [rememberMe, username]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await loginUser({ email: username, password });
            const token = res.data.access_token;

            if (rememberMe) {
                localStorage.setItem("token", token);
            } else {
                sessionStorage.setItem("token", token);
            }

            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>

                <form onSubmit={handleLogin} className="login-form">
                    <Input
                        label="Email"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="jane@example.com"
                    />
                    <Input
                        label="Kata Sandi"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />

                    <div className="login-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Ingat saya
                        </label>
                    </div>

                    {error && <p className="form-error">{error}</p>}

                    <Button type="submit" disabled={loading || !isFormValid}>
                        {loading ? "Sedang Masuk..." : "Masuk"}
                    </Button>
                </form>

                <p className="login-bottom-text">
                    Belum punya akun?{" "}
                    <Link to="/register" className="create-link">
                        Daftar sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
