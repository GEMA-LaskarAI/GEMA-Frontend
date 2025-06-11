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
            title: "Isi Nilai & Data",
            desc: "Masukkan nilai rapor dan data minat kamu.",
            action: () => navigate("/input-nilai"),
            btn: "Isi Nilai",
        },
        {
            number: 3,
            title: "Tes Kepribadian",
            desc: "Ikuti asesmen untuk mengenal potensi diri.",
            action: () => navigate("/question"),
            btn: "Mulai Tes",
        },
        {
            number: 4,
            title: "Lihat Rekomendasi",
            desc: "Dapatkan 3 jurusan paling cocok buat kamu.",
            action: () => navigate("/dashboard"),
            btn: "Lihat Hasil",
        },
    ];

    const team = [
        {
            icon: "🌟",
            name: "Muhammad Dila",
            role: "Frontend Developer",
        },
        {
            icon: "💡",
            name: "Nama 2",
            role: "Machine Learning Engineer",
        },
        {
            icon: "📊",
            name: "Nama 3",
            role: "Machine Learning Engineer",
        },
        {
            icon: "🧠",
            name: "Nama 4",
            role: "Machine Learning Engineer",
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
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default OnBoardingPage;
