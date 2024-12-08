import TypingText from "@/components/typing-text";
import { PROJECT_STATUS } from "@/constants";

const ProjectStatus = ({ chatState }: { chatState: string }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-end w-full p-4">
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#D9D9D930] rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            {chatState}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg">
          Project Status: <span className="font-semibold">Midtown NYC</span>
        </h2>
        <div className="w-full border-2 h-6 flex items-center   rounded-full">
          <div
            style={{
              width: "60%",
            }}
            className="bg-[#005BEF] flex items-center justify-end h-full rounded-full"
          >
            <span className="text-white text-xs px-2">60%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#92909599]">01/01/2022</p>
          <p className="text-xs text-[#92909599]">01/04/2025</p>
        </div>
      </div>
      <div className="py-4 w-full space-y-2">
        <TypingText>{PROJECT_STATUS}</TypingText>
      </div>
    </div>
  );
};

export default ProjectStatus;
