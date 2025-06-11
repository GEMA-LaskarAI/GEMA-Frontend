import { useNavigate } from "react-router-dom";
import Button from "../component/ui/Button.jsx";

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/");
    };

    // Dummy rekomendasi, bisa diganti nanti dari backend/API
    const recommendations = [
        {
            name: "Teknik Informatika",
            probability: 87.2,
        },
        {
            name: "Sistem Informasi",
            probability: 82.5,
        },
        {
            name: "Ilmu Komputer",
            probability: 78.1,
        },
    ];

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
                                        <p>Probabilitas: {item.probability}%</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-recommendation">
                                <p>
                                    Belum ada rekomendasi. Silakan lengkapi data minat & nilai
                                    kamu terlebih dahulu.
                                </p>
                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/input-nilai")}
                                    className="recommendation-button"
                                >
                                    Isi Data Sekarang
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="dashboard-right">
                    <div className="profile-card">
                        <h3>Profil Singkat</h3>
                        <p>
                            <strong>Nama:</strong> John Doe
                        </p>
                        <p>
                            <strong>Email:</strong> johndoe@email.com
                        </p>
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
