import { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import Logo from "@/Components/Logo";
import { Link, usePage } from "@inertiajs/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Dropdown from "@/Components/Dropdown";
import SuccessNotification from "@/Components/SuccessNotification";

export default function Authenticated({ auth, header, children }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <Popover className="relative bg-main-default">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <Logo className="w-48 fill-current" />
                            </a>
                        </div>
                        <div className="my-2 mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-second-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                        <Popover.Group
                            as="nav"
                            className="hidden space-x-10 md:flex"
                        >
                            <Link
                                href={route("dashboard")}
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={route("organizations.index")}
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                Organizations
                            </Link>
                            <Link
                                href={route("quizzes.index")}
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                Quizzes
                            </Link>
                            <Link
                                href={route("users.index")}
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                Users
                            </Link>
                        </Popover.Group>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                {user.profile ? (
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={user.profile}
                                                        alt="logo"
                                                    />
                                                ) : (
                                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                                                        <span class="text-sm font-medium leading-none text-white">
                                                            {auth.first_name}
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-main-default shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Logo className="w-48 mb-6 pt-3 fill-current" />
                                    </div>
                                    <div className="-mr-2 p-4">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-second-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link
                                        href="/"
                                        className="text-base font-medium text-white hover:text-second-500"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/quran"
                                        className="text-base font-medium text-white hover:text-second-500"
                                    >
                                        Quran
                                    </Link>
                                    <Link
                                        href="/organizations"
                                        className="text-base font-medium text-white hover:text-second-500"
                                    >
                                        Organizations
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="text-base font-medium text-white hover:text-second-500"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-base font-medium text-white hover:text-second-500"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            {header && (
                <header className="bg-main-dark shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <div className="min-h-screen bg-main-default">
                <SuccessNotification />
                <main>{children}</main>
            </div>
        </>
    );
}
