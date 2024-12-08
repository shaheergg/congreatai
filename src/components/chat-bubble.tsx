const ChatBubble = () => {
  return (
    <div className="flex items-center">
      {/* Blue chat bubble */}
      <div className="px-2 py-2 bg-[#005BEF] rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
        {/* Typing dots */}
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="h-1 w-1 bg-white rounded-full animate-[bounce_1.5s_ease-in-out_infinite]"
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
