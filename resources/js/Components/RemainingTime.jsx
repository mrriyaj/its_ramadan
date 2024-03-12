import React, { useState } from "react";
import { useEffect } from "react";
import Link from "@/Components/Link";

const RemainingTime = ({ qEndDate, qStartDate, useType, href }) => {
    const [startDate, setStartDate] = useState(new Date(qStartDate));
    const [endDate, setEndDate] = useState(new Date(qEndDate));
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
            calculateDuration();
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once

    const calculateDuration = () => {
        const difference = endDate.getTime() - currentDate.getTime();
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return (
            <>
                <div className="flex gap-5">
                    <div>
                        <span className="text-xl sm:text-2xl">{days}</span>
                        <span className="ml-2 sm:text-sm text-xs">days</span>
                    </div>
                    <div>
                        <span className="text-xl sm:text-2xl">
                            {hours % 24}
                        </span>
                        <span className="ml-2 sm:text-sm text-xs">hours</span>
                    </div>
                    <div>
                        <span className="text-xl sm:text-2xl">
                            {minutes % 60}
                        </span>
                        <span className="ml-2 sm:text-sm text-xs">minutes</span>
                    </div>
                    <div>
                        <span className="text-xl sm:text-2xl">
                            {seconds % 60}
                        </span>
                        <span className="ml-2 sm:text-sm text-xs">seconds</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            {useType === "Time" && (
                <div>
                    {currentDate >= startDate && currentDate <= endDate ? (
                        <div>{calculateDuration()}</div>
                    ) : (
                        <div
                            className={
                                currentDate < startDate
                                    ? `text-green-500 text-xl`
                                    : `text-red-500 text-xl`
                            }
                        >
                            {currentDate < startDate
                                ? "Please wait for the question to start."
                                : "Time up for the question."}
                        </div>
                    )}
                </div>
            )}

            {useType === "Button" && (
                <div>
                    {currentDate >= startDate && currentDate <= endDate ? (
                        <div>
                            <Link
                                className="w-full justify-center rounded-none"
                                href={href}
                                value="Answer Now"
                            />
                        </div>
                    ) : (
                        <div className="">
                            <Link
                                className="w-full justify-center rounded-none cursor-not-allowed !bg-red-200 !text-red-900"
                                value={
                                    currentDate < startDate
                                        ? "Please wait"
                                        : "Time up"
                                }
                                disabled={true}
                            />
                        </div>
                    )}

                    {/* {startDate.getTime() < endDate.getTime() ? (
                        <div>
                            <Link
                                className="w-full justify-center rounded-none"
                                href={href}
                                value="Answer Now"
                            />
                        </div>
                    ) : (
                        <div className="">
                            <Link
                                className="w-full justify-center rounded-none cursor-not-allowed !bg-red-200 !text-red-900"
                                value=" Please try next question"
                                disabled={true}
                            />
                        </div>
                    )} */}
                </div>
            )}
        </>
    );
};

export default RemainingTime;
