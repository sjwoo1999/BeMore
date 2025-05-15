'use client';

import InputForm from './components/InputForm';
import StartSessionButton from './components/StartSessionButton';

export default function InputPage() {
  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-2">How are you feeling today?</h1>
      <p className="text-gray-600 mb-6">
        Share your thoughts below. This will help us understand your current emotional state.
      </p>

      <InputForm />
      <StartSessionButton />
    </main>
  );
}
