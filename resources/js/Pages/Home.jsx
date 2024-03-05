import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import Hero from "@/Components/Hero";
import Subscribe from "@/Components/Subscribe";
import TodayQuiz from "@/Components/TodayQuiz";
import Player from "@/Components/Player";

export default function Home({ auth }) {
    return (
        <App auth={auth}>
            <Head title="Welcome" />
            <Hero />
            <Subscribe />
            <Player />
            <TodayQuiz />
        </App>
    );
}
