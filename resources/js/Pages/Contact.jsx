import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import ContactForm from "@/Components/ContactForm";
import HeaderSection from "@/Components/HeaderSection";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "@/Components/Link";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/Link";
import image from "../../../public/image/Contact-us.svg";

export default function Contact({ auth }) {
    const contact = [
        {
            icon: <FaWhatsapp size={24} color="white" />,
            title: "Chat with us",
            description: "We've got live Social Experts waiting to help you",
            href: "https://wa.me/+94773934001",
            btnText: "Chat with us",
        },
        {
            icon: <FaPhoneAlt size={24} color="white" />,
            title: "Call us",
            description: "Give us a ring.Our Experts are standing to help you.",
            href: "tel:+94773934001",
            btnText: "+94 77 393 4001",
        },
        {
            icon: <FaEnvelope size={24} color="white" />,
            title: "Email us",
            description:
                "Simply drop us an email and you'll receive a reply within 24 hours ",
            href: "mailto:info@itsramadan.com",

            btnText: "info@itsramadan.com",
        },
    ];

    return (
        <App auth={auth}>
            <Head title="Contact" />
            <HeaderSection
                Header="Contact"
                Title="Contact Us"
                Description="We'd love to hear from you."
            />
            {/* <ContactForm /> */}
            {/* <div className="min-h-screen relative mt-10">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold mb-4 text-red-500">
                                Under Maintenance
                            </h1>
                            <p className="text-gray-600 mb-4">
                                We apologize for the inconvenience, but this
                                page is currently under maintenance. Please
                                check back later.
                            </p>
                            <a
                                href="https://wa.me/message/5YVNARKLXIVDF1"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                I'm Ready to Contribute
                            </a>
                            <a
                                href="https://wa.me/message/5YVNARKLXIVDF1"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                            >
                                Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="max-w-5xl mx-auto">
                <div className="mt-20">
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-12 items-center p-6">
                        {contact.map((contact) => (
                            <div
                                className="flex-col flex  justify-center items-center "
                                key={contact.title}
                            >
                                <div className="flex bg-second-500 rounded-full w-16 h-16 items-center justify-center mb-4">
                                    {contact.icon}
                                </div>
                                <h2 className="text-white text-3xl font-bold mb-2">
                                    {contact.title}
                                </h2>
                                <p className="text-md text-gray-200 mb-4 text-center">
                                    {contact.description}
                                </p>

                                <Link
                                    className="w-full justify-center"
                                    value={contact.btnText}
                                    href={contact.href}
                                ></Link>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="text-center my-20">
                            <h1 className=" text-2xl sm:text-5xl text-white font-bold">
                                Talk to Our Support Team
                            </h1>
                            <p className="text-center my-5 text-gray-200">
                                Got questions? Our support team is here to
                                assist you.
                            </p>
                        </div>
                        <div className="px-6 md:flex gap-10">
                            <div className="md:w-1/2 flex  w-full">
                                <img src={image} />
                            </div>
                            <div className="md:w-1/2">
                                <form>
                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="name"
                                            className="text-white text-lg mb-2"
                                        >
                                            Name
                                        </label>
                                        <TextInput
                                            id="name"
                                            name="name"
                                            className="bg-gray-800 rounded-md py-2 px-4"
                                        />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="email"
                                            className="text-white text-lg mb-2"
                                        >
                                            Email
                                        </label>
                                        <TextInput
                                            id="email"
                                            name="email"
                                            className="bg-gray-800 rounded-md py-2 px-4"
                                        />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="message"
                                            className="text-white text-lg mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="bg-gray-900 rounded-md py-2 px-4"
                                        ></textarea>
                                    </div>
                                    <PrimaryButton value="Send Message"></PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
