import { Head } from '@inertiajs/react';
import App from '@/Layouts/AppLayout';

    export default function Home({ auth }) {
        return (
            <>
                <App auth={auth} />
                <Head title="Welcome" />
            </>
        );
    }
