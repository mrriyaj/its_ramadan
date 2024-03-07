import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import Hero from "@/Components/Hero";
import Subscribe from "@/Components/Subscribe";
import TodayQuiz from "@/Components/TodayQuiz";
import Player from "@/Components/Player";

export default function Home({ auth, organizations }) {

    return (
        <App auth={auth}>
            <div className="bg-[url('/image/Vector.png')]">
            <Head title="Welcome" />
            <Hero />
            <Subscribe />
                <div className="my-20">
                    <div className="text-center text-4xl font-bold font-ramadhan-karim text-white">
                        Organizations
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {organizations.map((organization) => (
                            <div
                                key={organization.id}
                                className="flex items-center justify-center w-24 h-24 bg-white rounded-lg shadow-lg"
                            >
                                <img
                                    src={organization.logo}
                                    alt={organization.name}
                                    className="w-20 h-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            <Player />
            </div>
        </App>
    );
}
