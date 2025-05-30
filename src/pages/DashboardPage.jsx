import {Link, useNavigate} from "react-router-dom";
import Button from "../component/ui/Button.jsx";

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-layout">
                <h1>Dashboard</h1>
                <Link to="/question" className="create-link">
                    Coba Question
                </Link>
                <Button variant="danger" onClick={handleLogout}>Keluar</Button>
            </div>
        </div>
    );
}

export default DashboardPage;
