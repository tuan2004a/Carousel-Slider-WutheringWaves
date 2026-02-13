import { create } from "zustand";
import type { Resonators } from "../types/CharacterTypes";

type SliderStore = {
	items: Resonators[];
	setItems: (items: Resonators[]) => void;
};

export const useSliderStore = create<SliderStore>((set) => ({
	items: [],
	setItems: (items) => set({ items }),
}));
