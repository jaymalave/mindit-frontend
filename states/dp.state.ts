import { create } from "zustand";

export const useDpStore = create((set) => ({
  dp: "",
  setDp: (dp: string) => set({ dp }),
}));
