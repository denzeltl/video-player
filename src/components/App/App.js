import React, { useState } from 'react';
import Video from '../Video/Video';
import Menu from '../Menu/Menu';

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
};

function App() {
    const [state, setState] = useState({ src: VIDEOS.fast });

    const chooseVideo = (text) => {
        let newVideo = VIDEOS[text];
        setState({ src: newVideo });
    };

    return (
        <div>
            <h1>Video Player</h1>
            <Menu chooseVideo={chooseVideo} />
            <Video src={state.src} />
        </div>
    );
}

export default App;
