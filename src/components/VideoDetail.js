import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

// whithout the if check, the state was loading as null and crashing the app.
// so by checking if there is no video (!video) we can say "Loading..."VideoDetail
// while - yes its loading - to avoid returning a null state.
// 'https://www.youtube.com/embed/' comes from the embed button on the iframe tool
// on the YT page. So we want that as a prefix to the videoId so it will play our video
// using the tags from the YT search return and then placing that in a literal string
