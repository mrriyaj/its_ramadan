import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link} from "@inertiajs/react";

export default function Show({ organization, auth }) {

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Show Organization
                </h2>
            }
        >
            <Head title="Show Organization" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href={route("organizations.edit", organization.id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route("organizations.index")}
                            className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
                        >
                            Back
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-bold">Logo</label>
                                <img src={organization.logo} alt="Logo" className="w-24 h-24 rounded-full object-cover mt-5" />
                            </div>
                            <div>
                                <label className="font-bold">Cover</label>
                                <img src={organization.cover} alt="Cover" className="w-24 h-24 rounded-full object-cover mt-5" />
                            </div>
                            <div>
                                <label className="font-bold">Organization Name</label>
                                <span>{organization.name}</span>
                            </div>
                            <div>
                                <label className="font-bold">Description</label>
                                <span>{organization.description}</span>
                            </div>
                            <div>
                                <label className="font-bold">Address Line 1</label>
                                <span>{organization.address_line_1}</span>
                            </div>
                            <div>
                                <label className="font-bold">Address Line 2</label>
                                <span>{organization.address_line_2}</span>
                            </div>
                            <div>
                                <label className="font-bold">District</label>
                                <span>{organization.district}</span>
                            </div>
                            <div>
                                <label className="font-bold">Country</label>
                                <span>{organization.country}</span>
                            </div>
                            <div>
                                <label className="font-bold">Postal Code</label>
                                <span>{organization.postal_code}</span>
                            </div>
                            <div>
                                <label className="font-bold">Email</label>
                                <span>{organization.email}</span>
                            </div>
                            <div>
                                <label className="font-bold">Number</label>
                                <span>{organization.number}</span>
                            </div>
                            <div>
                                <label className="font-bold">WhatsApp</label>
                                <span>{organization.whatsapp}</span>
                            </div>
                            <div>
                                <label className="font-bold">WhatsApp Group</label>
                                <span>{organization.whatsapp_group}</span>
                            </div>
                            <div>
                                <label className="font-bold">Facebook</label>
                                <span>{organization.facebook}</span>
                            </div>
                            <div>
                                <label className="font-bold">Instagram</label>
                                <span>{organization.instagram}</span>
                            </div>
                            <div>
                                <label className="font-bold">Twitter</label>
                                <span>{organization.twitter}</span>
                            </div>
                            <div>
                                <label className="font-bold">Website</label>
                                <span>{organization.website}</span>
                            </div>
                            <div>
                                <label className="font-bold">YouTube</label>
                                <span>{organization.youtube}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
