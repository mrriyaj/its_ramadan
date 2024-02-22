import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, organizations: initialUsers }) {
    const [organizations, setOrganizations] = useState(initialUsers);

    // const deleteUser = (userId) => {
    //     axios.delete(route("users.destroy", { user: userId })).then(() => {
    //         setUsers(users.filter((user) => user.id !== userId));
    //     });
    // };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Organization
                </h2>
            }
        >
            <Head title="Organizations" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizations.map((organization) => (
                                    <tr
                                        key={organization.name}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {organization.first_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {organization.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* <Link className="pr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                href={route(
                                                    "users.show",
                                                    {
                                                        user: user.id,
                                                    }
                                                )}
                                            >
                                                Show
                                            </Link>
                                            <button
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                onClick={() =>
                                                    deleteUser(organization.id)
                                                }
                                            >
                                                Delete
                                            </button> */}
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
}
