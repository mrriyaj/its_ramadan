import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInputWithPrefix from "@/Components/TextInputWithPrefix";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Edit({ organization, auth, users }) {
    const [selected, setSelected] = useState(
        users.find((user) => user.id === organization.owner)
    );
    const [query, setQuery] = useState("");

    const filteredUsers =
        query === ""
            ? users
            : users.filter((user) =>
                  user.first_name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    const { data, setData, patch, processing, errors, reset } = useForm({
        slug: organization.slug,
        owner: selected.id,
        name: organization.name,
        description: organization.description,
        address_line_1: organization.address_line_1,
        address_line_2: organization.address_line_2,
        district: organization.district,
        country: organization.country,
        postal_code: organization.postal_code,
        number: organization.number,
        whatsapp: organization.whatsapp,
        whatsapp_group: organization.whatsapp_group,
        facebook: organization.facebook,
        instagram: organization.instagram,
        twitter: organization.twitter,
        website: organization.website,
        youtube: organization.youtube,
        linkedin: organization.linkedin,
        is_active: organization.is_active,
        is_verified: organization.is_verified,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("organizations.update", organization));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Organization
                </h2>
            }
        >
            <Head title="Create Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={submit}
                                encType="multipart/form-data"
                                className="grid grid-cols-2 gap-4"
                            >
                                <div>
                                    <InputLabel htmlFor="slug" value="Slug" />

                                    <TextInputWithPrefix
                                        prefix="https://itsramadan.com/"
                                        id="slug"
                                        name="slug"
                                        value={data.slug}
                                        className="mt-1 block w-full"
                                        autoComplete="slug"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.slug}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="owner" value="Owner" />

                                    <Combobox
                                        value={selected}
                                        onChange={(value) => {
                                            setSelected(value);
                                            setData("owner", value.id);
                                        }}
                                    >
                                        <div className="relative mt-1">
                                            <Combobox.Input
                                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-main-500 dark:focus:border-main-600 focus:ring-main-500 dark:focus:ring-main-600 rounded-md shadow-sm "
                                                displayValue={(user) =>
                                                    user.first_name
                                                }
                                                onChange={(event) =>
                                                    setQuery(event.target.value)
                                                }
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery("")}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                    {filteredUsers.length ===
                                                        0 && query !== "" ? (
                                                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredUsers.map(
                                                            (user) => (
                                                                <Combobox.Option
                                                                    key={
                                                                        user.id
                                                                    }
                                                                    className={({
                                                                        active,
                                                                    }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                            active
                                                                                ? "bg-teal-600 text-white"
                                                                                : "text-gray-900"
                                                                        }`
                                                                    }
                                                                    value={user}
                                                                >
                                                                    {({
                                                                        selected,
                                                                        active,
                                                                    }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${
                                                                                    selected
                                                                                        ? "font-medium"
                                                                                        : "font-normal"
                                                                                }`}
                                                                            >
                                                                                {
                                                                                    user.first_name
                                                                                }
                                                                            </span>
                                                                            {selected ? (
                                                                                <span
                                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                        active
                                                                                            ? "text-white"
                                                                                            : "text-teal-600"
                                                                                    }`}
                                                                                >
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Combobox.Option>
                                                            )
                                                        )
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>

                                    <InputError
                                        message={errors.owner}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Organization Name"
                                    />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Organization Description"
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
                                        htmlFor="address_line_1"
                                        value="Address Line 1"
                                    />

                                    <TextInput
                                        id="address_line_1"
                                        name="address_line_1"
                                        value={data.address_line_1}
                                        className="mt-1 block w-full"
                                        autoComplete="address_line_1"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "address_line_1",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.address_line_1}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="address_line_2"
                                        value="Address Line 2"
                                    />

                                    <TextInput
                                        id="address_line_2"
                                        name="address_line_2"
                                        value={data.address_line_2}
                                        className="mt-1 block w-full"
                                        autoComplete="address_line_2"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "address_line_2",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.address_line_2}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="district"
                                        value="District"
                                    />

                                    <TextInput
                                        id="district"
                                        name="district"
                                        value={data.district}
                                        className="mt-1 block w-full"
                                        autoComplete="district"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("district", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.district}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="country"
                                        value="Country"
                                    />

                                    <TextInput
                                        id="country"
                                        name="country"
                                        value={data.country}
                                        className="mt-1 block w-full"
                                        autoComplete="country"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.country}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="postal_code"
                                        value="Postal Code"
                                    />

                                    <TextInput
                                        id="postal_code"
                                        name="postal_code"
                                        value={data.postal_code}
                                        className="mt-1 block w-full"
                                        autoComplete="postal_code"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "postal_code",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.postal_code}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="number"
                                        value="Number"
                                    />
                                    <TextInputWithPrefix
                                        prefix="+94"
                                        id="number"
                                        name="number"
                                        value={data.number}
                                        autoComplete="number"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("number", e.target.value)
                                        }
                                        required
                                    />
                                    {/* <TextInput
                                        id="number"
                                        name="number"
                                        value={data.number}
                                        className="mt-1 block w-full"
                                        autoComplete="number"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("number", e.target.value)
                                        }
                                        required
                                    /> */}

                                    <InputError
                                        message={errors.number}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="whatsapp"
                                        value="Whatsapp Number"
                                    />

                                    <TextInputWithPrefix
                                        prefix="+94"
                                        id="whatsapp"
                                        name="whatsapp"
                                        value={data.whatsapp}
                                        autoComplete="whatsapp"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("whatsapp", e.target.value)
                                        }
                                        required
                                    />

                                    {/* <TextInput
                                        id="whatsapp"
                                        name="whatsapp"
                                        value={data.whatsapp}
                                        className="mt-1 block w-full"
                                        autoComplete="whatsapp"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("whatsapp", e.target.value)
                                        }
                                        required
                                    /> */}

                                    <InputError
                                        message={errors.whatsapp}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="whatsapp_group"
                                        value="Whatsapp Group"
                                    />

                                    <TextInput
                                        id="whatsapp_group"
                                        name="whatsapp_group"
                                        value={data.whatsapp_group}
                                        className="mt-1 block w-full"
                                        autoComplete="whatsapp_group"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "whatsapp_group",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.whatsapp_group}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="facebook"
                                        value="Facebook link"
                                    />

                                    <TextInput
                                        id="facebook"
                                        name="facebook"
                                        type="url"
                                        value={data.facebook}
                                        className="mt-1 block w-full"
                                        autoComplete="facebook"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("facebook", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.facebook}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="instagram"
                                        value="Instagram link"
                                    />

                                    <TextInput
                                        id="instagram"
                                        name="instagram"
                                        type="url"
                                        value={data.instagram}
                                        className="mt-1 block w-full"
                                        autoComplete="instagram"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("instagram", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.instagram}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="twitter"
                                        value="Twitter link"
                                    />

                                    <TextInput
                                        id="twitter"
                                        name="twitter"
                                        type="url"
                                        value={data.twitter}
                                        className="mt-1 block w-full"
                                        autoComplete="twitter"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("twitter", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.twitter}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="website"
                                        value="Website link"
                                    />

                                    <TextInput
                                        id="website"
                                        name="website"
                                        type="url"
                                        value={data.website}
                                        className="mt-1 block w-full"
                                        autoComplete="website"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("website", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.website}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="youtube"
                                        value="Youtube link"
                                    />

                                    <TextInput
                                        id="youtube"
                                        name="youtube"
                                        type="url"
                                        value={data.youtube}
                                        className="mt-1 block w-full"
                                        autoComplete="youtube"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("youtube", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.youtube}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Link
                                        href={route("organizations.index")}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Go to Organizations lists
                                    </Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Edit Organization
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
