import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

const people = [
    {
        name: "Org Name",
        quizTitle: "Quiz #12",
        quiz: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        time: "2 Hr 49 Min Remaining",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
        name: "Org Name",
        quizTitle: "Quiz #12",
        quiz: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        time: "2 Hr 49 Min Remaining",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
        name: "Org Name",
        quizTitle: "Quiz #12",
        quiz: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        time: "2 Hr 49 Min Remaining",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
        name: "Org Name",
        quizTitle: "Quiz #12",
        quiz: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        time: "2 Hr 49 Min Remaining",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    // More people...
];

export default function TodayQuiz() {
    return (
        <>
            <div>
                <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
                    <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-8xl sm:tracking-tight text-center font-ramadhan-karim">
                        Today's Quiz
                    </h2>
                    <div className="rounded-lg  px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center ">
                        <ul
                            role="list"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-space-between w-full"
                        >
                            {people.map((person) => (
                                <li
                                    key={person.email}
                                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                                >
                                    <div className="flex w-full items-center justify-between space-x-6 p-6 ">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="truncate text-md font-medium text-gray-900">
                                                    {person.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <img
                                            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                            src={person.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-full items-center justify-between p-6">
                                        <h3 className="text-md font-medium text-gray-900">
                                            {person.quizTitle}
                                        </h3>
                                        <p className="text-sm font-bold text-gray-500 my-2">
                                            {person.quiz}
                                        </p>
                                        <h3 className="text-sm font-medium text-second-500 mt-3 bg-second-100 py-1 px-5 rounded-md text-center">
                                            {person.time}
                                        </h3>
                                    </div>
                                    <div>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            <div className="flex w-0 flex-1 ">
                                                <a
                                                    // href={`mailto:${person.email}`}
                                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-main-700 hover:text-main-500"
                                                >
                                                    <ArrowRightCircleIcon
                                                        className="h-5 w-5 text-main-400"
                                                        aria-hidden="true"
                                                    />

                                                    <span className="ml-3">
                                                        Attempt
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
