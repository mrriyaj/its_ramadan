import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Logo from '@/Components/Logo';
import { Link } from '@inertiajs/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Footer from '@/Components/Footer';

export default function App({ children, auth }) {
    return (
        <>
            <Popover className="relative bg-main-default">
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Logo className="w-48 mb-6 pt-3 fill-current" />
                        </div>
                        <div className="my-2 mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-second-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                Home
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                Quran
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                Organization
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                Blog
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                Contact
                            </a>
                        </Popover.Group>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="whitespace-nowrap text-base font-medium text-second-500 hover:text-second-900"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
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
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-main-default shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Logo className="w-48 mb-6 pt-3 fill-current" />
                                    </div>
                                    <div className="-mr-2 p-4">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-second-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                        Home
                                    </a>
                                    <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                        Quran
                                    </a>
                                    <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                        Organization
                                    </a>
                                    <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                        Blog
                                    </a>
                                    <a href="#" className="text-base font-medium text-white hover:text-second-500">
                                        Contact
                                    </a>
                                </div>
                                <div>
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('register')}
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-second-default px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-second-700"
                                            >
                                                Register
                                            </Link>
                                            <p className="mt-6 text-center text-base font-medium text-white">
                                                Existing customer?{' '}
                                                <Link
                                                    href={route('login')}
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

            <main>
                {children}
            </main>

            <Footer />
        </>
    );
}
