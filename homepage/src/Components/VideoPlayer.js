import React, { useEffect, useRef, useState } from 'react';
import websiteVideo from "../images/Dropbox_Homepage.mp4";
import "./VideoPlayer.css";
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const rect = videoElement.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (isPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isPlaying]);

  return (
    
    // line no 40 was like this before <video ref={videoRef} loop controls> the reason i removed the control 
    // is because it was showing the controls on the video and i dont want that to happen so i removed it 
    // and it worked fine so if you want controls on the video you can add it back
    <video ref={videoRef} loop muted="true">
      <source src={websiteVideo} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
