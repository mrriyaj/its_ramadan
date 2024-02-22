import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import ProfileImage from "@/Components/ProfileImage";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const {
        data,
        setData,
        patch,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
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

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <ProfileImage />

            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="first_name" value="First Name" />

                    <TextInput
                        id="first_name"
                        className="mt-1 block w-full"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        required
                        isFocused
                        autoComplete="first_name"
                    />

                    <InputError className="mt-2" message={errors.first_name} />
                </div>
                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" />

                    <TextInput
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        autoComplete="last_name"
                    />

                    <InputError className="mt-2" message={errors.last_name} />
                </div>
                <div>
                    <InputLabel htmlFor="gender" value="Gender" />

                    <select
                        id="gender"
                        name="approval_type"
                        value={data.gender}
                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                        autoComplete="gender"
                        required
                        onChange={(e) => setData("gender", e.target.value)}
                    >
                        <option value="" disabled>
                            Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <InputError className="mt-2" message={errors.gender} />
                </div>
                <div>
                    <InputLabel htmlFor="dob" value="Date of Birth" />

                    <TextInput
                        id="dob"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.dob}
                        onChange={(e) => setData("dob", e.target.value)}
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
                        onChange={(e) => setData("district", e.target.value)}
                        autoComplete="district"
                    />

                    <InputError className="mt-2" message={errors.district} />
                </div>
                <div>
                    <InputLabel htmlFor="country" value="Country" />

                    <TextInput
                        id="country"
                        className="mt-1 block w-full"
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
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
                        onChange={(e) => setData("postal_code", e.target.value)}
                        autoComplete="postal_code"
                    />

                    <InputError className="mt-2" message={errors.postal_code} />
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
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>
                <div>
                    <InputLabel htmlFor="whatsapp" value="Whatsapp Number" />

                    <TextInput
                        id="whatsapp"
                        className="mt-1 block w-full"
                        value={data.whatsapp}
                        onChange={(e) => setData("whatsapp", e.target.value)}
                        autoComplete="whatsapp"
                    />

                    <InputError className="mt-2" message={errors.whatsapp} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

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
