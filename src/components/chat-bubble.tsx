const ChatBubble = () => {
  return (
    <div className="flex items-center">
      {/* Blue chat bubble */}
      <div className="relative px-3 py-2 bg-[#005BEF] rounded-full flex items-center justify-center">
        {/* Typing dots */}
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="h-2 w-2 bg-white rounded-full animate-[bounce_1.5s_ease-in-out_infinite]"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
