import { Link, useNavigate } from "react-router-dom";
import Button from "../component/ui/Button.jsx";
import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

function DashboardPage() {
    const navigate = useNavigate();
    const [recommendations, setRecommendations] = useState([]);
    const [profile, setProfile] = useState({ name: "", email: "" });

    useEffect(() => {
        getProfile()
            .then((res) => {
                const student = res.data.student;
                setRecommendations(student.recommendations || []);
                setProfile({
                    name: student.name,
                    email: student.email,
                });
            })
            .catch((err) => {
                alert("Gagal mengambil profil: " + err.message);
                navigate("/login");
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">

                {/* Profil */}
                <div className="dashboard-right">
                    <div className="profile-card">
                        <h3>Profil Singkat</h3>
                        <p><strong>Nama:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <Button variant="danger" onClick={handleLogout}>Keluar</Button>
                    </div>
                </div>

                {/* Rekomendasi */}
                <div className="dashboard-left">
                    <div className="recommendation-card">
                        <div className="getstarted-header">
                            <h1>Rekomendasi Jurusan Kamu</h1>
                            {recommendations.length > 0 && (
                                <p>Berikut 3 jurusan yang paling cocok berdasarkan hasil asesmenmu.</p>
                            )}
                        </div>

                        {recommendations && recommendations.length > 0 ? (
                            <>
                                <div className="getstarted-grid">
                                    {recommendations.map((item, index) => (
                                        <div key={index} className="getstarted-card">
                                            <div className="step-circle">{index + 1}</div>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                                    <Link to="/question" className="link-retry">
                                        🔁 Ulangi Pertanyaan
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="no-recommendation">
                                <p>
                                    Belum ada rekomendasi. Silakan isi pertanyaan minat & bakat kamu terlebih dahulu.
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

            </div>
        </div>
    );
}

export default DashboardPage;
