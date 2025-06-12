import { useEffect, useState } from "react";
import { getQuestions, submitAnswers } from "../services/questionService";
import Button from "../component/ui/Button.jsx";
import {useNavigate} from "react-router-dom";

function QuestionPage() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getQuestions()
            .then((res) => {
                setQuestions(res.data);
                setAnswers(res.data.map((q) => ({ question_id: q.id, score: 0 })));
            })
            .catch((err) => alert("Gagal mengambil pertanyaan: " + err.message));
    }, []);

    const updateAnswer = (questionId, score) => {
        setAnswers((prev) =>
            prev.map((a) =>
                a.question_id === questionId ? { ...a, score } : a
            )
        );
    };

    const handleSubmit = async () => {
        const unanswered = answers.find((a) => a.score === 0);
        if (unanswered) {
            const target = document.getElementById(`question-${unanswered.question_id}`);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "center" });
                target.classList.add("highlight-question");
                setTimeout(() => target.classList.remove("highlight-question"), 2000);
            }
            return;
        }

        try {
            setIsSubmitting(true);
            const res = await submitAnswers(answers);

            const recommendations = res?.data;
            if (recommendations) {
                sessionStorage.setItem("recommendations", JSON.stringify(recommendations));
            }

            alert("Jawaban berhasil dikirim!");
            navigate("/dashboard");
        } catch (err) {
            alert("Gagal submit: " + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="question-page">
            <div className="question-layout">
                <div className="question-header">
                    <label>Asesmen Kepribadian</label>
                </div>

                {questions.map((q) => (
                    <div
                        key={q.id}
                        id={`question-${q.id}`}
                        className="question-card"
                    >
                        <p className="question-text">{q.text}</p>
                        <div className="scale-options">
                            <span className="scale-label">Sangat Tidak Setuju</span>
                            {[1, 2, 3, 4, 5].map((val) => (
                                <label key={val} className="scale-item">
                                    <input
                                        type="radio"
                                        name={`q-${q.id}`}
                                        value={val}
                                        checked={
                                            answers.find((a) => a.question_id === q.id)?.score === val
                                        }
                                        onChange={() => updateAnswer(q.id, val)}
                                    />
                                    <span>{val}</span>
                                </label>
                            ))}
                            <span className="scale-label">Sangat Setuju</span>
                        </div>
                    </div>
                ))}

                <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ marginTop: "2rem" }}
                >
                    {isSubmitting ? "Mengirim..." : "Kirim Jawaban"}
                </Button>
            </div>
        </div>
    );
}

export default QuestionPage;
