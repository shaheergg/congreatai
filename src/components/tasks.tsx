import TypingText from "@/components/typing-text";
import { TASKS } from "@/constants";

const Tasks = ({ chatState }: { chatState: string }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end w-full p-4">
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#D9D9D930] rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            {chatState}
          </p>
        </div>
      </div>
      <TypingText>{TASKS}</TypingText>
    </div>
  );
};

export default Tasks;
