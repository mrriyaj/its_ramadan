import { Head, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import App from "@/Layouts/AppLayout";
import HeaderSection from "@/Components/HeaderSection";
import {
    CheckBadgeIcon,
    EnvelopeIcon,
    UserGroupIcon,
    GlobeAltIcon,
    UserPlusIcon,
    UserMinusIcon,
} from "@heroicons/react/20/solid";

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

import Link from "@/Components/Link";
import Notification from "@/Components/Notification";

export default function Index({ auth, organizations }) {
    const user = usePage().props.auth.user;
    const { flash } = usePage().props;
    const [showSuccessNotification, setShowSuccessNotification] =
        useState(false);

    useEffect(() => {
        if (flash && flash.success) {
            setShowSuccessNotification(true);

            const timeoutId = setTimeout(() => {
                setShowSuccessNotification(false);
            }, 5000);

            return () => clearTimeout(timeoutId);
        }
    }, [flash]);

    return (
        <App auth={auth}>
            {showSuccessNotification && <Notification />}
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
                                className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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
                                            <div>
                                                <img
                                                    className="h-64 w-full object-cover lg:h-64 rounded-lg bg-center"
                                                    src={organization.cover}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col p-8 border-spacing-4">
                                                <img
                                                    className="-mt-12 sm:-mt-24 mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover bg-center border-white border-4"
                                                    src={organization.logo}
                                                    alt={`${organization.name} - logo`}
                                                />
                                                <h3 className="mt-6 text-lg font-medium text-gray-900 mx-auto">
                                                    <div className="flex gap-2 items-center mb-3">
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

                                                <div className="flex gap-4 justify-center mb-1">
                                                    <span className="text-gray-500">
                                                        <UserGroupIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                    {
                                                        organization.followersCount
                                                    }
                                                    <span className="text-gray-500">
                                                        Followers
                                                    </span>
                                                </div>

                                                {organization.website && (
                                                    <div className="flex gap-4 justify-center mb-3">
                                                        <span className="text-gray-500">
                                                            <GlobeAltIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                        <span className="text-gray-500">
                                                            {
                                                                organization.website
                                                            }
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex gap-4 justify-center mb-2">
                                                    <Link
                                                        className="justify-center"
                                                        value="View"
                                                        href={`/organizations/${organization.id}`}
                                                    />
                                                    {organization.userFollowed ? (
                                                        <Link
                                                            className="pr-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                                                            method="delete"
                                                            as="button"
                                                            type="button"
                                                            value="Unfollow"
                                                            href={route(
                                                                "follows.unfollow",
                                                                {
                                                                    id: organization.userFollowed.id,
                                                                }
                                                            )}
                                                        />
                                                    ) : (
                                                        <Link
                                                            className="pr-3 font-medium text-main-600 dark:text-main-500 hover:underline"
                                                            method="post"
                                                            as="button"
                                                            type="button"
                                                            value="Follow"
                                                            href={route(
                                                                "follows.follow",
                                                                {
                                                                    organization_id: organization.id,
                                                                    user_id: user.id,
                                                                }
                                                            )}
                                                        />
                                                    )}
                                                </div>

                                                <div className="flex gap-4 justify-center mt-4">
                                                    {organization.facebook && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.facebook
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaFacebook
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {organization.twitter && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.twitter
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaTwitter
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {organization.instagram && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.instagram
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaInstagram
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {organization.linkedin && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.linkedin
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaLinkedin
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {organization.whatsapp && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.whatsapp
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaWhatsapp
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
                                                    {organization.youtube && (
                                                        <span className="text-gray-500">
                                                            <a
                                                                href={
                                                                    organization.youtube
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaYoutube
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </a>
                                                        </span>
                                                    )}
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
