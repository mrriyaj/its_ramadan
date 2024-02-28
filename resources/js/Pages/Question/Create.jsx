import App from "@/Layouts/AppLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth, quiz }) {

    const { data, setData, post, processing, errors, reset } = useForm({
            quiz_id: quiz.id,
            title: '',
            day: '',
            quiz_text: '',
            quiz_image: null,
            quiz_audio: null,
            quiz_video: null,
            answer_option1: '',
            image_option1: null,
            answer_option2: '',
            image_option2: null,
            answer_option3: '',
            image_option3: null,
            answer_option4: '',
            image_option4: null,
            correct_answer: '',
            quiz_explanation: '',
            quiz_hint: '',
            quiz_points: '',
            status: '',
            start_date: '',
            end_date: '',
            created_by: ''
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("questions.user.store"), { onSuccess: () => reset() });
    }

    return (
        <App auth={auth}>
            <Head title="Create a new quiz" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Create a new quiz</h2>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div className="grid grid-cols-2 gap-4">
                                <div >
                                    <InputLabel forInput="title" value="Title" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        autoComplete="title"
                                        value={data.title}
                                        onChange={(e) => setData("title", e.target.value)}
                                    />
                                    <InputError error={errors.title} />
                                </div>
                                <div >
                                    <InputLabel forInput="day" value="Day" />
                                    <TextInput
                                        id="day"
                                        type="text"
                                        name="day"
                                        autoComplete="day"
                                        value={data.day}
                                        onChange={(e) => setData("day", e.target.value)}
                                    />
                                    <InputError error={errors.day} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_text" value="Question" />
                                    <TextInput
                                        id="quiz_text"
                                        type="text"
                                        name="quiz_text"
                                        autoComplete="quiz_text"
                                        value={data.quiz_text}
                                        onChange={(e) => setData("quiz_text", e.target.value)}
                                    />
                                    <InputError error={errors.quiz_text} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_image" value="Question Image" />
                                    <TextInput
                                        id="quiz_image"
                                        type="file"
                                        name="quiz_image"
                                        autoComplete="quiz_image"
                                        value={data.quiz_image}
                                        onChange={(e) => setData("quiz_image", e.target.files[0])}
                                    />
                                    <InputError error={errors.quiz_image} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_audio" value="Question Audio" />
                                    <TextInput
                                        id="quiz_audio"
                                        type="file"
                                        name="quiz_audio"
                                        autoComplete="quiz_audio"
                                        value={data.quiz_audio}
                                        onChange={(e) => setData("quiz_audio", e.target.files[0])}
                                    />
                                    <InputError error={errors.quiz_audio} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_video" value="Question Video" />
                                    <TextInput
                                        id="quiz_video"
                                        type="file"
                                        name="quiz_video"
                                        autoComplete="quiz_video"
                                        value={data.quiz_video}
                                        onChange={(e) => setData("quiz_video", e.target.files[0])}
                                    />
                                    <InputError error={errors.quiz_video} />
                                </div>
                                <div >
                                    <InputLabel forInput="answer_option1" value="Option 1" />
                                    <TextInput
                                        id="answer_option1"
                                        type="text"
                                        name="answer_option1"
                                        autoComplete="answer_option1"
                                        value={data.answer_option1}
                                        onChange={(e) => setData("answer_option1", e.target.value)}
                                    />
                                    <InputError error={errors.answer_option1} />
                                </div>
                                <div >
                                    <InputLabel forInput="image_option1" value="Option 1 Image" />
                                    <TextInput
                                        id="image_option1"
                                        type="file"
                                        name="image_option1"
                                        autoComplete="image_option1"
                                        value={data.image_option1}
                                        onChange={(e) => setData("image_option1", e.target.files[0])}
                                    />
                                    <InputError error={errors.image_option1} />
                                </div>
                                <div >
                                    <InputLabel forInput="answer_option2" value="Option 2" />
                                    <TextInput
                                        id="answer_option2"
                                        type="text"
                                        name="answer_option2"
                                        autoComplete="answer_option2"
                                        value={data.answer_option2}
                                        onChange={(e) => setData("answer_option2", e.target.value)}
                                    />
                                    <InputError error={errors.answer_option2} />
                                </div>
                                <div >
                                    <InputLabel forInput="image_option2" value="Option 2 Image" />
                                    <TextInput
                                        id="image_option2"
                                        type="file"
                                        name="image_option2"
                                        autoComplete="image_option2"
                                        value={data.image_option2}
                                        onChange={(e) => setData("image_option2", e.target.files[0])}
                                    />
                                    <InputError error={errors.image_option2} />
                                </div>
                                <div >
                                    <InputLabel forInput="answer_option3" value="Option 3" />
                                    <TextInput
                                        id="answer_option3"
                                        type="text"
                                        name="answer_option3"
                                        autoComplete="answer_option3"
                                        value={data.answer_option3}
                                        onChange={(e) => setData("answer_option3", e.target.value)}
                                    />
                                    <InputError error={errors.answer_option3} />
                                </div>
                                <div >
                                    <InputLabel forInput="image_option3" value="Option 3 Image" />
                                    <TextInput
                                        id="image_option3"
                                        type="file"
                                        name="image_option3"
                                        autoComplete="image_option3"
                                        value={data.image_option3}
                                        onChange={(e) => setData("image_option3", e.target.files[0])}
                                    />
                                    <InputError error={errors.image_option3} />
                                </div>
                                <div >
                                    <InputLabel forInput="answer_option4" value="Option 4" />
                                    <TextInput
                                        id="answer_option4"
                                        type="text"
                                        name="answer_option4"
                                        autoComplete="answer_option4"
                                        value={data.answer_option4}
                                        onChange={(e) => setData("answer_option4", e.target.value)}
                                    />
                                    <InputError error={errors.answer_option4} />
                                </div>
                                <div >
                                    <InputLabel forInput="image_option4" value="Option 4 Image" />
                                    <TextInput
                                        id="image_option4"
                                        type="file"
                                        name="image_option4"
                                        autoComplete="image_option4"
                                        value={data.image_option4}
                                        onChange={(e) => setData("image_option4", e.target.files[0])}
                                    />
                                    <InputError error={errors.image_option4} />
                                </div>
                                <div >
                                    <InputLabel forInput="correct_answer" value="Correct Answer" />
                                    <TextInput
                                        id="correct_answer"
                                        type="text"
                                        name="correct_answer"
                                        autoComplete="correct_answer"
                                        value={data.correct_answer}
                                        onChange={(e) => setData("correct_answer", e.target.value)}
                                    />
                                    <InputError error={errors.correct_answer} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_explanation" value="Explanation" />
                                    <TextInput
                                        id="quiz_explanation"
                                        type="text"
                                        name="quiz_explanation"
                                        autoComplete="quiz_explanation"
                                        value={data.quiz_explanation}
                                        onChange={(e) => setData("quiz_explanation", e.target.value)}
                                    />
                                    <InputError error={errors.quiz_explanation} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_hint" value="Hint" />
                                    <TextInput
                                        id="quiz_hint"
                                        type="text"
                                        name="quiz_hint"
                                        autoComplete="quiz_hint"
                                        value={data.quiz_hint}
                                        onChange={(e) => setData("quiz_hint", e.target.value)}
                                    />
                                    <InputError error={errors.quiz_hint} />
                                </div>
                                <div >
                                    <InputLabel forInput="quiz_points" value="Points" />
                                    <TextInput
                                        id="quiz_points"
                                        type="text"
                                        name="quiz_points"
                                        autoComplete="quiz_points"
                                        value={data.quiz_points}
                                        onChange={(e) => setData("quiz_points", e.target.value)}
                                    />
                                    <InputError error={errors.quiz_points} />
                                </div>
                                <div >
                                    <InputLabel forInput="status" value="Status" />
                                    <TextInput
                                        id="status"
                                        type="text"
                                        name="status"
                                        autoComplete="status"
                                        value={data.status}
                                        onChange={(e) => setData("status", e.target.value)}
                                    />
                                    <InputError error={errors.status} />
                                </div>
                                <div >
                                    <InputLabel forInput="start_date" value="Start Date" />
                                    <TextInput
                                        id="start_date"
                                        type="text"
                                        name="start_date"
                                        autoComplete="start_date"
                                        value={data.start_date}
                                        onChange={(e) => setData("start_date", e.target.value)}
                                    />
                                    <InputError error={errors.start_date} />
                                </div>
                                <div >
                                    <InputLabel forInput="end_date" value="End Date" />
                                    <TextInput
                                        id="end_date"
                                        type="text"
                                        name="end_date"
                                        autoComplete="end_date"
                                        value={data.end_date}
                                        onChange={(e) => setData("end_date", e.target.value)}
                                    />
                                    <InputError error={errors.end_date} />
                                </div>
                                <div >
                                    <InputLabel forInput="created_by" value="Created By" />
                                    <TextInput
                                        id="created_by"
                                        type="text"
                                        name="created_by"
                                        autoComplete="created_by"
                                        value={data.created_by}
                                        onChange={(e) => setData("created_by", e.target.value)}
                                    />
                                    <InputError error={errors.created_by} />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton processing={processing}>Create</PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </App>
    )

}
