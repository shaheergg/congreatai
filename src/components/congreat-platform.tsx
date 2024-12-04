import VideoPlayer from "@/components/video-player";
import sample from "../assets/sample.mp4";

import TypingText from "@/components/typing-text";
const CongreatPlatform = () => {
  const text = `Congreat AI gives you full control over your most valuable asset—your home—saving up to 25% on project costs.
Designed for everyone, from CEOs to site managers and private users, our platform offers a simple, intuitive experience with “minimum actions, maximum value.”
With cutting-edge technology, real-time functionality, and top-tier data security, Congreat is the ultimate tool for construction.`;

  return (
    <div className="space-y-4 px-4 md:px-0 h-full py-8">
      <VideoPlayer sample={sample} />
      <div className="space-y-2">
        <h2 className="font-[700] text-[18px]">Congreat Platform</h2>
        <TypingText>{text}</TypingText>
        <p>Explore our features!</p>
      </div>{" "}
    </div>
  );
};

export default CongreatPlatform;
