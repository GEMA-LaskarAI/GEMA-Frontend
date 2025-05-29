import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Input from "../component/ui/Input.jsx";
import Button from "../component/ui/Button.jsx";
import { registerUser } from "../services/authService";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isFormValid = name && email && password;
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await registerUser({ name, email, password });
            const token = res.data.access_token;

            localStorage.setItem("token", token);
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
                <h1 className="login-title">Daftar</h1>

                <form onSubmit={handleRegister} className="login-form">
                    <Input
                        label="Nama Lengkap"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                    />
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@email.com"
                    />
                    <Input
                        label="Kata Sandi"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />

                    {error && <p className="form-error">{error}</p>}

                    <Button type="submit" disabled={loading || !isFormValid}>
                        {loading ? "Mendaftarkan..." : "Daftar"}
                    </Button>
                </form>

                <p className="login-bottom-text">
                    Udah punya akun?{" "}
                    <Link to="/login" className="create-link">
                        Masuk sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
