import TypingText from "@/components/typing-text";
import { TERMS } from "@/constants";

const Terms = () => {
  return (
    <div className="space-y-8 h-full py-8">
      <div className="space-y-6">
        <TypingText>{TERMS}</TypingText>
      </div>{" "}
    </div>
  );
};

export default Terms;
