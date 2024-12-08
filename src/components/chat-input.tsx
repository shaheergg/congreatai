import useChatStateStore from "@/store/chatState";
import { Button } from "@/components/ui/button";
import { Search, TextSearch } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import monday from "@/assets/monday.svg";
import excel from "@/assets/excel.svg";
import outlook from "@/assets/outlook.svg";
import { motion } from "framer-motion";
import useMenuAction from "@/store/menu-action";
import { menuActions } from "@/constants";
import ActionMenu from "@/components/action-menu";

type SourceType = {
  count: string;
  src: string;
};
const ChatInput = () => {
  const message = useChatStateStore(
    (state: unknown) => (state as { message: string }).message
  );

  const [previousValue, setPreviousValue] = useState(message);
  const show = useMenuAction(
    (state: unknown) => (state as { show: boolean }).show
  );
  const setShow = useMenuAction(
    (state: unknown) => (state as { setShow: (value: boolean) => void }).setShow
  );

  const sources = useChatStateStore(
    (state: unknown) =>
      (
        state as {
          sources: { count: string; src: string }[];
        }
      ).sources
  );
  interface SourceImages {
    [key: string]: string;
    outlook: string;
    monday: string;
    excel: string;
  }

  const sourcImgs: SourceImages = {
    outlook,
    monday,
    excel,
  };
  useEffect(() => {
    setPreviousValue(message);
  }, [message]);

  const setMessage = useChatStateStore(
    (state: unknown) =>
      (state as { setMessage: (value: string) => void }).setMessage
  );
  const setSources = useChatStateStore(
    (state: unknown) =>
      (state as { setSources: (sources: SourceType[]) => void }).setSources
  );
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (value: string) => void }).setChatState
  );
  const focus = () => {
    setMessage("/");
    setShow(true);
  };
  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (e.target.value.endsWith("/")) {
      setShow(true);
    } else {
      setShow(false);
    }
    if (newValue.length < previousValue.length) {
      setChatState("none");
    }
    setMessage(newValue);
  };
  const handleClear = () => {
    setChatState("none");
    setMessage("");
    setSources([]);
  };
  const handleSubmit = () => {
    if (message.trim() === "") setChatState("none");
    else setChatState(message);
  };
  return (
    <div className="py-4 relative bg-white space-y-2 border-t border-x px-4 rounded-t-2xl shadow-md">
      {sources.length > 0 && (
        <>
          <div className="flex text-sm text-[#929095] items-center gap-2">
            <TextSearch size={18} />
            <span>Source</span>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            {sources.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded-md relative border border-[#BFDBFE]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.5,
                    delay: index * 0.1, // Adds a slight stagger effect
                  }}
                >
                  <motion.span
                    className="h-5 absolute w-5 bg-white -top-2 -right-2 rounded-full text-xs flex items-center justify-center border"
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    {item.count}
                  </motion.span>
                  <img className="h-5 w-5" src={sourcImgs[item.src]} />
                </motion.div>
              );
            })}
          </div>
        </>
      )}
      {show && (
        <ActionMenu
          menuActions={menuActions}
          setMessage={setMessage}
          setShow={setShow}
        />
      )}
      <div className="relative">
        <input
          onFocus={() => focus()}
          inputMode="none"
          onBlur={(e) => {
            if (!e.relatedTarget?.closest(".options-menu")) {
              setShow(false);
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          value={message}
          onChange={(e) => handelInputChange(e)}
          className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 outline-none focus:outline-primary py-2"
          placeholder="Ask anything about congreat!"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          {message && (
            <Button
              variant={"link"}
              className="rounded-full text-[#92909599] underline"
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
          <Button
            size={"icon"}
            className="rounded-full"
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            <Search size={24} />{" "}
          </Button>
        </div>
      </div>
      <div className="flex text-sm text-gray-500 items-center justify-center">
        Read our{" "}
        <button
          onClick={() => {
            setMessage("Terms Of Use");
            setChatState("Terms Of Use");
          }}
          className="underline flex items-center gap-2"
        >
          <span className="ml-2">Terms and conditions</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
