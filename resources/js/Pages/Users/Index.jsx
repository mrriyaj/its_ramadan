import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import axios from "axios";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, users: initialUsers }) {
    const [users, setUsers] = useState(initialUsers);

    const deleteUser = (userId) => {
        axios.delete(route("users.destroy", { user: userId })).then(() => {
            setUsers(users.filter((user) => user.id !== userId));
        });
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-2xl text-secondary font-primary leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="px-4 pt-4 sm:px-6 lg:px-8">
                <div className="pb-7 sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-white">
                            Users
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            A list of all the users in your account including
                            their name, title, email and role.
                        </p>
                    </div>
                </div>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Education Level
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.email}
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {user.first_name}
                                    </th>
                                    <td class="px-6 py-4">{user.last_name}</td>
                                    <td class="px-6 py-4">{user.email}</td>
                                    <td class="px-6 py-4">{user.gender}</td>
                                    <td class="px-6 py-4">{user.phone}</td>
                                    <td class="px-6 py-4">{user.education_level}</td>
                                    <td class="px-6 py-4">{user.role}</td>
                                    <td class="px-6 py-4">
                                        <a
                                            href={route(
                                                "users.show",
                                                {
                                                    user: user.id,
                                                }
                                            )}
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Show
                                        </a>
                                        <button
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </Authenticated>
    );
}
