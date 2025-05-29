import { useEffect, useState } from "react";
import { getQuestions, submitAnswers } from "../services/questionService";
import Button from "../component/ui/Button.jsx";

function QuestionPage() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

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
        const incomplete = answers.some((a) => a.score === 0);
        if (incomplete) return alert("Semua pertanyaan wajib dijawab!");

        try {
            await submitAnswers(answers);
            alert("Jawaban berhasil dikirim!");
        } catch (err) {
            alert("Gagal submit: " + err.message);
        }
    };

    return (
        <div className="question-page">
            <div className="question-layout">
                <div className="question-header">
                    <label>Asesmen Kepribadian</label>
                </div>

                {questions.map((q) => (
                    <div key={q.id} className="question-card">
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
                    disabled={answers.some((a) => a.score === 0)}
                >
                    Kirim Jawaban
                </Button>

            </div>
        </div>
    );
}

export default QuestionPage;
