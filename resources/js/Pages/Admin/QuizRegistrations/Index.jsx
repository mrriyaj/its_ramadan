import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, quizRegistrations}) {

    console.log(quizRegistrations)
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Quiz Registrations
                </h2>
            }
        >
            <Head title="Quiz Registrations" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quiz Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizRegistrations.map((quizR) => (
                                    <tr
                                        key={quizR.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {quizR.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {quizR.quiz.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {quizR.user.first_name} {quizR.user.last_name}
                                        </td>
                                        <td className="px-6 py-4">
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
