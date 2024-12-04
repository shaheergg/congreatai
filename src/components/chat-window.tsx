import Contact from "@/components/contact";
import SuggestionsList from "@/components/suggestion-list";
import CongreatPlatform from "@/components/congreat-platform";
import Terms from "@/components/terms";
import About from "@/components/about";
import { useIsMobile } from "@/hooks/use-mobile";
import ErrorMessage from "@/components/error-message";
import SolutionFor from "@/components/solution-for";
import { useEffect, useRef } from "react";
import ScrollWindow from "@/components/scroll-window";
import autodesk from "@/assets/autodesk.png";
import buildertrend from "@/assets/buildertrend.png";
import monday from "@/assets/monday.png";
import ms from "@/assets/ms.png";
import priority from "@/assets/priority.png";
import procore from "@/assets/procore.png";
import revit from "@/assets/revit.png";
import trello from "@/assets/trello.png";
import salesforce from "@/assets/salesforce.png";
import sap from "@/assets/sap.png";
import builton from "@/assets/builton.png";

type SuggestionType = {
  id: number;
  name: string;
};

type ChatWindowPropsType = {
  chatState: string;
  suggestions: SuggestionType[];
};

const ChatWindow = ({ chatState, suggestions }: ChatWindowPropsType) => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const connectors: string[] = [
    autodesk,
    buildertrend,
    builton,
    trello,
    revit,
    salesforce,
    sap,
    procore,
    priority,
    ms,
    monday,
  ];
  useEffect(() => {
    // Automatically scroll to the bottom when children change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatState]);
  return (
    <ScrollWindow chatState={chatState}>
      {chatState === "Contact" ? (
        <Contact />
      ) : chatState === "Terms Of Use" ? (
        <Terms />
      ) : chatState === "Congreat Platform" ? (
        <CongreatPlatform />
      ) : chatState === "About Congreat" ? (
        <About />
      ) : chatState === "Solution for" ? (
        <SolutionFor />
      ) : chatState === "none" ? (
        <>
          {!isMobile && (
            <div className="space-y-4 py-4">
              <marquee direction="right">
                {" "}
                <span className="text-[#92909599] text-[18px]">Connectors</span>
              </marquee>
              <div className="flex items-center flex-wrap gap-4">
                {connectors.map((connector) => {
                  return (
                    <div className="">
                      <img src={connector} alt="" className="h-8" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <SuggestionsList suggestions={suggestions} />
        </>
      ) : (
        <ErrorMessage />
      )}
    </ScrollWindow>
  );
};

export default ChatWindow;
