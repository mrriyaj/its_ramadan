import React from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = ({ url }) => {
    return (
        <div className="">
            <ReactPlayer
                className="react-player"
                url={url}
                width="100%"
                // height="100%"
            />
        </div>
    );
};

export default YoutubePlayer;
