import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Logo from "@/Components/Logo";
import { Link, usePage } from "@inertiajs/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "@/Components/Footer";
import Dropdown from "@/Components/Dropdown";

export default function App({ children, auth }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <Popover className="relative bg-main-default">
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex items-center justify-between border-gray-100 py-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Logo className="w-48 fill-current" />
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
                                href={route("organizations.user.index")}
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
                                href="/about"
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-base font-medium text-white hover:text-second-500"
                            >
                                Contact
                            </Link>
                        </Popover.Group>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            {auth.user ? (
                                <div className="hidden sm:flex sm:items-center sm:ms-6">
                                    <div className="ms-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    {user.profile ? (
                                                        <img className="h-10 w-10 rounded-full" src={auth.user.profile} alt="logo" />
                                                    ) : (
                                                        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                                                            <span class="text-sm font-medium leading-none text-white">{auth.user.first_name}</span>
                                                        </span>
                                                    )}
                                                </span>
                                            </Dropdown.Trigger>

                                            {user.role === "superadmin" || user.role === "admin" ? (
                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route("dashboard")}
                                                    >
                                                        Admin
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route("panel")}
                                                    >
                                                        Panel
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Log Out
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            ) : (
                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route("panel")}
                                                    >
                                                        Panel
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Log Out
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            )
                                            }
                                        </Dropdown>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="whitespace-nowrap text-base font-medium text-second-500 hover:text-second-900"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <main>{children}</main>
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
                                <div>
                                    {auth.user ? (
                                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                            {user.role === "admin" || user.role === "superadmin" ? (
                                                <Link
                                                    href={route("dashboard")}
                                                    className="text-base font-medium text-white hover:text-second-500"
                                                >
                                                    Admin
                                                </Link>
                                            ) : null
                                            }
                                            <Link
                                                href={route("panel")}
                                                className="text-base font-medium text-white hover:text-second-500"
                                            >
                                                Panel
                                            </Link>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                className="text-base font-medium text-white hover:text-second-500"
                                            >
                                                Log Out
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("register")}
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                            >
                                                Register
                                            </Link>
                                            <p className="mt-6 text-center text-base font-medium text-white">
                                                Existing customer?{" "}
                                                <Link
                                                    href={route("login")}
                                                    className="text-second-default hover:text-second-500"
                                                >
                                                    Log in
                                                </Link>
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            <Footer />
        </>
    );
}
