const BASE_URL = import.meta.env.VITE_API_URL;

export async function getQuestions() {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    const res = await fetch(`${BASE_URL}questions`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Gagal ambil pertanyaan");

    return data;
}

export async function submitAnswers(answers) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    const res = await fetch(`${BASE_URL}answers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(answers),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Gagal submit jawaban");

    return data;
}
