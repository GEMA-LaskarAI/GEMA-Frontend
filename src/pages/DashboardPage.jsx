import {Link, useNavigate} from "react-router-dom";
import Button from "../component/ui/Button.jsx";

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-layout">
                <h1>Dashboard</h1>
                <Button onClick={handleLogout}>Keluar</Button>
                <Link to="/question" className="create-link">
                    Question
                </Link>
            </div>
        </div>
    );
}

export default DashboardPage;
