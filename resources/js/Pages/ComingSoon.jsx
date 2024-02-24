import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ComingSoon() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const fadeAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
    });

    useEffect(() => {
        const targetDate = new Date("2024-03-01T12:00:00");
        const timer = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
                <div class="stars">
                            <animated.div style={fadeAnimation} className="flex flex-col items-center justify-center h-screen">
                                <div className="flex gap-4 mb-10">
                                    <div className="font-dancing-script text-6xl text-white">It's </div><div className="font-ramadhan-karim text-6xl text-second-default">Ramadan</div>
                                </div>
                                <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
                                <p className="text-lg text-white mb-8">Stay tuned! We're launching in:</p>
                                <div className="text-2xl font-bold text-second-default">
                                    {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
                                </div>

                            </animated.div>
                </div>
        </>
    );
}
