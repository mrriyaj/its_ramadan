import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
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
    return (
        <App auth={auth}>
            <Head title="Welcome" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <section className="max-w-7xl bg-main-default mx-6 py-8">
                            <ul
                                role="list"
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                            >
                                {organizations.map((organization) => (
                                    <li
                                        key={organization.id}
                                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                                    >
                                        <div className="flex flex-1 flex-col p-8">
                                            <img
                                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover bg-center"
                                                src={organization.logo}
                                                // alt="{organization.name} - logo"
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
                                            {/* <dl className="mt-1 flex flex-grow flex-col justify-between">
                                                <dt className="sr-only">
                                                    Title
                                                </dt>
                                                <dd className="text-sm text-gray-500">
                                                    {organization.id}
                                                </dd>
                                                <dt className="sr-only">
                                                    Role
                                                </dt>
                                                <dd className="mt-3">
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                                        {
                                                            organization.description
                                                        }
                                                    </span>
                                                </dd>
                                            </dl> */}

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
                                                            href={
                                                                organization.instagram
                                                            }
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaInstagram
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.facebook ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={
                                                                organization.facebook
                                                            }
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaFacebook
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.linkedin ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={
                                                                organization.linkedin
                                                            }
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaLinkedin
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.twitter ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={
                                                                organization.twitter
                                                            }
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaTwitter
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}
                                            </div>

                                            <div className="-mt-px flex divide-x divide-gray-200">
                                                {organization.number ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={`tel:${organization.number}`}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaMobileAlt
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.email ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={`mailto:${organization.email}`}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaEnvelope
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.website ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={
                                                                organization.website
                                                            }
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <TbWorldWww
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}

                                                {organization.whatsapp ? (
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={`https://wa.me/${organization.whatsapp}`}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                        >
                                                            <FaWhatsapp
                                                                size={18}
                                                            />
                                                        </a>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </App>
    );
}
