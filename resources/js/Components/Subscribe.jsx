import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const Subscribe = () => {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
                <div className="rounded-lg bg-main-900 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    {/* left side */}
                    <div className="xl:w-0 xl:flex-1">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Ramadan Mubarak
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-main-200">
                            Stay with us and join our community
                        </p>
                    </div>
                    {/* Right Side */}
                    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form action="#" className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>

                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Enter your email address"
                                className="w-full rounded-md border-white px-5 py-3 placeholder-main-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-main-700"
                            ></input>
                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-second-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-second-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-second-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            >
                                Notify me
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
