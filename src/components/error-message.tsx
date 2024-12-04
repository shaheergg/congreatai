import { Button } from "@/components/ui/button";
import useChatStateStore from "@/store/chatState";
const ErrorMessage = () => {
  const setMessage = useChatStateStore(
    (state: unknown) =>
      (state as { setMessage: (value: string) => void }).setMessage
  );
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (value: string) => void }).setChatState
  );
  return (
    <div className="w-full h-full text-xl gap-4 p-4 rounded-md text-[#2B2E32CC] flex items-center flex-col justify-center">
      <h2 className="max-w-lg text-center">
        It seems like you're looking for something – we’d love to understand
        your needs!”
      </h2>
      <div>
        <Button
          onClick={() => {
            setMessage("Contact");
            setChatState("Contact");
          }}
        >
          Get a demo
        </Button>
      </div>
    </div>
  );
};

export default ErrorMessage;
