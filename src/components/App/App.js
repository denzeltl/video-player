import React from 'react';
import Video from '../Video/Video';
import Menu from '../Menu/Menu';

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
};

function App() {
    const 

    return (
        <div>
            <h1>Video Player</h1>
            <Menu />
            <Video />
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { src: VIDEOS.fast };
    }
}

export default App;
