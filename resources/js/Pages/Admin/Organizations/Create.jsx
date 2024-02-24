import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        logo: "",
        cover: "",
        description: "",
        address_line_1: "",
        address_line_2: "",
        district: "",
        country: "",
        postal_code: "",
        email: "",
        number: "",
        whatsapp: "",
        whatsapp_group: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("organization.store"), { onSuccess: () => reset() });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Organization
                </h2>
            }
        >
            <Head title="Create Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit} encType="multipart/form-data" className="grid grid-cols-2 gap-4">
                            <div>
                                <InputLabel
                                    htmlFor="logo"
                                    value="Logo"
                                />

                                <input
                                    type="file"
                                    id="logo"
                                    name="logo"
                                    className="mt-1 block w-full"
                                    autoComplete="logo"
                                    onChange={(e) =>
                                        setData("logo", e.target.files[0])
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.logo}
                                    className="mt-2"
                                />
                                </div>

                                <div>
                                <InputLabel
                                    htmlFor="cover"
                                    value="Cover"
                                />

                                <input
                                    type="file"
                                    id="cover"
                                    name="cover"
                                    className="mt-1 block w-full"
                                    autoComplete="cover"
                                    onChange={(e) =>
                                        setData("cover", e.target.files[0])
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.cover}
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
                                            setData(
                                                "country",
                                                e.target.value
                                            )
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
                                        htmlFor="email"
                                        value="Email Address"
                                    />

                                    <TextInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="number"
                                        value="Number"
                                    />

                                    <TextInput
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
                                    />

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

                                    <TextInput
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
                                    />

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
                                        href={route("quizzes.index")}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Go to Organizations lists
                                    </Link>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Add Organization
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
