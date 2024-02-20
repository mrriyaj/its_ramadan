import React from 'react';
import axios from "axios";
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from "@inertiajs/react";


export default function Index({auth,quizzes:initialQuizzes}){
    const [quizzes, setQuizzes] = React.useState(initialQuizzes);


    return (
        <Authenticated 
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Quizzes
                </h2>
            }
        >
            <Head title="Quizzes" />
             <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className='flex justify-end'>
                    <Link className="pr-3 my-2 font-medium text-white-600 dark:text-white hover:underline"
                     href={route("quizzes.create")} >
                        Create Quiz
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Organization
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Start Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            End Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Approval Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizzes.map((quiz) => (
                                        <tr
                                        key={quiz.id}
                                        scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <td className="px-6 py-4">
                                                {quiz.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                {quiz.organization_id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {quiz.start_date}
                                            </td>
                                            <td className="px-6 py-4">
                                                {quiz.end_date}
                                            </td>
                                            <td className="px-6 py-4">
                                                {quiz.approval_type}
                                            </td>
                                            <td className="px-6 py-4 flex">
                                                <Link className="pr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Show
                                                </Link>
                                                <Link className="pr-3 font-medium text-yellow-600 dark:text-yellow-500 hover:underline"
                                                    href={route(
                                                        "quizzes.edit",{
                                                            quiz:quiz.id
                                                        }
                                                    )}
                                                >
                                                Edit
                                                </Link>
                                                <form 
                                                onSubmit={(
                                                    e
                                                ) => {
                                                    e.preventDefault();
                                                    axios
                                                        .delete(
                                                            route(
                                                                "quizzes.destroy",
                                                                {
                                                                    quiz:
                                                                        quiz.id,
                                                                }
                                                            )
                                                        )
                                                        .then(
                                                            () => {
                                                                setQuizzes(
                                                                    quizzes.filter(
                                                                        (
                                                                            p
                                                                        ) =>
                                                                            p.id !==
                                                                            quiz.id
                                                                    )
                                                                );
                                                            }
                                                        )
                                                        
                                                }}>


                                                    
                                                <button className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                    onClick={() =>
                                                        destroy(quiz.id)
                                                    }>
                                                Delete
                                                </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}