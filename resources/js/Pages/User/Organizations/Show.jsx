import App from "@/Layouts/AppLayout";
import Link from "@/Components/Link";
import { Head } from "@inertiajs/react";

import {
    Bars3Icon,
    CalendarIcon,
    CogIcon,
    HomeIcon,
    MagnifyingGlassCircleIcon,
    MapIcon,
    MegaphoneIcon,
    SquaresPlusIcon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronLeftIcon,
    FunnelIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import {
    CheckBadgeIcon,
    EnvelopeIcon,
    PaperClipIcon,
    PhoneIcon,
} from "@heroicons/react/20/solid";
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

export default function Show({ auth, organization }) {
    const URL = "https://www.localhost:3000/";

    return (
        <App auth={auth}>
            <Head title="Show Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex h-full">
                        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                            <div className="relative z-0 flex flex-1 overflow-hidden">
                                {/* <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"> */}
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div>
                                        <div>
                                            <img
                                                className="h-32 w-full object-cover lg:h-48"
                                                src={organization.cover}
                                                alt=""
                                            />
                                        </div>
                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                <div className="flex">
                                                    <img
                                                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                        src={organization.logo}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                    <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                        <h1 className="truncate text-2xl font-bold text-gray-900">
                                                            <div className="flex gap-2 items-center">
                                                                {/* {`#${organization.id} `} */}
                                                                {
                                                                    organization.name
                                                                }
                                                                {organization.is_verified ? (
                                                                    <span className="text-main-500">
                                                                        <CheckBadgeIcon
                                                                            className="h-4 w-4"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </div>
                                                        </h1>
                                                    </div>
                                                    <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                        <Link
                                                            href={`mailto:${organization.email}`}
                                                            value="Message"
                                                        />
                                                        <Link
                                                            href={`tel:${organization.number}`}
                                                            value="Call"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                                                <h1 className="truncate text-2xl font-bold text-gray-900">
                                                    <div className="flex gap-2 items-center">
                                                        {/* {`#${organization.id} `} */}
                                                        {organization.name}
                                                        {organization.is_verified ? (
                                                            <span className="text-main-500">
                                                                <CheckBadgeIcon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-5 sm:px-6">
                                        {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Organization Information
                                        </h3> */}
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Organization name
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.name}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Organization URL
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    <a
                                                        href="{URL}
                                        {organization.slug}"
                                                    >
                                                        {URL}
                                                        {organization.slug}
                                                    </a>
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Description
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.description}
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Address
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {`${organization.address_line_1}, ${organization.address_line_2}, ${organization.district}, ${organization.country}, ${organization.postal_code}`}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {" "}
                                                    <div className="-mt-px flex divide-x divide-gray-200">
                                                        {organization.number ? (
                                                            <div className="-ml-px flex w-0 flex-1">
                                                                <a
                                                                    href={`tel:${organization.number}`}
                                                                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                                >
                                                                    <FaMobileAlt
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                </a>
                                                            </div>
                                                        ) : null}

                                                        {organization.instagram ? (
                                                            <div className="-ml-px flex w-0 flex-1">
                                                                <a
                                                                    href={
                                                                        organization.instagram
                                                                    }
                                                                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                                >
                                                                    <FaInstagram
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
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
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                </a>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
