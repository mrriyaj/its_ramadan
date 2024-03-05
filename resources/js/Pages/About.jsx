import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";

export default function About({ auth }) {
    return (
        <App auth={auth}>
            <Head title="About" />
            <div className="min-h-screen relative mt-10">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold mb-4 text-red-500">Under Maintenance</h1>
                            <p className="text-gray-600 mb-4">We apologize for the inconvenience, but this page is currently under maintenance. Please check back later.</p>
                            <a href="https://wa.me/message/5YVNARKLXIVDF1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I'm Ready to Contribute</a>
                            <a href="https://wa.me/message/5YVNARKLXIVDF1" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Volunteer</a>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
