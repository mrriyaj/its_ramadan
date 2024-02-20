import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, user }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Users
                </h2>
            }
        >
            <Head title="Users Show" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="pb-7 sm:flex sm:items-center">
                        <div className="sm:flex-auto pb-2 max-w-7xl flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-white">
                                Users
                            </h1>

                            <Link
                                className="text-white"
                                href={route("users.index")}
                            >
                                Go Back
                            </Link>
                        </div>
                    </div>

                    <div className="mt-1 mb-2">
                        <p className="text-white">First Name : </p>
                        <p className="text-white">{user.first_name}</p>
                        <br/>
                        <br/>
                        <p className="text-white">Last Name : </p>
                        <p className="text-white">{user.last_name}</p>
                        <br/>
                        <br/>
                        <p className="text-white">Gender : </p>
                        <p className="text-white">{user.gender}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Date of Birth : </p>
                        <p className="text-white">{user.dob}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Address : </p>
                        <p className="text-white">{user.address_line_1} {user.address_line_2} {user.city} {user.district} {user.country} {user.postal_code}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Education Level : </p>
                        <p className="text-white">{user.education_level}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Institute Name : </p>
                        <p className="text-white">{user.institute_name}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Phone : </p>
                        <p className="text-white">{user.phone}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Whatsapp : </p>
                        <p className="text-white">{user.whatsapp}</p>
                        <br/>
                        <br/>

                        <p className="text-white">User Role : </p>
                        <p className="text-white">{user.role}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Email : </p>
                        <p className="text-white">{user.email}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Provider : </p>
                        <p className="text-white">{user.provider}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Provider ID : </p>
                        <p className="text-white">{user.provider_id}</p>
                        <br/>
                        <br/>

                        <p className="text-white">Provider Token : </p>
                        <p className="text-white">{user.provider_token}</p>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
