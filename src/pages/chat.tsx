import ChatInput from "@/components/chat-input";
import HeroSection from "@/components/hero-section";
import AppLayout from "@/layouts/app-layout";
import useChatStateStore from "@/store/chatState";
import ChatWindow from "@/components/chat-window";
import { suggestions } from "@/constants";

const Chat = () => {
  const chatState = useChatStateStore(
    (state: unknown) => (state as { chatState: string }).chatState
  );
  return (
    <div>
      <AppLayout>
        {/* <SlashInput /> */}
        <div className="flex flex-1 flex-col gap-4 md:px-20">
          {chatState === "none" && <HeroSection />}
          <div className="flex flex-col bg-white px-4 md:px-20 rounded-xl">
            <div className="w-full max-w-3xl h-full mx-auto">
              <ChatWindow suggestions={suggestions} chatState={chatState} />
              <div className="sticky bottom-0">
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Chat;
