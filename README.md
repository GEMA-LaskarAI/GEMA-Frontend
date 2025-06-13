# 🎓 GEMA - Generasi Emas Masa Depan

GEMA (Generasi Emas Masa Depan) adalah aplikasi web yang membantu siswa SMA/SMK menemukan jurusan kuliah yang paling sesuai dengan minat, bakat, dan kepribadian mereka.

Aplikasi ini menggunakan sistem asesmen kepribadian berbasis Machine Learning, yang telah diintegrasikan langsung ke dalam backend.

---

## 🚀 Fitur Utama

- ✍️ Registrasi dan Login pengguna
- 🧠 Tes Minat & Bakat (Asesmen Kepribadian)
- 🤖 Rekomendasi jurusan dari model Machine Learning
- 📄 Penjelasan deskriptif tiap jurusan
- 🔁 Bisa mengulang asesmen kapan saja

---

## 🧠 Integrasi Machine Learning

Backend GEMA telah terhubung langsung dengan model Machine Learning yang dilatih dari data minat dan kepribadian. Model ini memberikan prediksi **3 jurusan terbaik** yang paling cocok untuk setiap pengguna.

Rekomendasi disimpan dan ditampilkan ulang di dashboard pengguna setelah asesmen.

---

## 📦 Tech Stack

### Frontend
- **React** + **Vite**
- **React Router DOM** (navigasi)
- **Vanilla CSS** (tanpa framework)
- **Component-Based Design**

### Backend (Eksternal)
- Dibangun pakai Python
- Pake struktur modular ala Flask / FastAPI
- Terhubung langsung dengan model Machine Learning di folder ml_model/
- Endpoint seperti /answers handle submit jawaban, lalu model ML proses & kirim hasil rekomendasi

---

## 🛠️ Cara Install & Setup Lokal

### 1. Clone Repository

```bash
    git clone https://github.com/GEMA-LaskarAI/GEMA-Frontend.git
    cd nama-proyek
```

### 2. Install dependencies

```bash
    npm install
    # atau
    yarn install
```

### 3. Buat file .env
Di root project, buat file .env:

```bash
    VITE_API_URL=http://your-api-url-here/
```

### 4. Jalankan aplikasi
```bash
    npm run dev
    # atau
    yarn dev
```

## 🧪 Cara Menggunakan Aplikasi
- 🔐 Daftar atau login ke akun kamu
- 🧠 Ikuti tes minat & bakat
- 📊 Lihat rekomendasi jurusan yang muncul di dashboard
- 🔁 Ulangi tes kapan pun jika ingin rekomendasi terbaru

## 👨‍💻 Tim Pengembang
| Nama                           | ID         | Kampus                        |
| ------------------------------ | ---------- | ----------------------------- |
| Daniel Jeans Ricard Silitonga  | A002YBM531 | Institut Teknologi Bandung    |
| Muhammad Dila                  | A764YBM310 | Universitas Teknologi Bandung |
| Willy Wilsen                   | A002YBF500 | Institut Teknologi Bandung    |
| Cecilia Agnes Vechrisda Manalu | A764XBM530 | Universitas Teknologi Bandung |
