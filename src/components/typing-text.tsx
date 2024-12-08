import { useEffect, useState } from "react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import Markdown from "react-markdown";
import ChatBubble from "@/components/chat-bubble";
import useChatStateStore from "@/store/chatState";
import CongreatIcon from "@/assets/congreat-icon.png";
import { menuActions } from "@/constants";

type SourceType = {
  count: string;
  src: string;
};
const TypingText = ({ children }: { children: string }) => {
  const sources = [
    {
      count: "2",
      src: "excel",
    },
    {
      count: "5",
      src: "monday",
    },
    {
      src: "outlook",
      count: "11",
    },
    {
      src: "excel",
      count: "11",
    },
  ];
  const chatState = useChatStateStore(
    (state: unknown) => (state as { chatState: string }).chatState
  );
  const TIME_PER_LETTER = 10;
  const [showTypingEffect, setShowTypingEffect] = useState(false);
  const { text, done } = useTypingEffect(
    children,
    TIME_PER_LETTER,
    showTypingEffect
  );
  const setSources = useChatStateStore(
    (state: unknown) =>
      (state as { setSources: (sources: SourceType[]) => void }).setSources
  );
  useEffect(() => {
    // Show the actual text typing effect after 2 seconds
    const timer = setTimeout(() => {
      setShowTypingEffect(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const enhancedText = done ? text : `${text} \`..\``;

  useEffect(() => {
    if (done && menuActions.includes(chatState)) {
      setSources(sources);
    } else {
      setSources([]);
    }
  }, [done]);
  return (
    <div className="flex items-center gap-2 flex-initial">
      {/* Blue circle at the front */}

      {/* Typing icon or text */}
      {!showTypingEffect ? (
        <ChatBubble />
      ) : (
        <div className="inline-flex items-center gap-2">
          <div className="inline space-y-4">
            <Markdown
              components={{
                h1: ({ children }) => {
                  return <h1 className="font-semibold text-lg">{children}</h1>;
                },
                h2: ({ children }) => {
                  return <h2 className="font-semibold">{children}</h2>;
                },
                h3: ({ children }) => {
                  return (
                    <span className="items-center text-[14px] text-[#929095] flex max-w-fit gap-2 px-4 py-1 rounded-full border">
                      <img
                        className="h-6 mb-1 w-auto"
                        src={CongreatIcon}
                        alt="congreat-icon"
                      />
                      <span>{children}</span>
                    </span>
                  );
                },
                ul: ({ children }) => {
                  return (
                    <ul className="list-disc list-inside ml-4">{children}</ul>
                  );
                },
                em: ({ children }) => {
                  return (
                    <div className="py-2">
                      <div className="flex items-center gap-2">
                        <input className="h-4 w-4" type="checkbox" />
                        <span>{children}</span>
                      </div>
                    </div>
                  );
                },
                code: () => {
                  return (
                    <span className="h-4 w-4 rounded-full bg-[#005BEF] inline-block">
                      {/* {children} */}
                    </span>
                  );
                },
              }}
            >
              {enhancedText}
            </Markdown>
          </div>
        </div>
      )}
    </div>
  );
};
export default TypingText;
