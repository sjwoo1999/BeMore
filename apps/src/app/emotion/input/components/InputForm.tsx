// apps/src/app/emotion/input/components/InputForm.tsx

'use client';

import { useEmotionStore } from '@/app/stores/emotionStore';

export const InputForm = () => {
  const { inputText, updateText } = useEmotionStore();

  return (
    <div>
      <label className="block mb-2 font-semibold">Write how you feel</label>
      <textarea
        className="w-full p-2 border rounded-md"
        value={inputText}
        onChange={(e) => updateText(e.target.value)}
        placeholder="Express your thoughts here..."
        rows={6}
      />
    </div>
  );
};
