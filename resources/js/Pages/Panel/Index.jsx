import App from "@/Layouts/AppLayout";
import { usePage, Head } from "@inertiajs/react";

export default function Index({ auth, organizations }) {
    const user = usePage().props.auth.user;

    return (
        <App auth={auth}>
            <Head title="Panel" />
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
                            {/* {user.role === 'superadmin' || user.role === 'admin' ?
                                <div className="overflow-hidden rounded-lg bg-white shadow">
                                    <div className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">Create organization</p>
                                                <p className="text-sm text-gray-500">Create a new organization</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null} */}

                            {organizations.length === 0 && (user.role === 'superadmin' || user.role === 'admin' || user.role === 'orgadmin') &&
                                <div className="overflow-hidden rounded-lg bg-white shadow">
                                    <div className="p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">No organization found</p>
                                                <p className="text-sm text-gray-500">You have not joined any organization yet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {user.role === 'superadmin' || user.role === 'admin' || user.role === 'orgadmin' ? (
                                organizations.map((organization) => (
                                    <div key={organization.id} className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-10 h-10 rounded-full" src={organization.logo} alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{organization.name}</p>
                                                    <p className="text-sm text-gray-500">{organization.email}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <a
                                                    href={`/organizations/${organization.id}`}
                                                    className="text-sm font-medium text-second-600 hover:text-second-700"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
        </App>
    );
}
