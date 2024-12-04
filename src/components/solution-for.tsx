import TypingText from "@/components/typing-text";
import { SOLUTIONS } from "@/constants";

const SolutionFor = () => {
  return (
    <div className="space-y-4 py-4">
      <TypingText>{SOLUTIONS}</TypingText>
    </div>
  );
};

export default SolutionFor;
