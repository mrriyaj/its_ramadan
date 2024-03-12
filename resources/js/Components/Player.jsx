import React, { useState, useRef } from "react";

import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";

const Player = ({ audioUrl = "http://220.247.227.6:8000/Tnsstream" }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const volumeValue = parseFloat(e.target.value);
        setVolume(volumeValue);
        audioRef.current.volume = volumeValue;
    };

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        const progressPercentage = (currentTime / duration) * 100;
        setProgress(progressPercentage);
    };

    const handleProgressClick = (e) => {
        const audio = audioRef.current;
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = e.target.clientWidth;
        const clickPercentage = (clickPosition / progressBarWidth) * 100;
        const newTime = (clickPercentage / 100) * audio.duration;
        audio.currentTime = newTime;
    };

    return (
        <div className="mx-auto max-w-7xl  px-6  lg:px-8 py-20">
            <div className="rounded-lg bg-main-900 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16">
                <audio
                    ref={audioRef}
                    src={audioUrl}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>

                <img
                    src="http://sri-lanka.mom-gmr.org/uploads/_processed_/1/a/csm_13552-1360_company_import_80b3dd30b0.png"
                    className="bg-contain sm:w-24 sm:h-24 w-12 h-12 rounded-full items-center justify-center mx-auto mt-4"
                />

                <div>
                    <div className="text-white text-center font-bold text-xl my-5 flex gap-2 items-center justify-center">
                        <span className="text-sm sm:text-2xl">
                            SLBC Muslim Programme
                        </span>
                        <span className=" bg-red-50 sm:px-2 sm:py-0.5 px-1 py-0.2 text-xs rounded-full text-red-500 sm:text-sm ">
                            Live
                        </span>
                    </div>
                </div>

                <div
                    className="bg-main-100 h-2 sm:w-1/2  w-3/4 cursor-pointer rounded-full overflow-hidden items-center justify-center mx-auto "
                    onClick={handleProgressClick}
                >
                    <div
                        className="bg-main-500 h-5"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>

                <div className="flex justify-center mt-5">
                    <button
                        className="bg-second-500 px-4 py-2 rounded-full w-12 h-12 text-white"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
                {/* <input
                    type="range"
                    value={volume}
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={handleVolumeChange}
                /> */}
            </div>
        </div>
    );
};

export default Player;
