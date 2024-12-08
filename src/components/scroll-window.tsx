import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useRef } from "react";

const ScrollWindow = ({
  chatState,
  children,
}: {
  chatState: string;
  children: React.ReactNode;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically scroll to the bottom when children change
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [children]);

  return (
    <ScrollArea
      className={`${
        chatState === "none" ? "h-[74vh]" : "h-screen"
      }  p-4 flex-col !no-scrollbar`}
    >
      <div ref={scrollRef} className="w-full h-full">
        {children}
      </div>
      {chatState !== "none" && <div className="h-[36vh]"></div>}
    </ScrollArea>
  );
};

export default ScrollWindow;
