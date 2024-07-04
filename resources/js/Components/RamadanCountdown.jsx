import React, { useState, useEffect } from "react";

const RamadanCountdown = () => {
    const [daysUntilNextRamadan, setDaysUntilNextRamadan] = useState(0);
    const [daysSinceLastRamadan, setDaysSinceLastRamadan] = useState(0);

    useEffect(() => {
        const nextRamadanStartDate = new Date("2025-02-27");
        const lastRamadanEndDate = new Date("2024-04-10");
        const today = new Date();

        // Calculate days until the next Ramadan
        const differenceUntilNextRamadan =
            nextRamadanStartDate.getTime() - today.getTime();
        const remainingDaysUntilNextRamadan = Math.ceil(
            differenceUntilNextRamadan / (1000 * 3600 * 24)
        );
        setDaysUntilNextRamadan(remainingDaysUntilNextRamadan);

        // Calculate days since the last Ramadan ended
        const differenceSinceLastRamadan =
            today.getTime() - lastRamadanEndDate.getTime();
        const daysSinceLastRamadanEnded = Math.ceil(
            differenceSinceLastRamadan / (1000 * 3600 * 24)
        );
        setDaysSinceLastRamadan(daysSinceLastRamadanEnded);
    }, []);

    return (
        <div>
            <div className="text-4xl font-bold text-second-default m-1">
                <div className="flex items-center gap-10 bg-second-default p-4 sm:p-10 rounded-lg justify-around">
                    <div className="flex flex-col items-center gap-1 text-white">
                        <span className="text-3xl sm:text-6xl text-white">
                            {daysUntilNextRamadan}
                            <span className="text-xl">Days</span>
                        </span>
                        <span className="text-lg sm:text-3xl text-white text-center">
                        2025-02-27 Until Next Ramadan
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="text-3xl sm:text-6xl text-white">
                            {daysSinceLastRamadan}
                            <span className="text-xl">Days</span>
                        </span>
                        <span className="text-lg sm:text-3xl text-white text-center">
                            2024-04-10 Since Last Ramadan Ended
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RamadanCountdown;
