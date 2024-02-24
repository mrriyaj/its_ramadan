import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import Hero from "@/Components/Hero";
import Subscribe from "@/Components/Subscribe";

export default function Home({ auth }) {
    return (
        <App auth={auth}>
            <Head title="Welcome" />
            <Hero />
            <Subscribe />
        </App>
    );
}
