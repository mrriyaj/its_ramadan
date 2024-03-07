import {
    FaFacebook,
    FaGithub,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

const navigation = {
    main: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Partners", href: "#" },
    ],
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/itsramadancom",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/itsramadan.com",
        },

        {
            name: "GitHub",
            href: "#",
        },
        {
            name: "YouTube",
            href: "#",
        },
        {
            name: "WhatsApp",
            href: "https://whatsapp.com/channel/0029VaNeGIOHbFV1SWvIxI0e",
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-main-default">
            <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a
                                href={item.href}
                                className="text-sm leading-6 text-white hover:text-second-500"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-second-500"
                        >
                            <span className="sr-only">{item.name}</span>

                            {item.name === "WhatsApp" && <FaWhatsapp />}
                            {item.name === "Facebook" && <FaFacebook />}
                            {item.name === "Instagram" && <FaInstagram />}
                            {item.name === "GitHub" && <FaGithub />}
                            {item.name === "YouTube" && <FaYoutube />}
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-white">
                    &copy; 2024 IT Starter Pvt Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
