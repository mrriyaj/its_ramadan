import { Head } from "@inertiajs/react";
import App from "@/Layouts/AppLayout";

export default function Index({ auth, chapters }) {

    console.log(chapters);
    return (
        <App auth={auth}>
            <Head title="Quran" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Quran</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg font-semibold">{chapter.name}</h3>
                                <p className="text-gray
                                -500 mt-2">{chapter.translated_name.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </App>
    );
}
