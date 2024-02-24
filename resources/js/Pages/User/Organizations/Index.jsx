import { Head, Link } from '@inertiajs/react';
import App from '@/Layouts/AppLayout';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function Index({ auth, organizations}) {
    return (
        <App auth={auth}>
            <Head title="Welcome" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">

                        <section className="max-w-7xl bg-main-default mx-6 py-8">
                            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {organizations.map((organization) => (
                                    <li
                                        key={organization.id}
                                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                                    >
                                        <div className="flex flex-1 flex-col p-8">
                                            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={organization.logo} alt="" />
                                            <h3 className="mt-6 text-sm font-medium text-gray-900">{organization.name}</h3>
                                            <dl className="mt-1 flex flex-grow flex-col justify-between">
                                                <dt className="sr-only">Title</dt>
                                                <dd className="text-sm text-gray-500">{organization.id}</dd>
                                                <dt className="sr-only">Role</dt>
                                                <dd className="mt-3">
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                                        {organization.description}
                                                    </span>
                                                </dd>
                                            </dl>
                                            <Link key={organization.id} href={`/organizations/${organization.id}`} className='inline-flex items-center px-4 py-2 bg-main-default dark:bg-second-default border border-transparent rounded-md font-semibold text-xs text-white dark:text-second-800 uppercase tracking-widest hover:bg-second-700 dark:hover:bg-white focus:bg-second-700 dark:focus:bg-white active:bg-second-900 dark:active:bg-second-300 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150'>View</Link>
                                        </div>
                                        <div>
                                            <div className="-mt-px flex divide-x divide-gray-200">
                                                <div className="flex w-0 flex-1">
                                                    <a
                                                        href={`mailto:${organization.email}`}
                                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                    >
                                                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-3">Email</span>
                                                    </a>
                                                </div>
                                                <div className="-ml-px flex w-0 flex-1">
                                                    <a
                                                        href={`tel:${organization.telephone}`}
                                                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                    >
                                                        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-3">Call</span>
                                                    </a>
                                                    </div>
                                            </div>
                                        </div>
                                        </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </App>
    );
}
