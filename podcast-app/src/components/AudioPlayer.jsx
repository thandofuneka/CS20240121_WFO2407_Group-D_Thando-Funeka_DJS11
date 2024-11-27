import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const newTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
  };

  return (
    <div className="audio-player">
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="progress-bar" onClick={handleProgressClick}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default AudioPlayer;