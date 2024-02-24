import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "./PrimaryButton";

export default function ContactForm() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h2 className="sr-only">Contact us</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Contact information */}
                        <div className="bg-[url('image/contact-form-image.jpg')] overflow-hidden bg-cover bg-indigo-700 py-10 px-6 sm:px-10 xl:p-12">
                            {/* <div
                                className="pointer-events-none absolute inset-0 sm:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={343}
                                    height={388}
                                    viewBox="0 0 343 388"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                        fill="url(#linear1)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear1"
                                            x1="254.553"
                                            y1="107.554"
                                            x2="961.66"
                                            y2="814.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop
                                                offset={1}
                                                stopColor="#fff"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div> */}
                            {/* <div
                                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={359}
                                    height={339}
                                    viewBox="0 0 359 339"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                        fill="url(#linear2)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear2"
                                            x1="192.553"
                                            y1="28.553"
                                            x2="899.66"
                                            y2="735.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop
                                                offset={1}
                                                stopColor="#fff"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div> */}
                            {/* 
                            <div
                                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={160}
                                    height={678}
                                    viewBox="0 0 160 678"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                        fill="url(#linear3)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear3"
                                            x1="192.553"
                                            y1="325.553"
                                            x2="899.66"
                                            y2="1032.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop
                                                offset={1}
                                                stopColor="#fff"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div> */}

                            <h3 className="text-lg font-medium text-white">
                                Contact information
                            </h3>
                            <p className="mt-6 max-w-3xl text-base text-indigo-50">
                                Nullam risus blandit ac aliquam justo ipsum.
                                Quam mauris volutpat massa dictumst amet. Sapien
                                tortor lacus arcu.
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">
                                        Phone number
                                    </span>
                                </dt>
                                <dd className="flex text-base text-indigo-50">
                                    <PhoneIcon
                                        className="h-6 w-6 flex-shrink-0 text-indigo-200"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">
                                        +94 (77) 123-4567
                                    </span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base text-indigo-50">
                                    <EnvelopeIcon
                                        className="h-6 w-6 flex-shrink-0 text-indigo-200"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-3">
                                        support@itsramadan.com
                                    </span>
                                </dd>
                            </dl>
                            <div className="lg:absolute lg:bottom-10">
                                <h3 className="text-lg font-medium text-white mt-10">
                                    Follow us on
                                </h3>
                                <ul
                                    role="list"
                                    className="mt-4 flex space-x-12"
                                >
                                    <li>
                                        <a
                                            className="text-indigo-200 hover:text-indigo-100"
                                            href="#"
                                        >
                                            <span className="sr-only">
                                                Facebook
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-facebook"
                                            >
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-indigo-200 hover:text-indigo-100"
                                            href="#"
                                        >
                                            <span className="sr-only">
                                                Instagram
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-instagram"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    x="2"
                                                    y="2"
                                                    rx="5"
                                                    ry="5"
                                                />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line
                                                    x1="17.5"
                                                    x2="17.51"
                                                    y1="6.5"
                                                    y2="6.5"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-indigo-200 hover:text-indigo-100"
                                            href="#"
                                        >
                                            <span className="sr-only">
                                                GitHub
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-github"
                                            >
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-indigo-200 hover:text-indigo-100"
                                            href="#"
                                        >
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-twitter"
                                            >
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">
                                Get in touch with us
                            </h3>
                            <form
                                action="#"
                                method="POST"
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Phone
                                        </label>
                                        <span
                                            id="phone-optional"
                                            className="text-sm text-gray-500"
                                        >
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                            aria-describedby="phone-optional"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Subject
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Message
                                        </label>
                                        <span
                                            id="message-max"
                                            className="text-sm text-gray-500"
                                        >
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-main-500 focus:ring-main-500"
                                            aria-describedby="message-max"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-start">
                                    {/* <button
                                        type="submit"
                                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Submit
                                    </button> */}

                                    <PrimaryButton>Send Message</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
