import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Listbox, Transition } from "@headlessui/react";
import DangerButton from "@/Components/DangerButton";
import { Fragment, useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export default function OnboardForm({
    mustVerifyEmail,

    className = "",
}) {
    const user = usePage().props.auth.user;
    const options = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "Other", label: "Other" },
    ];

    const status = [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedStatus, setSelectedStatus] = useState(status[0]);

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            correct_answer: selectedOption.value,
            status: selectedStatus.value,
        }));
    }, [selectedOption, selectedStatus]);

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            first_name: user.first_name,
            last_name: user.last_name,
            gender: selectedOption.value,
            dob: user.dob,
            address_line_1: user.address_line_1,
            address_line_2: user.address_line_2,
            city: user.city,
            district: user.district,
            country: user.country,
            postal_code: user.postal_code,
            education_level: user.education_level,
            institute_name: user.institute_name,
            phone: user.phone,
            whatsapp: user.whatsapp,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("onboarding.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Please enter your details
                </p>
            </header>

            <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputLabel htmlFor="first_name" value="First Name" />
                        <TextInput
                            id="first_name"
                            className="mt-1 block w-full"
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                            required
                            isFocused
                            autoComplete="first_name"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.first_name}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="last_name" value="Last Name" />
                        <TextInput
                            id="last_name"
                            className="mt-1 block w-full"
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                            required
                            autoComplete="last_name"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.last_name}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="gender" value="Gender" />
                        <Listbox
                            value={selectedOption}
                            onChange={setSelectedOption}
                        >
                            {({ open }) => (
                                <>
                                    <div className="mt-1 relative">
                                        <span className="block w-full rounded-md shadow-sm">
                                            <Listbox.Button className="relative w-full rounded-md border text-white dark:bg-gray-900 pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500 sm:text-sm">
                                                <span className="block truncate">
                                                    {selectedOption.label}
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
                                                {options.map((option) => (
                                                    <Listbox.Option
                                                        key={option.value}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            `${
                                                                active
                                                                    ? "text-main-900 bg-main-100"
                                                                    : "text-gray-900 dark:text-gray-100"
                                                            }
                            cursor-default select-none relative py-2 pl-3 pr-9`
                                                        }
                                                        value={option}
                                                    >
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <span
                                                                    className={`${
                                                                        selected
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
                                                                        className={`${
                                                                            active
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
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>

                    <div>
                        <InputLabel htmlFor="dob" value="Date of Birth" />
                        <TextInput
                            id="dob"
                            type="date"
                            className="mt-1 block w-full"
                            value={data.dob}
                            onChange={(e) => setData("dob", e.target.value)}
                            required
                            autoComplete="dob"
                        />
                        <InputError className="mt-2" message={errors.dob} />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="address_line_1"
                            value="Address Line 1"
                        />
                        <TextInput
                            id="address_line_1"
                            className="mt-1 block w-full"
                            value={data.address_line_1}
                            onChange={(e) =>
                                setData("address_line_1", e.target.value)
                            }
                            required
                            autoComplete="address_line_1"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.address_line_1}
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="address_line_2"
                            value="Address Line 2"
                        />
                        <TextInput
                            id="address_line_2"
                            className="mt-1 block w-full"
                            value={data.address_line_2}
                            onChange={(e) =>
                                setData("address_line_2", e.target.value)
                            }
                            autoComplete="address_line_2"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.address_line_2}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="city" value="City" />
                        <TextInput
                            id="city"
                            className="mt-1 block w-full"
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                            required
                            autoComplete="city"
                        />
                        <InputError className="mt-2" message={errors.city} />
                    </div>

                    <div>
                        <InputLabel htmlFor="district" value="District" />
                        <TextInput
                            id="district"
                            className="mt-1 block w-full"
                            value={data.district}
                            onChange={(e) =>
                                setData("district", e.target.value)
                            }
                            required
                            autoComplete="district"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.district}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="country" value="Country" />
                        <TextInput
                            id="country"
                            className="mt-1 block w-full"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            required
                            autoComplete="country"
                        />
                        <InputError className="mt-2" message={errors.country} />
                    </div>

                    <div>
                        <InputLabel htmlFor="postal_code" value="Postal Code" />
                        <TextInput
                            id="postal_code"
                            className="mt-1 block w-full"
                            value={data.postal_code}
                            onChange={(e) =>
                                setData("postal_code", e.target.value)
                            }
                            required
                            autoComplete="postal_code"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.postal_code}
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="education_level"
                            value="Education Level"
                        />
                        <TextInput
                            id="education_level"
                            className="mt-1 block w-full"
                            value={data.education_level}
                            onChange={(e) =>
                                setData("education_level", e.target.value)
                            }
                            required
                            autoComplete="education_level"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.education_level}
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="institute_name"
                            value="Institute Name"
                        />
                        <TextInput
                            id="institute_name"
                            className="mt-1 block w-full"
                            value={data.institute_name}
                            onChange={(e) =>
                                setData("institute_name", e.target.value)
                            }
                            required
                            autoComplete="institute_name"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.institute_name}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="phone" value="Phone Number" />
                        <TextInput
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            required
                            autoComplete="phone"
                        />
                        <InputError className="mt-2" message={errors.phone} />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="whatsapp"
                            value="Whatsapp Number"
                        />
                        <TextInput
                            id="whatsapp"
                            className="mt-1 block w-full"
                            value={data.whatsapp}
                            onChange={(e) =>
                                setData("whatsapp", e.target.value)
                            }
                            required
                            autoComplete="whatsapp"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.whatsapp}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-4">
                    <PrimaryButton disabled={processing}>
                        Complete
                    </PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
