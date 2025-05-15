// apps/src/app/stores/emotionStore.ts

import { create } from 'zustand';

type EmotionState = {
  vad: [number, number, number] | null;
  inputText: string;
  updateVad: (v: [number, number, number]) => void;
  updateText: (t: string) => void;
  reset: () => void;
};

export const useEmotionStore = create<EmotionState>((set) => ({
  vad: null,
  inputText: '',
  updateVad: (v) => set({ vad: v }),
  updateText: (t) => set({ inputText: t }),
  reset: () => set({ vad: null, inputText: '' }),
}));
