import { PlayIcon } from "lucide-react";
import React, { useRef, useState } from "react";

interface VideoPlayerProps {
  sample: string; // The video source
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ sample }) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Type the video ref
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full bg-white">
      <video
        ref={videoRef}
        className="w-full h-[40vh] object-cover rounded" // Adjust the height as needed
        onClick={handleVideoPlay} // Play/pause on video click
        onEnded={() => setIsPlaying(false)} // Reset play state when video ends
      >
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          onClick={handleVideoPlay}
          className="absolute top-1/2 p-4 bg-[#005BEF] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-4xl rounded-full"
          aria-label="Play Video"
        >
          <PlayIcon className="h-10 w-10" />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
