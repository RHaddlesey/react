import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;

// NOTES
// the props here now contains the data from the YT search -
// so we can destructure the props to just get the dat we need
// and reduce having to prefix everything with this.props etc
// the onVideoSelect callback is described in videolist and
// obviously set in the parent App
// we use it here as an onClick but need to use an arrow function
// so that it refers to only the video you click and not any of the others
