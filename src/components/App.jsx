class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

  }
  componentDidMount() {
    this.props.searchYouTube({q: 'react tutorials'}, (data) => {
      this.setState({
        videos: data
      }); 
    });
  }

  handleUserInput(currentVideo) {
    this.setState({
      currentVideo: currentVideo
    });
  }

  handleUserSearch(query) {  
    this.props.searchYouTube({q: query}, (data) => {
      console.log('fired');
      this.setState({
        videos: data
      }); 
    });
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.handleUserSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoTitleClick={this.handleUserInput.bind(this)} videos={this.state.videos} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
