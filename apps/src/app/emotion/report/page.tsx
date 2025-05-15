import EmotionSummary from './components/EmotionSummary';
import ReportChart from './components/ReportChart';

export default function ReportPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">📊 Emotion Report</h1>
      <p className="text-gray-600 mb-6">
        This report visualizes your emotional state using VAD scores.
      </p>
      <ReportChart />
      <EmotionSummary />
    </main>
  );
}
