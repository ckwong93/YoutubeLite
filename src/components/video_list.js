import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map( (video) => {
    return <VideoListItem video={video} key={video.etag}/>
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

// in class component, you don't need to pass in props, can use this.props anywhere
//
// class VideoList extends Component{
//   render(){
//     return(
//       <ul className="col-md-4 list-group">
//         {this.props.videos.length}
//       </ul>
//     )
//   }
// }

export default VideoList;
