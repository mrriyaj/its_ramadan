import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        organization_id: "",
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        approval_type: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("quizzes.store"), { onSuccess: () => reset() });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Quiz
                </h2>
            }
        >
            <Head title="Create Quiz" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="title"
                                        value="Quiz Title"
                                    />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Quiz Description"
                                    />

                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                        
                                <div>
                                    <InputLabel
                                        htmlFor="start_date"
                                        value="Quiz Start Date"
                                    />

                                    <TextInput
                                        id="start_date"
                                        name="start_date"
                                        type="date"
                                        value={data.start_date}
                                        className="mt-1 block w-full"
                                        autoComplete="start_date"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "start_date",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.start_date}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="end_date"
                                        value="Quiz End Date"
                                    />

                                    <TextInput
                                        id="end_date"
                                        name="end_date"
                                        type="date"
                                        value={data.end_date}
                                        className="mt-1 block w-full"
                                        autoComplete="end_date"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("end_date", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.end_date}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="approval_type"
                                        value="Quiz Approval Type"
                                    />

                                    <select
                                        id="approval_type"
                                        name="approval_type"
                                        value={data.approval_type}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                                        autoComplete="approval_type"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "approval_type",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Approval Type
                                        </option>
                                        <option value="automatic">Automatic</option>
                                        <option value="manual">Manual</option>
                                    </select>

                                    <InputError
                                        message={errors.approval_type}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                <Link
                        href={route("quizzes.index")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Go to Quiz lists
                    </Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Create Quiz
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
