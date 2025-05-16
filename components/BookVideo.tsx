"use client";
import React from 'react'
import ReactPlayer from "react-player";

const BookVideo = ({videoUrl}: {videoUrl: string}) => {
    return (
        <div>
            <ReactPlayer url={videoUrl} width="100%" controls />
        </div>
    )
}
export default BookVideo
