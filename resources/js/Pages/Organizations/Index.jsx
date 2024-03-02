import { Head, usePage } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import HeaderSection from "@/Components/HeaderSection";
import {
    CheckBadgeIcon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/20/solid";

import Link from "@/Components/Link";

import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMobileAlt,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

import { TbWorldWww } from "react-icons/tb";

export default function Index({ auth, organizations }) {
    const user = usePage().props.auth.user;

    return (
        <App auth={auth}>
            <Head title="Welcome" />
            <HeaderSection
                Header="Organizations"
                Title="Organizations Directory"
                Description="Find and connect with organizations."
            />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <section className="max-w-7xl bg-main-default mx-6 py-8">
                            <ul
                                role="list"
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                            >
                                {organizations.length === 0 ? (
                                    <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                                        <p className="text-gray-500 py-8">
                                            No organizations found.
                                        </p>
                                    </li>
                                ) : (
                                    organizations.map((organization) => (
                                        <li
                                            key={organization.id}
                                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                                        >
                                            <div className="flex flex-1 flex-col p-8">
                                                <img
                                                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover bg-center"
                                                    src={organization.logo}
                                                    alt={`${organization.name} - logo`}
                                                />
                                                <h3 className="my-6 text-md font-medium text-gray-900 mx-auto">
                                                    <div className="flex gap-2 items-center">
                                                        {organization.name}
                                                        {organization.is_verified ? (
                                                            <span className="text-main-500">
                                                                <CheckBadgeIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </h3>
                                                <Link
                                                    className="justify-center"
                                                    value="View"
                                                    href={`/organizations/${organization.id}`}
                                                />
                                            </div>
                                            <div>
                                                <div className="-mt-px flex divide-x divide-gray-200">
                                                    {organization.instagram ? (
                                                        <div className="-ml-px flex w-0 flex-1">
                                                            <a
                                                                href={organization.instagram}
                                                                className="text-gray-500 hover:text-main-500 px-4 py-2"
                                                            >
                                                                <FaInstagram className="h-5 w-5" />
                                                            </a>
                                                        </div>
                                                    ) : null}
                                                    {/* Add more social media icons here */}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </App>
    );
}
