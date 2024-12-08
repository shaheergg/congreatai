import TypingText from "@/components/typing-text";
import { APARTMENT_DETAILS } from "@/constants";

type ApartmentDetailsPropsType = {
  chatState: string;
};

const ApartmentDetails = ({ chatState }: ApartmentDetailsPropsType) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-full p-4">
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#D9D9D930] rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            {chatState}
          </p>
        </div>
      </div>
      <div>
        <TypingText>{APARTMENT_DETAILS}</TypingText>
      </div>
    </div>
  );
};

export default ApartmentDetails;
