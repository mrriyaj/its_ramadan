import App from "@/Layouts/AppLayout";
import { Head, usePage, useForm } from "@inertiajs/react";
import { RadioGroup } from "@headlessui/react";
import { useState, useEffect } from "react";
import CheckIcon from "@/Components/CheckIcon";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import HeaderSection from "@/Components/HeaderSection";
import RemainingTime from "@/Components/RemainingTime";

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
        post(route("quiz-answers.store"));
    };

    return (
        <App auth={auth}>
            <Head title="Show Organization" />
            <HeaderSection Header="Question" Title={question.title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="space-y-5">
                                <div className="sm:flex gap-5 grid">
                                    <div className="flex ">
                                        <div className="border-e-2 pr-5">
                                            <p className="text-sm text-gray-900">
                                                Question No
                                            </p>
                                            <span className="text-2xl font-bold">
                                                {question.question_number}
                                            </span>
                                        </div>
                                        <div className="sm:border-e-2 px-5">
                                            <p className="text-sm text-gray-900">
                                                Question Point
                                            </p>
                                            <span className="text-2xl font-bold">
                                                {question.quiz_points}
                                            </span>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className="flex gap-5 border-e-2 pr-5">
                                        <div>
                                            <p className="text-sm text-gray-900">
                                                Start Date
                                            </p>
                                            <span className="text-2xl font-bold">
                                                {question.start_date}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-900">
                                                End Date
                                            </p>
                                            <span className="text-2xl font-bold">
                                                {question.end_date}
                                            </span>
                                        </div>
                                    </div> */}

                                    <div>
                                        <p className="text-sm text-gray-900">
                                            Time Remaining
                                        </p>
                                        <span className="text-2xl font-bold">
                                            <RemainingTime
                                                qEndDate={question.end_date}
                                            />
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-900">
                                        Question
                                    </p>
                                    <span className="text-2xl font-bold">
                                        {question.quiz_text}
                                    </span>
                                </div>
                            </div>

                            <div className="py-12">
                                <form onSubmit={submit}>
                                    <div className="mb-4">
                                        <RadioGroup
                                            value={selectedOption}
                                            onChange={setSelectedOption}
                                        >
                                            <RadioGroup.Label className="sr-only">
                                                Options
                                            </RadioGroup.Label>
                                            <div className="space-y-2">
                                                {options.map((option) => (
                                                    <RadioGroup.Option
                                                        key={option.id}
                                                        value={option}
                                                        className={({
                                                            active,
                                                            checked,
                                                        }) =>
                                                            `${
                                                                active
                                                                    ? "ring-2 ring-white/60 ring-offset-2 ring-offset-main-300"
                                                                    : ""
                                                            }
                                            ${
                                                checked
                                                    ? "bg-main-500 text-white"
                                                    : "bg-white"
                                            }
                                            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                                        }
                                                    >
                                                        {({
                                                            active,
                                                            checked,
                                                        }) => (
                                                            <>
                                                                <div className="flex w-full items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="text-sm">
                                                                            <RadioGroup.Label
                                                                                className={`font-medium  ${
                                                                                    checked
                                                                                        ? "text-white"
                                                                                        : "text-gray-900"
                                                                                }`}
                                                                            >
                                                                                <div className="sm:flex gap-5 items-center">
                                                                                    {option.image && (
                                                                                        <img
                                                                                            className="rounded-md sm:w-60 sm:h-60  my-5"
                                                                                            src={
                                                                                                option.image
                                                                                            }
                                                                                            alt="question image"
                                                                                        />
                                                                                    )}
                                                                                    {option.text && (
                                                                                        <span className="text-md">
                                                                                            {
                                                                                                option.text
                                                                                            }
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            </RadioGroup.Label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="hidden sm:block">
                                                                        {checked && (
                                                                            <div className="flex-shrink-0 text-white">
                                                                                <CheckIcon className="w-6 h-6" />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Submit your answer
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-12">
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <RadioGroup
                            value={selectedOption}
                            onChange={setSelectedOption}
                        >
                            <RadioGroup.Label className="sr-only">
                                Options
                            </RadioGroup.Label>
                            <div className="space-y-2">
                                {options.map((option) => (
                                    <RadioGroup.Option
                                        key={option.id}
                                        value={option}
                                        className={({ active, checked }) =>
                                            `${
                                                active
                                                    ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                                                    : ""
                                            }
                                            ${
                                                checked
                                                    ? "bg-sky-900/75 text-white"
                                                    : "bg-white"
                                            }
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
                                                                className={`font-medium  ${
                                                                    checked
                                                                        ? "text-white"
                                                                        : "text-gray-900"
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
            </div> */}
        </App>
    );
}
