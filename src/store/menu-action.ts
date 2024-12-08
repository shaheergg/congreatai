import { create } from "zustand";

const useMenuAction = create((set) => ({
  show: false,
  setShow: (show: boolean) => set({ show }),
}));

export default useMenuAction;
