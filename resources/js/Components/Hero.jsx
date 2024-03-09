import { ChevronRightIcon } from "@heroicons/react/20/solid";
import image from "../../../public/image/Image.png";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Hero() {

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
        const targetDate = new Date("2024-03-11T12:00:00");
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
        <div className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-4 pb-24 sm:pb-32 lg:flex lg:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-12 sm:mt-16 lg:mt-8">
                            <animated.div style={fadeAnimation} className="flex flex-col">
                                <h1 className="text-6xl font-bold text-white mb-4">Ramadan <div className="bg-second-default">Countdown</div></h1>
                                <p className="text-lg text-white mb-8">The holy month of Ramadan is coming soon. Let's prepare for it.</p>
                                <div className="text-4xl font-bold text-second-default">
                                    <div className="flex items-center justify-center gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <span>{countdown.days}</span>
                                        <span>Days</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span>{countdown.hours}</span>
                                        <span>Hours</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span>{countdown.minutes}</span>
                                        <span>Minutes</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span>{countdown.seconds}</span>
                                        <span>Seconds</span>
                                    </div>
                                    </div>
                                </div>
                            </animated.div>
                    </div>
                    {/* <h1 className="mt-10 text-4xl font-bold font-ramadhan-karim tracking-tight text-white sm:text-[8rem] sm:leading-[6rem] ">
                        Ramadan <br />
                        <span className="text-second-500 font-ramadhan-karim">Kareem</span>
                    </h1> */}
                    <p className="mt-6 text-lg leading-8 text-main-300">
                        Happy Ramadan!! in the holy month of Ramadan, May your
                        heart be filled with peace, harmony and joy.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="/organizations"
                            className="rounded-md bg-second-500 px-8 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-second-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-second-400"
                        >
                            Organizations
                        </a>
                        <a
                            href="#"
                            className="text-base font-semibold leading-7 text-white"
                        >
                            Ramadan Calendar <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src={image}
                            alt="Image of Ramadan Kareem"
                            className="lg:w-[30rem] rounded-md bg-cover bg-no-repeat bg-center "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
