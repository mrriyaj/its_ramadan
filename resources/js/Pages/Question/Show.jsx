import App from "@/Layouts/AppLayout";
import { Head, usePage, useForm } from "@inertiajs/react";
import { RadioGroup } from '@headlessui/react'
import { useState, useEffect } from 'react'
import CheckIcon from "@/Components/CheckIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Show({ auth, question, quizRegistration, options }) {
    const user = usePage().props.auth.user;

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const { data, setData, post, processing, errors, reset } = useForm({
        quiz_registration_id: quizRegistration.id,
        question_id: question.id,
        answer: selectedOption.value,
    });

    useEffect(() => {
        setData({
            quiz_registration_id: quizRegistration.id,
            question_id: question.id,
            answer: selectedOption.value,
        });
    }, [selectedOption]);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('quiz-answers.store'));
    }

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

            <div className="py-12">
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <RadioGroup value={selectedOption} onChange={setSelectedOption}>
                            <RadioGroup.Label className="sr-only">Options</RadioGroup.Label>
                            <div className="space-y-2">
                                {options.map((option) => (
                                    <RadioGroup.Option
                                        key={option.id}
                                        value={option}
                                        className={({ active, checked }) =>
                                            `${active
                                                ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                                                : ''
                                            }
                                            ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                                            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                                }`}
                                                            >
                                                                {option.text}
                                                            </RadioGroup.Label>
                                                        </div>
                                                    </div>
                                                    {checked && (
                                                        <div className="flex-shrink-0 text-white">
                                                            <CheckIcon className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                    <PrimaryButton type="submit" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </form>
            </div>

        </App>
    );
}
