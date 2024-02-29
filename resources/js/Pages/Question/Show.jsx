import App from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Link from "@/Components/Link";

export default function Show({ auth, question }) {
    const user = usePage().props.auth.user;

    return (
        <App auth={auth}>
            <Head title="Show Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
                            <p>{question.quiz_text}</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold mb-4">Question Details</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-bold">Quiz ID:</p>
                                <p>{question.quiz_id}</p>
                                <p className="font-bold">Title:</p>
                                <p>{question.title}</p>
                                <p className="font-bold">Question Number:</p>
                                <p>{question.question_number}</p>
                                <p className="font-bold">Quiz Text:</p>
                                <p>{question.quiz_text}</p>
                                <p className="font-bold">Quiz Image:</p>
                                <p>{question.quiz_image}</p>
                                <p className="font-bold">Quiz Audio:</p>
                                <p>{question.quiz_audio}</p>
                                <p className="font-bold">Quiz Video:</p>
                                <p>{question.quiz_video}</p>
                            </div>
                            <div>
                                <p className="font-bold">Answer Option 1:</p>
                                <input type="radio" name="answerOption" value="1" />
                                <label>{question.answer_option1}</label>
                                <p className="font-bold">Image Option 1:</p>
                                <p>{question.image_option1}</p>
                                <p className="font-bold">Answer Option 2:</p>
                                <input type="radio" name="answerOption" value="2" />
                                <label>{question.answer_option2}</label>
                                <p className="font-bold">Image Option 2:</p>
                                <p>{question.image_option2}</p>
                                <p className="font-bold">Answer Option 3:</p>
                                <input type="radio" name="answerOption" value="3" />
                                <label>{question.answer_option3}</label>
                                <p className="font-bold">Image Option 3:</p>
                                <p>{question.image_option3}</p>
                                <p className="font-bold">Answer Option 4:</p>
                                <input type="radio" name="answerOption" value="4" />
                                <label>{question.answer_option4}</label>
                                <p className="font-bold">Image Option 4:</p>
                                <p>{question.image_option4}</p>
                                <p className="font-bold">Correct Answer:</p>
                                <p>{question.correct_answer}</p>
                                <p className="font-bold">Quiz Explanation:</p>
                                <p>{question.quiz_explanation}</p>
                                <p className="font-bold">Quiz Hint:</p>
                                <p>{question.quiz_hint}</p>
                                <p className="font-bold">Quiz Points:</p>
                                <p>{question.quiz_points}</p>
                                <p className="font-bold">Status:</p>
                                <p>{question.status}</p>
                                <p className="font-bold">Start Date:</p>
                                <p>{question.start_date}</p>
                                <p className="font-bold">End Date:</p>
                                <p>{question.end_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
