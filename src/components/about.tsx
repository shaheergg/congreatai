import Team from "@/components/team";
import TypingText from "@/components/typing-text";
import { ABOUT } from "@/constants";
const About = () => {
  return (
    <div className="space-y-8 h-full py-8">
      <TypingText>{ABOUT}</TypingText>
      <Team />
    </div>
  );
};

export default About;
