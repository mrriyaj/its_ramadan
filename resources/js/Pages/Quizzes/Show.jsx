import App from "@/Layouts/AppLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import Link from "@/Components/Link";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Show({
    auth,
    quiz,
    rewards,
    questions,
    isRegistered,
    organization,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        quiz_id: quiz.id,
        user_id: user.id,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("quiz-registrations.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <App auth={auth}>
            <Head title="Show Organization" />

            <div className="py-12   ">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="pb-7 sm:flex sm:items-center">
                        <div className="sm:flex-auto pb-2 max-w-7xl flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-white">
                                Organization Details
                            </h1>

                            <Link
                                className="text-white"
                                href={route("organizations.user.index")}
                                value="Go Back"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-md sm:p-5 p-5 sm:flex sm:justify-normal justify-center gap-10  sm:items-center mb-5">
                        <div>
                            <img
                                src={organization.logo}
                                alt="img"
                                className="bg-cover sm:w-24 sm:h-24 w-full h-auto rounded-md"
                            />
                        </div>

                        <div className="">
                            <div className="mt-5 sm:mt-0">
                                <div>
                                    <span className="font-bold text-xl">
                                        {organization.name}
                                    </span>
                                </div>

                                <div className="my-2">
                                    <span className=" text-xl text-gray-800">
                                        {organization.description}
                                    </span>
                                </div>
                            </div>

                            <PrimaryButton>View Organization</PrimaryButton>
                        </div>

                        <div></div>
                    </div>

                    <div className="bg-white rounded-md sm:p-5 p-5 sm:flex sm:justify-normal justify-center gap-10  sm:items-center ">
                        {/* bg-[url('/image/bg.jpg')] bg-contain bg-no-repeat bg-right */}
                        <div>
                            <img
                                src={organization.logo}
                                alt="img"
                                className="bg-cover sm:w-60 sm:h-60 w-full h-auto rounded-md"
                            />
                        </div>

                        <div className="">
                            <div className="mt-5 sm:mt-0">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Quiz Title
                                    </p>
                                    <span className="font-bold text-xl">
                                        {quiz.title}
                                    </span>
                                </div>

                                <div className="my-2">
                                    <p className="text-sm text-gray-600">
                                        Quiz Description
                                    </p>
                                    <span className=" text-xl text-gray-800">
                                        {quiz.description}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-5 my-3">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        Start Date
                                    </p>
                                    <span className="font-bold">
                                        {quiz.start_date}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-600">
                                        End Date
                                    </p>
                                    <span className="font-bold">
                                        {quiz.end_date}
                                    </span>
                                </div>
                            </div>
                            <PrimaryButton>Join the Challenge</PrimaryButton>
                        </div>
                        {/* 
                        <div className="">
                            <h1 className="text-xl font-semibold  my-5">
                                Rewards From Organization
                            </h1>
                            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
                                {rewards.map((reward) => (
                                    <div
                                        key={reward.id}
                                        className="overflow-hidden rounded-md bg-white shadow "
                                    >
                                        <div className="p-3">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-14 h-14 rounded-full"
                                                        src="https://via.placeholder.com/150"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {reward.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {reward.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>

                    <div className="my-10">
                        <h1 className="text-xl font-semibold text-white my-5">
                            Rewards From Organization
                        </h1>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {rewards.map((reward) => (
                                <div
                                    key={reward.id}
                                    className="overflow-hidden rounded-md bg-white shadow my-2 "
                                >
                                    <div className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-14 h-14 rounded-full"
                                                    src="https://via.placeholder.com/150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-xl font-medium text-gray-900">
                                                    {reward.name}
                                                </p>
                                                <p className="text-md text-gray-500">
                                                    {reward.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={user.profile}
                                alt=""
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="focus:outline-none">
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                />
                                <p className="text-sm font-medium text-gray-900">
                                    {quiz.title}
                                </p>
                                <p className="truncate text-sm text-gray-500">
                                    {quiz.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <p className="text-sm">Start Date</p>
                                <span className="font-bold text-md">
                                    {quiz.start_date}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm">End Date</p>
                                <span className="font-bold text-md">
                                    {quiz.end_date}
                                </span>
                            </div>

                            <PrimaryButton className="" disabled={processing}>
                                Join To The Challenge
                            </PrimaryButton>
                        </div>
                    </div> */}

                    {/* <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <div className="flex flex-col items-center justify-center">
                                <div className="mb-4">
                                    <h1 className="text-2xl font-semibold text-gray-900">
                                        {quiz.title}
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        {quiz.description}
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center">
                                        <h1 className="text-2xl font-semibold text-gray-900">
                                            {quiz.start_date}
                                        </h1>
                                        <p className="text-sm text-gray-500 ml-2">
                                            Start Date
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <h1 className="text-2xl font-semibold text-gray-900">
                                            {quiz.end_date}
                                        </h1>
                                        <p className="text-sm text-gray-500 ml-2">
                                            End Date
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        {isRegistered ? (
                                            <p className="text-sm text-gray-500">
                                                You are already registered for
                                                this quiz
                                            </p>
                                        ) : (
                                            <form onSubmit={submit}>
                                                <PrimaryButton
                                                    className="ms-4"
                                                    disabled={processing}
                                                >
                                                    Join To The Challenge
                                                </PrimaryButton>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="max-w-7xl mx-auto ">
                        <div className="mt-8">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {quiz.created_by === user.id && (
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-16 h-16 rounded-full"
                                                        src="https://via.placeholder.com/150"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        Create a new quiz reward
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Create a new quiz reward
                                                        for this organization
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Link
                                                    href={`/reward/create/${quiz.id}`}
                                                    value="Create"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <h1 className="text-xl font-semibold text-white my-5">
                        Questions From Organization
                    </h1>
                    <div className="mt-8">
                        {quiz.created_by === user.id && (
                            <div className="overflow-hidden rounded-lg bg-white shadow">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://via.placeholder.com/150"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                Create a new question
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Create a new question for this
                                                quiz
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            href={`/questions/create/${quiz.id}`}
                                            value="Create"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {questions.map((question) => (
                                <div
                                    key={question.id}
                                    className="overflow-hidden rounded-lg bg-white shadow"
                                >
                                    <div className="p-6 space-y-2">
                                        <div className="items-center flex">
                                            <div className="flex-shrink-0">
                                                {/* <img
                                                    className="w-20 h-20 rounded-md "
                                                    src={question.quiz_image}
                                                    alt=""
                                                /> */}

                                                <div>
                                                    <p className="text-xs">
                                                        Question No
                                                    </p>
                                                    <span className="text-2xl font-bold">
                                                        {
                                                            question.question_number
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div>
                                                <p className="text-xs">
                                                    Question
                                                </p>
                                                <span className="text-xl font-bold">
                                                    {question.quiz_text}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="text-xs">
                                                    Start Date
                                                </p>
                                                <p className="font-bold text-sm">
                                                    {question.start_date}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs">
                                                    End Date
                                                </p>
                                                <p className="font-bold text-sm">
                                                    {question.end_date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Link
                                            className="w-full justify-center rounded-none"
                                            href={`/questions/${question.id}`}
                                            value="Answer Now"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
