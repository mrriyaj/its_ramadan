import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";
import ContactForm from "@/Components/ContactForm";

export default function Contact({ auth }) {
    return (
        <App auth={auth}>
            <Head title="Contact" />
            <ContactForm />
        </App>
    );
}
