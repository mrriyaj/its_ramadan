import React, { useState, useEffect } from "react";

const RamadanCountdown = () => {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const [todayRamadanDay, setTodayRamadanDay] = useState(0);

    useEffect(() => {
        const endDate = new Date("2024-04-11"); // Set the end date of Ramadan
        const today = new Date();
        const differenceInTime = endDate.getTime() - today.getTime();

        const remainingDays = Math.ceil(
            differenceInTime / (1000 * 3600 * 24) - 1
        );

        setTodayRamadanDay(30 - remainingDays);
        setDaysRemaining(remainingDays);
    }, []);

    return (
        <div>
            <div className="text-4xl font-bold text-second-default m-1">
                <div className="flex items-center  gap-10 bg-second-default p-4 sm:p-10 rounded-lg justify-around ">
                    <div className="flex flex-col items-center  gap-1 text-white">
                        <span className="text-3xl sm:text-6xl text-white">
                            {todayRamadanDay}
                            <span className="text-xl">Day</span>
                        </span>
                        <span className="text-lg sm:text-3xl text-white">
                            Completed
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl sm:text-6xl text-white">
                            {daysRemaining}
                            <span className="text-xl">Days</span>
                        </span>
                        <span className=" text-lg sm:text-3xl text-white">
                            Remaining
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RamadanCountdown;
