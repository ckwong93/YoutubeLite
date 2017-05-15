import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBfmT2nx1uPczHa_Oat2AgQDn7XPixSPjY'


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}



// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'))
