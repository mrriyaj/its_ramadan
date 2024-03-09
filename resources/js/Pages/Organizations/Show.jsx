import App from "@/Layouts/AppLayout";
import Link from "@/Components/Link";
import { useForm, usePage, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import HeaderSection from "@/Components/HeaderSection";
import Notification from "@/Components/Notification";
import { CheckBadgeIcon, UserGroupIcon } from "@heroicons/react/20/solid";

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

export default function Show({
    auth,
    organization,
    quizzes,
    followId,
    followersCount,
}) {
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
            <Head title="Show Organization" />
            <HeaderSection
                Header="Organization"
                Title="Organization Details"
                Description="View organization details and quizzes"
            />
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex h-full">
                        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                            <div className="relative z-0 flex flex-1 overflow-hidden">
                                {/* <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"> */}
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div>
                                        <div>
                                            <img
                                                className="w-full object-cover h-64 sm:h-96"
                                                src={organization.cover}
                                                alt={`${organization.name}Organization cover Image`}
                                            />
                                        </div>
                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                            <div className="-mt-12 sm:-mt-24 sm:flex sm:items-end sm:space-x-5">
                                                <div className="flex">
                                                    <img
                                                        className="h-24 w-24 rounded-lg ring-4 ring-white sm:h-48 sm:w-48"
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
                                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                                            <UserGroupIcon className="h-5 w-5 mr-2" />
                                                            {followersCount}{" "}
                                                            Followers
                                                        </span>
                                                        {followId ? (
                                                            <Link
                                                                className="pr-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                                                                method="delete"
                                                                as="button"
                                                                type="button"
                                                                value="Unfollow"
                                                                href={route(
                                                                    "follows.unfollow",
                                                                    {
                                                                        id: followId,
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
                                                                        organization_id:
                                                                            organization.id,
                                                                        user_id:
                                                                            user.id,
                                                                    }
                                                                )}
                                                            />
                                                        )}
                                                        {organization.whatsapp_group ? (
                                                            <a
                                                                className="inline-flex items-center px-4 py-2 bg-main-default dark:bg-second-default border border-transparent rounded-md font-semibold text-xs text-white dark:text-second-800 uppercase tracking-widest hover:bg-second-700 dark:hover:bg-white focus:bg-second-700 dark:focus:bg-white active:bg-second-900 dark:active:bg-second-300 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                                                value="Join WhatsApp Group"
                                                                href={
                                                                    organization.whatsapp_group
                                                                }
                                                                target="_blank" // Add this attribute
                                                                rel="noopener noreferrer" // Add this attribute for security reasons
                                                            >
                                                                Join WhatsApp
                                                                Group
                                                            </a>
                                                        ) : null}
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
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Organization Information
                                        </h3>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
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

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Email
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.email}
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Phone Number
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.number}
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Website
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.website}
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    WhatsApp Number
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {organization.whatsapp}
                                                </dd>
                                            </div>

                                            <div className="sm:col-span-2">
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
                                                                    className="h-5 w-5 mr-3"
                                                                />
                                                                Instagram
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
                                                                    className="h-5 w-5 mr-3"
                                                                />
                                                                Facebook
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
                                                                    className="h-5 w-5 mr-3"
                                                                />
                                                                LinkedIn
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
                                                                    className="h-5 w-5 mr-3"
                                                                />
                                                                Twitter
                                                            </a>
                                                        </div>
                                                    ) : null}

                                                    {organization.youtube ? (
                                                        <div className="-ml-px flex w-0 flex-1">
                                                            <a
                                                                href={
                                                                    organization.youtube
                                                                }
                                                                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                            >
                                                                <TbWorldWww
                                                                    size={18}
                                                                    className="h-5 w-5 mr-3"
                                                                />
                                                                YouTube
                                                            </a>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8">
                <div className="">
                    {quizzes.length >= 1 &&
                        (user.role === "superadmin" ||
                            user.role === "admin" ||
                            user.role === "orgadmin") && (
                            <div className="overflow-hidden rounded-lg bg-white shadow">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://via.placeholder.com/150"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                Your organization already has
                                                quiz
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                You can add a maximum of 1 quiz
                                                per organization
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    {quizzes.length === 0 && (
                        <>
                            {organization.owner === user.id &&
                                (user.role === "superadmin" ||
                                    user.role === "admin" ||
                                    user.role === "orgadmin") && (
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <div className="flex ">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-10 h-10 rounded-full"
                                                        src="https://via.placeholder.com/150"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        Create a Quiz
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Create a quiz for this
                                                        organization
                                                    </p>
                                                </div>
                                            </div>
                                            <Link
                                                className="mt-5"
                                                href={`/quizzes/create/${organization.id}`}
                                                value="Create Quiz"
                                            />
                                        </div>
                                    </div>
                                )}
                        </>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto pb-12 px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
                    {quizzes.length === 0 && (
                        <div className="overflow-hidden rounded-lg bg-white shadow">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="https://via.placeholder.com/150"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            No quiz found
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            No quiz found for this organization
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {quizzes.map((quiz) => (
                        <div
                            key={quiz.id}
                            className="overflow-hidden rounded-lg bg-white shadow"
                        >
                            <div>
                                <div className="p-6">
                                    <div className="sm:flex sm:gap-10 sm:items-center ">
                                        <img
                                            className="w-64 h-64 rounded-lg"
                                            src={quiz.image}
                                            alt=""
                                        />

                                        <div>
                                            <p className="text-3xl font-medium text-gray-900 my-2">
                                                {quiz.title}
                                            </p>
                                            <p className="text-sm text-gray-500 ">
                                                {quiz.description}
                                            </p>
                                            <div className="my-5">
                                                <p className="font-medium">
                                                    Starting Date:{" "}
                                                    {quiz.start_date}
                                                </p>
                                                <p className="font-medium">
                                                    Ending Date: {quiz.end_date}
                                                </p>
                                            </div>
                                            {quiz.status === "active" ? (
                                                <Link
                                                    className=""
                                                    href={`/quizzes/${quiz.id}`}
                                                    value="View"
                                                />
                                            ) : (
                                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                                    Inactive
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </App>
    );
}
