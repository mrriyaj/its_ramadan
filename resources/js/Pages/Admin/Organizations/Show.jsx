import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

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
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 grid grid-cols-2 gap-4">
                            <div>
                                <InputLabel>Logo</InputLabel>
                                <img src={organization.logo} alt="Logo" className="w-24 h-24 rounded-full object-cover mt-5"/>
                            </div>
                            <div>
                                <InputLabel>Cover</InputLabel>
                                <img src={organization.cover} alt="Cover" className="w-24 h-24 rounded-full object-cover mt-5" />
                            </div>
                            <div>
                                <InputLabel>Address Line 1</InputLabel>
                                <TextInput className="mt-1 block w-full" value={organization.address_line_1} disabled />
                            </div>
                            <div>
                                <InputLabel>Address Line 2</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.address_line_2} disabled />
                            </div>
                            <div>
                                <InputLabel>District</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.district} disabled />
                            </div>
                            <div>
                                <InputLabel>Country</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.country} disabled />
                            </div>
                            <div>
                                <InputLabel>Postal Code</InputLabel>
                                <TextInput className="mt-1 block w-full" value={organization.postal_code} disabled />
                            </div>
                            <div>
                                <InputLabel>Email</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.email} disabled />
                            </div>
                            <div>
                                <InputLabel>Number</InputLabel>
                                <TextInput className="mt-1 block w-full" value={organization.number} disabled />
                            </div>
                            <div>
                                <InputLabel>WhatsApp</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.whatsapp} disabled />
                            </div>
                            <div>
                                <InputLabel>WhatsApp Group</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.whatsapp_group} disabled />
                            </div>
                            <div>
                                <InputLabel>Facebook</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.facebook} disabled />
                            </div>
                            <div>
                                <InputLabel>Instagram</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.instagram} disabled />
                            </div>
                            <div>
                                <InputLabel>Twitter</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.twitter} disabled />
                            </div>
                            <div>
                                <InputLabel>Website</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.website} disabled />
                            </div>
                            <div>
                                <InputLabel>YouTube</InputLabel>
                                <TextInput className="mt-1 block w-full"  value={organization.youtube} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
