import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import Hero from "@/Components/Hero";

export default function Home({ auth }) {
    return (
        <App auth={auth}>
            <Head title="Welcome" />
            <Hero />
        </App>
    );
}
