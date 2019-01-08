import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

// NOTES
// return <VideoItem video={video}/>; is returning the
// value of the video that we are currently iterating over.
// this is the value of the video object returned from YT
// and so we can look in the YT data returned to see what we want to pull
// out the details we want to display - such as details and thumbnails etc.
// from the console return from YT we can drill down into items - snippet - title
// to get that data
// onVideoSelect is deconstructed from props and is a callback set up in
// the parent App to get the headsup when a video list item is clicked
// we then pass that callback from props into VideoItem
