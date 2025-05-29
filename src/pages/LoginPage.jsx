import {useEffect, useState} from "react";
import Input from "../component/ui/Input.jsx";
import Button from "../component/ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from "../services/authService.js";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

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

        try {
            const res = await loginUser({
                email: username,
                password,
            });

            localStorage.setItem("token", res.data.access_token);
            console.log("Login berhasil:", res);
            navigate("/dashboard");

        } catch (err) {
            console.error("Login gagal:", err.message);
            alert(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>

                <form onSubmit={handleLogin} className="login-form">
                    <Input
                        label="Email atau Username"
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

                    <Button type="submit">Masuk</Button>
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
