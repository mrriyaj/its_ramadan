import SortableTableHeader from "@/Components/SortableTableHeader";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, contact_us }) => {
    const { data, setData, error, reset, post, processing } = usePage({
        is_read: contact_us.is_read,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.contact.update", { id: contact_us.id }));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Messages from Contact Form
                </h2>
            }
        >
            <Head title="Contacts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <SortableTableHeader
                                        column="name"
                                        title="Name"
                                    />
                                    <SortableTableHeader
                                        column="email"
                                        title="Email"
                                    />
                                    <SortableTableHeader
                                        column="phone"
                                        title="Phone"
                                    />
                                    <SortableTableHeader
                                        column="message"
                                        title="Message"
                                    />
                                    <SortableTableHeader
                                        column="created_at"
                                        title="Received At"
                                    />

                                    <th scope="col" className="px-6 py-3">
                                        Mark as Read
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contact_us.map((contact) => (
                                    <tr
                                        key={contact.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4">
                                            {contact.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {contact.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {contact.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {contact.message}
                                        </td>
                                        <td className="px-6 py-4">
                                            {contact.created_at}
                                        </td>
                                        <td className="px-6 py-4">
                                            <input
                                                id="is_read"
                                                name="is_read"
                                                type="checkbox"
                                                checked={contact.is_read}
                                                onChange={(e) => {
                                                    setData({
                                                        is_read:
                                                            e.target.checked,
                                                    });
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
