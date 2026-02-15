"use client";

import Flashcard from "@/app/components/Flashcard";
import ScoreBoard from "@/app/components/ScoreBoard";
import { usePerformance } from "@/lib/usePerformance";
import { getShuffledWords } from "@/lib/words";
import { useCallback, useMemo, useState } from "react";

export default function FlashcardGame() {
  const [words, setWords] = useState(() => getShuffledWords());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const {
    session,
    loaded,
    recordCorrect,
    recordIncorrect,
    recordSkip,
    resetSession,
    resetAll,
  } = usePerformance();

  const currentWord = useMemo(() => words[currentIndex], [words, currentIndex]);
  const isFinished = currentIndex >= words.length;

  const goToNext = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((i) => i + 1);
      setCardKey((k) => k + 1);
    } else {
      setCurrentIndex(words.length);
    }
  }, [currentIndex, words.length]);

  const handleRestart = useCallback(() => {
    setWords(getShuffledWords());
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
    resetSession();
  }, [resetSession]);

  const handleResetAll = useCallback(() => {
    setWords(getShuffledWords());
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
    resetAll();
  }, [resetAll]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <div className="text-gray-400 text-lg animate-pulse">Loading...</div>
      </div>
    );
  }

  if (isFinished) {
    const accuracy =
      session.totalAnswered > 0
        ? Math.round((session.totalCorrect / session.totalAnswered) * 100)
        : 0;

    return (
      <div className="w-full max-w-md mx-auto text-center py-12">
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Round Complete! 🎉
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {session.totalCorrect}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">Correct</p>
            </div>
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950">
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                {session.totalIncorrect}
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">Wrong</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
              <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                {session.totalSkipped}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Skipped</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Accuracy: <span className="font-bold text-gray-900 dark:text-white">{accuracy}%</span>
          </p>
          {session.bestStreak > 0 && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Best streak: <span className="font-bold text-yellow-600 dark:text-yellow-400">🔥 {session.bestStreak}</span>
            </p>
          )}
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-linear-to-r from-blue-500 via-pink-500 to-gray-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-lg"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ScoreBoard
        session={session}
        currentIndex={currentIndex}
        totalWords={words.length}
        onResetSession={handleRestart}
        onResetAll={handleResetAll}
      />
      <Flashcard
        key={cardKey}
        word={currentWord}
        onCorrect={() => recordCorrect(currentWord.id)}
        onIncorrect={() => recordIncorrect(currentWord.id)}
        onSkip={() => recordSkip(currentWord.id)}
        onNext={goToNext}
      />
    </div>
  );
}
