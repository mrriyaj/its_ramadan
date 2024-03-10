import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import Hero from "@/Components/Hero";
import Subscribe from "@/Components/Subscribe";
import TodayQuiz from "@/Components/TodayQuiz";
import Player from "@/Components/Player";

export default function Home({ auth, organizations }) {
    return (
        <App auth={auth}>
            <div className="bg-[url('/image/bg-part-1.png')] bg-repeat">
                <Head title="Welcome" />
                <Hero />
                <Subscribe />
                <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
                    <div className="text-center text-6xl font-bold font-ramadhan-karim text-white">
                        Organizations
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {organizations.map((organization) => (
                            <div
                                key={organization.id}
                                className="flex items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg"
                            >
                                <a href={"/org/" + organization.slug}>
                                    <img
                                        src={organization.logo}
                                        alt={organization.name}
                                        className="w-24 h-24 p-1 rounded-lg"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <Player />
            </div>
        </App>
    );
}
