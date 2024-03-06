import React, { useState } from "react";
import { useEffect } from "react";

const RemainingTime = ({ qEndDate }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(qEndDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartDate(new Date());
            calculateDuration();
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once

    const calculateDuration = () => {
        const difference = endDate.getTime() - startDate.getTime();
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
        <div>
            {startDate.getTime() < endDate.getTime() ? (
                <div>{calculateDuration()}</div>
            ) : (
                <div>Time up</div>
            )}
        </div>
    );
};

export default RemainingTime;
