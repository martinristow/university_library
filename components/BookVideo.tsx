"use client";
import React from 'react'

// const convertToEmbedUrl = (url: string) => {
//     return url.split("v=")[1]
// }

const BookVideo = ({videoUrl}: {videoUrl: string}) => {
    // const embedUrl = convertToEmbedUrl(videoUrl)
    return (
        <div>
            <iframe width="971" height="546" src={`https://www.youtube.com/embed/cpCWyzpHywc`}
                    title="100 Stephen Curry Shots That Shocked the NBA" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </div>
    )
}
export default BookVideo
