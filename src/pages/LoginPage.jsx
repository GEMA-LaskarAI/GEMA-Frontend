import { useState } from "react";
import Input from "../component/ui/Input.jsx";
import Button from "../component/ui/Button.jsx";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ username, password, rememberMe });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>

                <form onSubmit={handleLogin} className="login-form">
                    <Input
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="jane@example.com"
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />

                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
