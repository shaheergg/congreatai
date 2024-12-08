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
import useMenuAction from "@/store/menu-action";
import FloatingLogos from "@/components/floating-logos";
import ApartmentDetails from "@/components/apartment-details";
import ProjectStatus from "@/components/project-status";
import Tasks from "@/components/tasks";

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
  const show = useMenuAction(
    (state: unknown) => (state as { show: boolean }).show
  );
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
              <div
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                <div>
                  <span className="text-[#92909599] text-[18px]">
                    Connectors
                  </span>
                </div>
              </div>
              <FloatingLogos connectors={connectors} />
            </div>
          )}
          {!show && <SuggestionsList suggestions={suggestions} />}
        </>
      ) : chatState === "Display Details from Apartment Plan 5" ? (
        <div>
          <ApartmentDetails chatState={chatState} />
        </div>
      ) : chatState === "My Project Status" ? (
        <ProjectStatus chatState={chatState} />
      ) : chatState === "How many tasks are open today?" ? (
        <Tasks chatState={chatState} />
      ) : (
        <ErrorMessage />
      )}
    </ScrollWindow>
  );
};

export default ChatWindow;
