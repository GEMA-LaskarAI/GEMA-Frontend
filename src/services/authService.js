const BASE_URL = import.meta.env.VITE_API_URL;

export async function loginUser({ email, password }) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Login gagal");
    }

    return await res.json();
}
