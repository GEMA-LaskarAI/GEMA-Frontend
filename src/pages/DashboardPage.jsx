import { Link, useNavigate } from "react-router-dom";
import Button from "../component/ui/Button.jsx";
import { useEffect, useState } from "react";

function DashboardPage() {
    const navigate = useNavigate();
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const stored = sessionStorage.getItem("recommendations");
        if (stored) {
            setRecommendations(JSON.parse(stored));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
                <div className="dashboard-left">
                    <div className="recommendation-card">
                        <h2>Rekomendasi Jurusan</h2>

                        {recommendations && recommendations.length > 0 ? (
                            <div className="recommendation-list">
                                {recommendations.map((item, index) => (
                                    <div key={index} className="recommendation-item">
                                        <h4>
                                            {index + 1}. {item.name}
                                        </h4>
                                        {item.probability && (
                                            <p>Probabilitas: {item.probability}%</p>
                                        )}
                                    </div>
                                ))}
                                <div className="recommendation-footer">
                                    <Link to="/question" className="link-retry">
                                        🔁 Ulangi Pertanyaan
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="no-recommendation">
                                <p>
                                    Belum ada rekomendasi. Silakan lengkapi data minat & nilai
                                    kamu terlebih dahulu.
                                </p>
                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/question")}
                                    className="recommendation-button"
                                >
                                    Isi Minat dan Bakat
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="dashboard-right">
                    <div className="profile-card">
                        <h3>Profil Singkat</h3>
                        <p><strong>Nama:</strong> John Doe</p>
                        <p><strong>Email:</strong> johndoe@email.com</p>
                        <Button variant="danger" onClick={handleLogout}>
                            Keluar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
