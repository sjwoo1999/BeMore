'use client';

import { useEmotionStore } from '@app/stores/emotionStore';

export default function StartSessionButton() {
  const { inputText } = useEmotionStore();

  const handleClick = () => {
    if (!inputText.trim()) return;
    console.log('📦 Submitted input:', inputText);

    // TODO: Trigger API request → analysis → redirect
  };

  return (
    <button
      onClick={handleClick}
      disabled={!inputText.trim()}
      className={`mt-4 px-6 py-2 rounded-md text-white font-medium transition ${
        inputText.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      Start Session
    </button>
  );
}
