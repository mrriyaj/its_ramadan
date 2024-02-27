import App from "@/Layouts/AppLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

export default function Create({auth, organization}) {

    const types = [
        { label: "Auto", value: "auto" },
        { label: "Manual", value: "manual" },
    ];

    const [selected, setSelected] = useState(types[0]);

    const { data, setData, post, processing, errors, reset } = useForm({
        organization_id: organization.id,
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        approval_type: selected.value
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("quizzes.user.store"), { onSuccess: () => reset() });
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

                                <div>
                                    <InputLabel
                                        htmlFor="organization_id"
                                        value="Organization"
                                    />

                                    <TextInput
                                        id="organization_id"
                                        name="organization_id"
                                        value={organization.name}
                                        className="mt-1 block w-full"
                                        autoComplete="organization_id"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "organization_id",
                                                e.target.value
                                            )
                                        }
                                        disabled
                                    />

                                    <InputError
                                        message={errors.organization_id}
                                        className="mt-2"
                                    />
                                </div>

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

                                    <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <>
                                                <div className="mt-1 relative">
                                                    <span className="block w-full rounded-md shadow-sm">
                                                        <Listbox.Button className="relative w-full rounded-md border border-gray-300 bg-white dark:bg-gray-700 pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-sm">
                                                            <span className="block truncate">{selected.label}</span>
                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>
                                                    </span>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            static
                                                            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                                        >
                                                            {types.map((type) => (
                                                                <Listbox.Option
                                                                    key={type.value}
                                                                    className={({ active }) =>
                                                                        `${active ? 'text-main-900 bg-main-100' : 'text-gray-900 dark:text-gray-100'}
                            cursor-default select-none relative py-2 pl-3 pr-9`
                                                                    }
                                                                    value={type.value}
                                                                >
                                                                    {({ selected, active }) => (
                                                                        <>
                                                                            <span
                                                                                className={`${selected ? 'font-semibold' : 'font-normal'}
                                block truncate`}
                                                                            >
                                                                                {type.label}
                                                                            </span>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={`${active ? 'text-main-600' : 'text-main-600'}
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                                                                >
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>

                                    <InputError
                                        message={errors.approval_type}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Link
                                        href={route("quizzes.index")}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 dark:focus:ring-offset-gray-800"
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

        </App>
    )

}
