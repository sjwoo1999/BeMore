'use client';

import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEmotionStore } from '@app/stores/emotionStore';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ReportChart() {
  const vad = useEmotionStore((state) => state.vad);
  if (!vad) return <p className="text-gray-500">No emotion data available.</p>;

  const data = {
    labels: ['Valence', 'Arousal', 'Dominance'],
    datasets: [
      {
        label: 'Emotion VAD',
        data: vad,
        backgroundColor: 'rgba(34, 211, 238, 0.3)',
        borderColor: 'rgb(34, 211, 238)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(14, 165, 233)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 1,
        ticks: { stepSize: 0.2 },
      },
    },
  };

  return <Radar data={data} options={options} />;
}
