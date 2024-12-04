import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import useChatStateStore from "@/store/chatState";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (chatState: string) => void }).setChatState
  );
  return (
    <div className="px-3 space-y-1 py-4">
      <h2 className="text-[24px]">
        <span className="font-semibold">Smarter</span> and{" "}
        <span className="font-semibold">Faster</span> Decisions!{" "}
      </h2>
      <p className="text-[#71717A] text-[18px]">
        Congreat AI: Optimizing construction management and cutting costs by up
        to 25%!
      </p>
      <div className="py-1">
        {isMobile && (
          <Button onClick={() => setChatState("Contact")}>Get a demo</Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
