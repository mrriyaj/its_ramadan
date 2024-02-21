import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import { Head, Link } from "@inertiajs/react";

export default function Edit({ auth, quiz }) {

   
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                     Quiz Details
                </h2>
            }
        >
            <Head title="Quiz Details" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="pb-7 sm:flex sm:items-center">
                        <div className="sm:flex-auto pb-2 max-w-7xl flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-white">
                                Users
                            </h1>

                            <Link
                                className="text-white"
                                href={route("quizzes.index")}
                            >
                                Go Back
                            </Link>
                        </div>
                    </div>

                    <div className="mt-1 mb-2">
                        <p className="text-white">Title: </p>
                        <p className="text-white">{quiz.title}</p>
                        <br/>
                        <br/>
                        <p className="text-white">Organization : </p>
                        <p className="text-white">{quiz.organization_id}</p>
                        <br/>
                        <br/>
                        <p className="text-white">Description : </p>
                        <p className="text-white">{quiz.description}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Start Date: </p>
                        <p className="text-white">{quiz.start_date}</p>
                        <br/>
                        <br/>

                        <p className="text-white">End Date: </p>
                        <p className="text-white">{quiz.end_date}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Approval Type: </p>
                        <p className="text-white">{quiz.approval_type}</p>
                        <br/>
                        <br/>

                     
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
