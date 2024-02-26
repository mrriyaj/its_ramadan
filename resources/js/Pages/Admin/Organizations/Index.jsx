import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import SortableTableHeader from "@/Components/SortableTableHeader";

export default function Index({ auth, organizations: initialOrganizations }) {
    const [organizations, setOrganizations] = useState(initialOrganizations);
    const [search, setSearch] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const deleteOrganization = (organizationId) => {
        axios
            .delete(
                route("organizations.destroy", { organization: organizationId })
            )
            .then(() => {
                setOrganizations(
                    organizations.filter(
                        (organization) => organization.id !== organizationId
                    )
                );
            });
    };

    const filteredOrganizations = organizations.filter((organization) => {
        const searchMatch = organization.name && organization.email
            .toLowerCase()
            .includes(search.toLowerCase());

        return searchMatch;
    });

    const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
        if (!sortColumn) return 0;

        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortOrder === "asc") {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });

    const handleSort = (column) => {
        setSortColumn(column);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

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
                    <div className="flex justify-end">
                        <Link
                            className="pr-3 my-2 font-medium text-white-600 dark:text-white hover:underline"
                            href={route("organizations.create")}
                        >
                            Create Organization
                        </Link>
                    </div>

                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="pt-2 flex items-center">
                                <TextInput
                                    type="text"
                                    placeholder="Search..."
                                    className="px-2 py-1 mx-2"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        {sortedOrganizations.length === 0 ? (
                                    <p className="">
                                        No entries found.
                                    </p>
                                ) : (
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <SortableTableHeader
                                        column="profile"
                                        title="Profile"
                                        sortColumn={sortColumn}
                                        sortOrder={sortOrder}
                                        onSort={handleSort}
                                    />
                                    <SortableTableHeader
                                        column="name"
                                        title="Name"
                                        sortColumn={sortColumn}
                                        sortOrder={sortOrder}
                                        onSort={handleSort}
                                    />
                                    <SortableTableHeader
                                        column="email"
                                        title="Email"
                                        sortColumn={sortColumn}
                                        sortOrder={sortOrder}
                                        onSort={handleSort}
                                    />
                                    <SortableTableHeader
                                        column="isActive"
                                        title="Active"
                                        sortColumn={sortColumn}
                                        sortOrder={sortOrder}
                                        onSort={handleSort}
                                    />

                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedOrganizations.map((organization) => (
                                    <tr
                                        key={organization.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <span className="inline-flex rounded-md">
                                                {organization.logo ? (
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={organization.logo}
                                                        alt="logo"
                                                    />
                                                ) : (
                                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
                                                        <span className="text-lg font-medium leading-none text-white">
                                                            {organization.name.substring(
                                                                0,
                                                                2
                                                            )}
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                        </th>
                                        <td className="px-6 py-4">
                                            {organization.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {organization.is_active ? (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    Inactive
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                className="pr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                href={route(
                                                    "organizations.show",
                                                    {
                                                        organization:
                                                            organization.id,
                                                    }
                                                )}
                                            >
                                                Show
                                            </Link>
                                            <Link
                                                className="pr-3 font-medium text-green-600 dark:text-green-500 hover:underline"
                                                href={route(
                                                    "organizations.edit",
                                                    {
                                                        organization:
                                                            organization.id,
                                                    }
                                                )}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                onClick={() =>
                                                    deleteOrganization(
                                                        organization.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        </div>
                                )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
