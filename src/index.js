import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyBfmT2nx1uPczHa_Oat2AgQDn7XPixSPjY'

// example of YTSearch api call below
// YTSearch({key: API_KEY, term: 'gangster rap'}, function(data) {
// console.log(data)
// })

class App extends Component {
  constructor(props){
    super(props);

    this.state={ videos: [] };

    YTSearch({ key: API_KEY, term: 'gangster rap'}, (videos) => {
      this.setState({videos});
      // this.setState({videos:videos}) es6 equivalent
    })
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'))
