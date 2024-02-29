import App from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Link from "@/Components/Link";

export default function Show({ auth, quiz, rewards, questions  }) {
    const user = usePage().props.auth.user;

    return (
        <App auth={auth}>
            <Head title="Show Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="pb-7 sm:flex sm:items-center">
                        <div className="sm:flex-auto pb-2 max-w-7xl flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-white">
                                Organization Details
                            </h1>

                            <Link
                                className="text-white"
                                href={route("organizations.index")}
                            >
                                Go Back
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-8">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                                                        Create a new quiz reward
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Create a new quiz reward for this organization
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
                                )
                                }
                                {rewards.map((reward) => (
                                    <div
                                        key={reward.id}
                                        className="overflow-hidden rounded-lg bg-white shadow"
                                    >
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
                                                        {reward.title}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {reward.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

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
                                                Create a new question for this quiz
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
                        )
                        }
                    </div>

                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {questions.map((question) => (
                                <div
                                    key={question.id}
                                    className="overflow-hidden rounded-lg bg-white shadow"
                                >
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
                                                    {question.quiz_text}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {question.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </App>
    );
}
