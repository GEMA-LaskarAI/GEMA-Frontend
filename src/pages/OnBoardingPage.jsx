import { Link, useNavigate } from "react-router-dom";

function OnBoardingPage() {
    const navigate = useNavigate();

    const steps = [
        {
            number: 1,
            title: "Buat Akun",
            desc: "Mulai dengan mendaftar di sistem GEMA.",
            action: () => navigate("/register"),
            btn: "Daftar Sekarang",
        },
        {
            number: 2,
            title: "Tes Minat & Bakat",
            desc: "Ikuti asesmen untuk mengenal potensi dan kepribadian kamu.",
            action: () => navigate("/question"),
            btn: "Mulai Tes",
        },
        {
            number: 3,
            title: "Lihat Rekomendasi",
            desc: "Dapatkan 3 jurusan paling cocok berdasarkan hasil asesmen.",
            action: () => navigate("/dashboard"),
            btn: "Lihat Hasil",
        },
    ];

    const team = [
        {
            icon: "🧠",
            name: "Daniel Jeans Ricard Silitonga",
            id: "A002YBM531",
            campus: "Institut Teknologi Bandung",
        },
        {
            icon: "💻",
            name: "Muhammad Dila",
            id: "A764YBM310",
            campus: "Universitas Teknologi Bandung",
        },
        {
            icon: "📊",
            name: "Willy Wilsen",
            id: "A002YBF500",
            campus: "Institut Teknologi Bandung",
        },
        {
            icon: "🌟",
            name: "Cecilia Agnes Vechrisda Manalu",
            id: "A764XBM530",
            campus: "Universitas Teknologi Bandung",
        },
    ];

    return (
        <>
            {/* Navbar */}
            <div className="top-navbar">
                <div className="nav-left">🌟 GEMA</div>
                <div className="nav-right">
                    <Link to="/login" className="nav-button">Login</Link>
                    <Link to="/register" className="nav-button nav-button--primary">Daftar</Link>
                </div>
            </div>

            {/* Hero */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Generasi Emas Masa Depan</h1>
                    <p>
                        Temukan jurusan kuliah yang paling cocok berdasarkan data minat, nilai,
                        dan potensi kamu. Yuk mulai perjalananmu bersama GEMA.
                    </p>
                    <button
                        className="ui-button ui-button--primary"
                        style={{ maxWidth: "200px", width: "100%" }}
                        onClick={() => {
                            const section = document.getElementById("get-started");
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Mulai Sekarang
                    </button>
                </div>
            </div>

            {/* Get Started Steps */}
            <div className="getstarted-page" id="get-started">
                <div className="getstarted-header">
                    <h1>GEMA 101: Panduan Memulai</h1>
                    <p>
                        Berikut langkah-langkah untuk mengenal dirimu dan mendapatkan jurusan
                        terbaik melalui GEMA.
                    </p>
                </div>

                <div className="getstarted-grid">
                    {steps.map((step) => (
                        <div key={step.number} className="getstarted-card">
                            <div className="step-circle">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section (boxed layout, dynamic) */}
            <div className="getstarted-page" id="team-section">
                <div className="getstarted-header">
                    <h1>Tim GEMA</h1>
                    <p>Proyek ini dikembangkan oleh anggota tim LAI25-SM069.</p>
                </div>

                <div className="getstarted-grid">
                    {team.map((member, index) => (
                        <div key={index} className="getstarted-card">
                            <div className="step-circle">{member.icon}</div>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.campus}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default OnBoardingPage;
