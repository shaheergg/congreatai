import { create } from "zustand";
type SourceType = {
  count: string;
  src: string;
};
const useChatStateStore = create((set) => ({
  chatState: "none",
  message: "",
  sources: [],
  setChatState: (chatState: string) => set({ chatState }),
  setMessage: (message: string) => set({ message }),
  setSources: (sources: SourceType[]) => set({ sources }),
}));

export default useChatStateStore;
