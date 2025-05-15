'use client';

import { useEmotionStore } from '../../../stores/emotionStore';

export default function EmotionSummary() {
  const vad = useEmotionStore((state) => state.vad);
  if (!vad) return null;

  const [v, a, d] = vad;

  let summary = 'Your current emotional state is...';
  if (v > 0.6 && a < 0.4 && d > 0.4) summary = 'Calm and positive';
  else if (v > 0.6 && a > 0.6 && d > 0.6) summary = 'Excited and cheerful';
  else if (v < 0.4 && a > 0.6 && d < 0.4) summary = 'Anxious or stressed';
  else if (v < 0.4 && a < 0.4 && d < 0.4) summary = 'Sad or fatigued';
  else summary = 'Neutral or mixed emotion';

  return (
    <div className="mt-6 p-4 rounded-md bg-slate-100">
      <h2 className="text-lg font-bold mb-2">🧠 Emotion Summary</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}
