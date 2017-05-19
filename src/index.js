import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBfmT2nx1uPczHa_Oat2AgQDn7XPixSPjY'

// example of YTSearch api call below
// YTSearch({key: API_KEY, term: 'gangster rap'}, function(data) {
// console.log(data)
// })

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('PSY i like');
  }
  videoSearch(term){
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({videos:videos}) es6 equivalent
    })
  }
  render(){
    const videoSearch=_.debounce((term) => { this.videoSEarch(term) }, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'))
