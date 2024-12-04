import CongreatIcon from "@/assets/congreat-icon.png";
import { useIsMobile } from "@/hooks/use-mobile";
import useChatStateStore from "@/store/chatState";
import { motion } from "framer-motion";

type SuggestionType = {
  id: number;
  name: string;
};

type SuggestionListPropsType = {
  suggestions: SuggestionType[];
};

const SuggestionsList = ({ suggestions }: SuggestionListPropsType) => {
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (chatState: string) => void }).setChatState
  );

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay for stacking animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below
    visible: { opacity: 1, y: 0 }, // Move to its position
  };

  const setMessage = useChatStateStore(
    (state: unknown) =>
      (state as { setMessage: (message: string) => void }).setMessage
  );
  const isMobile = useIsMobile();
  const handleSubmit = (suggestion: SuggestionType) => {
    setChatState(suggestion.name);
    setMessage(suggestion.name);
  };
  return (
    <>
      <div className="px-4 space-y-2">
        {!isMobile && (
          <p className="text-[18px] pb-8">
            Manage any detail from the{" "}
            <span className="font-semibold">Cockpit</span>!
          </p>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse space-y-2"
        >
          {[...suggestions].reverse().map((suggestion) => (
            <motion.button
              variants={itemVariants}
              key={suggestion.id}
              onClick={() => handleSubmit(suggestion)}
              className="border mt-2 border-[#D4D4D8] max-w-fit px-3 py-1 rounded-[5px] text-[#929095CC] text-[14px] flex items-center justify-between"
            >
              <img
                src={CongreatIcon}
                className="mb-1 mr-1"
                alt="congreat icon"
              />
              {suggestion.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SuggestionsList;
