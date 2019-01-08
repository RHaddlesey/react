import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("defected radio");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// NOTES
// so in here we defined a new callback method called onVideoSelect
// we then pass that as a prop to VideoList which in turn, passes
// props down to VideoItem. Then when a user onClicks - we invoke that callback
// which sends the event back to the App component

// REMEMBER!
// we can pass down data from parent to child via props, but if we want to
// share data back up, we need to use a callback

// in semantic ui grid, the default is 16 so above we use 11 and then 5 to make up the 16

// before we add the life cycle method, the app worked just fine, however, it gave a blank screen
// on loading and did not really guide the user as to what to do.
// After the lifecycle method, we have a default search term
