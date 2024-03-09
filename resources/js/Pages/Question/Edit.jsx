import App from "@/Layouts/AppLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState, useEffect } from "react";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
];

const status = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
];

const questionsNo = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
];

export default function Edit({ auth, quiz, question }) {
    const [selectedOption, setSelectedOption] = useState(options.find((option) => option.value === question.correct_answer));
    const [selectedStatus, setSelectedStatus] = useState(status.find((st) => st.value === question.status));
    const [selectedQuestionsNo, setSelectedQuestionsNo] = useState(questionsNo.find((qNo) => qNo.value === question.question_number));

    console.log(question);

    const { data, setData, post, processing, errors, reset } = useForm({
        quiz_id: quiz.id,
        title: question.title,
        question_number: selectedQuestionsNo.value,
        quiz_text: question.quiz_text,
        quiz_image: question.quiz_image,
        quiz_audio: question.quiz_audio,
        quiz_video: question.quiz_video,
        answer_option1: question.answer_option1,
        image_option1: question.image_option1,
        answer_option2: question.answer_option2,
        image_option2: question.image_option2,
        answer_option3: question.answer_option3,
        image_option3: question.image_option3,
        answer_option4: question.answer_option4,
        image_option4: question.image_option4,
        correct_answer: selectedOption.value,
        quiz_explanation: question.quiz_explanation,
        quiz_hint: question.quiz_hint,
        quiz_points: question.quiz_points,
        status: selectedStatus.value,
        start_date: question.start_date,
        end_date: question.end_date,
        created_by: auth.user.id,
    });

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            correct_answer: selectedOption.value,
            status: selectedStatus.value,
            question_number: question.question_number,
        }));
    }, [selectedOption, selectedStatus, selectedQuestionsNo]);

    const submit = (e) => {
        e.preventDefault();
        post(route("questions.user.update", { question: question.id }), {
            onSuccess: () => reset(),
        });
    };

    return (
        <App auth={auth}>
            <Head title="Update Question" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                                Update Question
                            </h2>

                            <form
                                onSubmit={submit}
                                encType="multipart/form-data"
                                className="space-y-8"
                            >
                                <div className="space-y-8 divide-y divide-gray-200">
                                    <div className="pt-8">
                                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="title"
                                                        value="Title"
                                                    />
                                                    <TextInput
                                                        id="title"
                                                        name="title"
                                                        value={data.title}
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={errors.title}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="question_number"
                                                        value="Question Number"
                                                    />

                                                    <Listbox
                                                        // disabled
                                                        value={
                                                            selectedQuestionsNo
                                                        }
                                                        onChange={
                                                            setSelectedQuestionsNo
                                                        }
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <div className="mt-1 relative">
                                                                    <span className="block w-full rounded-md shadow-sm">
                                                                        <Listbox.Button className="relative w-full  dark:text-white rounded-md border-none  bg-white dark:bg-gray-900 pl-3 pr-10 py-3  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {
                                                                                    selectedQuestionsNo.label
                                                                                }
                                                                            </span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                                <ChevronUpDownIcon
                                                                                    className="h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>
                                                                    </span>

                                                                    <Transition
                                                                        show={
                                                                            open
                                                                        }
                                                                        as={
                                                                            Fragment
                                                                        }
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options
                                                                            static
                                                                            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                                                        >
                                                                            {questionsNo.map(
                                                                                (
                                                                                    qNo
                                                                                ) => (
                                                                                    <Listbox.Option
                                                                                        key={
                                                                                            qNo.value
                                                                                        }
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `${active
                                                                                                ? "text-main-900 bg-main-100"
                                                                                                : "text-gray-900 dark:text-gray-100"
                                                                                            }
                            cursor-default select-none relative py-2 pl-3 pr-9`
                                                                                        }
                                                                                        value={
                                                                                            qNo
                                                                                        }
                                                                                    >
                                                                                        {({
                                                                                            selected,
                                                                                            active,
                                                                                        }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`${selected
                                                                                                            ? "font-semibold"
                                                                                                            : "font-normal"
                                                                                                        }
                                block truncate`}
                                                                                                >
                                                                                                    {
                                                                                                        qNo.label
                                                                                                    }
                                                                                                </span>

                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`${active
                                                                                                                ? "text-main-600"
                                                                                                                : "text-main-600"
                                                                                                            }
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                                                                                    >
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                    <InputError
                                                        message={
                                                            errors.question_number
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-5">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_text"
                                                        value="Question"
                                                    />
                                                    <TextInput
                                                        id="quiz_text"
                                                        name="quiz_text"
                                                        className="mt-1 block w-full"
                                                        value={data.quiz_text}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_text",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_text
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {/*
                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_image"
                                                        value="Question Image"
                                                    />
                                                    <input
                                                        id="quiz_image"
                                                        type="file"
                                                        name="quiz_image"
                                                        className="mt-1 block w-full"
                                                        // value={data.quiz_image}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_image",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_image
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_audio"
                                                        value="Question Audio"
                                                    />
                                                    <input
                                                        id="quiz_audio"
                                                        type="file"
                                                        name="quiz_audio"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_audio",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_audio
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_video"
                                                        value="Question Video"
                                                    />
                                                    <input
                                                        id="quiz_video"
                                                        type="file"
                                                        name="quiz_video"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_video",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_video
                                                        }
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="answer_option1"
                                                        value="Option 1"
                                                    />
                                                    <TextInput
                                                        id="answer_option1"
                                                        type="text"
                                                        name="answer_option1"
                                                        className="mt-1 block w-full"
                                                        autoComplete="answer_option1"
                                                        value={
                                                            data.answer_option1
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "answer_option1",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.answer_option1
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="image_option1"
                                                        value="Option 1 Image"
                                                    />
                                                    <input
                                                        id="image_option1"
                                                        type="file"
                                                        name="image_option1"
                                                        autoComplete="image_option1"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image_option1",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.image_option1
                                                        }
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="answer_option2"
                                                        value="Option 2"
                                                    />
                                                    <TextInput
                                                        id="answer_option2"
                                                        type="text"
                                                        name="answer_option2"
                                                        className="mt-1 block w-full"
                                                        autoComplete="answer_option2"
                                                        value={
                                                            data.answer_option2
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "answer_option2",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.answer_option2
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="image_option2"
                                                        value="Option 2 Image"
                                                    />
                                                    <input
                                                        id="image_option2"
                                                        type="file"
                                                        name="image_option2"
                                                        autoComplete="image_option2"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image_option2",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.image_option2
                                                        }
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="answer_option3"
                                                        value="Option 3"
                                                    />
                                                    <TextInput
                                                        id="answer_option3"
                                                        type="text"
                                                        name="answer_option3"
                                                        autoComplete="answer_option3"
                                                        className="mt-1 block w-full"
                                                        value={
                                                            data.answer_option3
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "answer_option3",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.answer_option3
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="image_option3"
                                                        value="Option 3 Image"
                                                    />
                                                    <input
                                                        id="image_option3"
                                                        type="file"
                                                        name="image_option3"
                                                        autoComplete="image_option3"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image_option3",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.image_option3
                                                        }
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="answer_option4"
                                                        value="Option 4"
                                                    />
                                                    <TextInput
                                                        id="answer_option4"
                                                        type="text"
                                                        name="answer_option4"
                                                        autoComplete="answer_option4"
                                                        className="mt-1 block w-full"
                                                        value={
                                                            data.answer_option4
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "answer_option4",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.answer_option4
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            {/* <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="image_option4"
                                                        value="Option 4 Image"
                                                    />
                                                    <input
                                                        id="image_option4"
                                                        type="file"
                                                        name="image_option4"
                                                        autoComplete="image_option4"
                                                        className="mt-1 block w-full"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image_option4",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.image_option4
                                                        }
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="correct_answer"
                                                        value="Correct Answer"
                                                    />
                                                    <Listbox
                                                        value={selectedOption}
                                                        onChange={
                                                            setSelectedOption
                                                        }
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <div className="mt-1 relative">
                                                                    <span className="block w-full rounded-md shadow-sm">
                                                                        <Listbox.Button className="relative w-full  dark:text-white rounded-md border-none  bg-white dark:bg-gray-900 pl-3 pr-10 py-3  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {
                                                                                    selectedOption.label
                                                                                }
                                                                            </span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                                <ChevronUpDownIcon
                                                                                    className="h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>
                                                                    </span>

                                                                    <Transition
                                                                        show={
                                                                            open
                                                                        }
                                                                        as={
                                                                            Fragment
                                                                        }
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options
                                                                            static
                                                                            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                                                        >
                                                                            {options.map(
                                                                                (
                                                                                    option
                                                                                ) => (
                                                                                    <Listbox.Option
                                                                                        key={
                                                                                            option.value
                                                                                        }
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `${active
                                                                                                ? "text-main-900 bg-main-100"
                                                                                                : "text-gray-900 dark:text-gray-100"
                                                                                            }
                            cursor-default select-none relative py-2 pl-3 pr-9`
                                                                                        }
                                                                                        value={
                                                                                            option
                                                                                        }
                                                                                    >
                                                                                        {({
                                                                                            selected,
                                                                                            active,
                                                                                        }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`${selected
                                                                                                            ? "font-semibold"
                                                                                                            : "font-normal"
                                                                                                        }
                                block truncate`}
                                                                                                >
                                                                                                    {
                                                                                                        option.label
                                                                                                    }
                                                                                                </span>

                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`${active
                                                                                                                ? "text-main-600"
                                                                                                                : "text-main-600"
                                                                                                            }
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                                                                                    >
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                    <InputError
                                                        message={
                                                            errors.correct_answer
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_hint"
                                                        value="Hint"
                                                    />
                                                    <TextInput
                                                        id="quiz_hint"
                                                        type="text"
                                                        name="quiz_hint"
                                                        autoComplete="quiz_hint"
                                                        className="mt-1 block w-full"
                                                        value={data.quiz_hint}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_hint",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_hint
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_points"
                                                        value="Points"
                                                    />
                                                    <TextInput
                                                        id="quiz_points"
                                                        type="text"
                                                        name="quiz_points"
                                                        autoComplete="quiz_points"
                                                        className="mt-1 block w-full"
                                                        value={data.quiz_points}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_points",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_points
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-6">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="quiz_explanation"
                                                        value="Explanation"
                                                    />
                                                    <TextInput
                                                        id="quiz_explanation"
                                                        type="text"
                                                        name="quiz_explanation"
                                                        autoComplete="quiz_explanation"
                                                        className="mt-1 block w-full"
                                                        value={
                                                            data.quiz_explanation
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_explanation",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.quiz_explanation
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="start_date"
                                                        value="Start Date"
                                                    />
                                                    <TextInput
                                                        id="start_date"
                                                        type="datetime-local"
                                                        name="start_date"
                                                        autoComplete="start_date"
                                                        className="mt-1 block w-full"
                                                        value={data.start_date}
                                                        onChange={(e) =>
                                                            setData(
                                                                "start_date",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.start_date
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="end_date"
                                                        value="End Date"
                                                    />
                                                    <TextInput
                                                        id="end_date"
                                                        type="datetime-local"
                                                        name="end_date"
                                                        autoComplete="end_date"
                                                        className="mt-1 block w-full"
                                                        value={data.end_date}
                                                        onChange={(e) =>
                                                            setData(
                                                                "end_date",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.end_date
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="status"
                                                        value="Status"
                                                    />
                                                    <Listbox
                                                        value={selectedStatus}
                                                        onChange={
                                                            setSelectedStatus
                                                        }
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <div className="mt-1 relative">
                                                                    <span className="block w-full rounded-md shadow-sm">
                                                                        <Listbox.Button className="relative w-full  dark:text-white rounded-md border-none  bg-white dark:bg-gray-900 pl-3 pr-10 py-3  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {
                                                                                    selectedStatus.label
                                                                                }
                                                                            </span>
                                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                                <ChevronUpDownIcon
                                                                                    className="h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>
                                                                    </span>

                                                                    <Transition
                                                                        show={
                                                                            open
                                                                        }
                                                                        as={
                                                                            Fragment
                                                                        }
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options
                                                                            static
                                                                            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                                                        >
                                                                            {status.map(
                                                                                (
                                                                                    st
                                                                                ) => (
                                                                                    <Listbox.Option
                                                                                        key={
                                                                                            st.value
                                                                                        }
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `${active
                                                                                                ? "text-main-900 bg-main-100"
                                                                                                : "text-gray-900 dark:text-gray-100"
                                                                                            }
                            cursor-default select-none relative py-2 pl-3 pr-9`
                                                                                        }
                                                                                        value={
                                                                                            st
                                                                                        }
                                                                                    >
                                                                                        {({
                                                                                            selected,
                                                                                            active,
                                                                                        }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`${selected
                                                                                                            ? "font-semibold"
                                                                                                            : "font-normal"
                                                                                                        }
                                block truncate`}
                                                                                                >
                                                                                                    {
                                                                                                        st.label
                                                                                                    }
                                                                                                </span>

                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`${active
                                                                                                                ? "text-main-600"
                                                                                                                : "text-main-600"
                                                                                                            }
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                                                                                    >
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                    <InputError
                                                        message={errors.status}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Update Question
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
