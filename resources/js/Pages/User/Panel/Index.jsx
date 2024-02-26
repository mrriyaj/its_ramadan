import App from "@/Layouts/AppLayout";

export default function Index({ auth }) {

    return (
        <App auth={auth}>
            <div className="min-h-screen relative mt-10">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="p-6">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <div className="sm:flex sm:space-x-5">
                                    <div className="flex-shrink-0">
                                        <img className="w-20 h-20 mx-auto rounded-full" src={auth.user.profile} alt="" />
                                    </div>
                                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                        <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{auth.user.first_name}</p>
                                        <p className="text-sm font-medium text-gray-600">{auth.user.email}</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-center sm:mt-0">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-second-600 border border-transparent rounded-md shadow-sm hover:bg-second-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-second-500"
                                    >
                                        View profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-lg bg-white shadow">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="w-6 h-6 text-second-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Create a new project</p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Get started by creating a new project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg bg-white shadow">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="w-6 h-6 text-second-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">View your reports</p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Keep track of the latest reports from your projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
