"use client";

import type { SessionStats } from "@/lib/usePerformance";

interface ScoreBoardProps {
  session: SessionStats;
  currentIndex: number;
  totalWords: number;
  onResetSession: () => void;
  onResetAll: () => void;
}

export default function ScoreBoard({
  session,
  currentIndex,
  totalWords,
  onResetSession,
  onResetAll,
}: ScoreBoardProps) {
  const accuracy =
    session.totalAnswered > 0
      ? Math.round((session.totalCorrect / session.totalAnswered) * 100)
      : 0;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
          <span>
            Card {Math.min(currentIndex + 1, totalWords)} of {totalWords}
          </span>
          <span>{accuracy}% accuracy</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 via-pink-500 to-gray-500 transition-all duration-300 rounded-full"
            style={{ width: `${(Math.min(currentIndex + 1, totalWords) / totalWords) * 100}%` }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex justify-between items-center gap-2 text-sm">
        <div className="flex gap-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 font-medium">
            ✓ {session.totalCorrect}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 font-medium">
            ✗ {session.totalIncorrect}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 font-medium">
            ⟳ {session.totalSkipped}
          </span>
          {session.streak > 1 && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 font-medium">
              🔥 {session.streak}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onResetSession}
            className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors"
            title="Reset session"
          >
            Reset
          </button>
          <button
            onClick={onResetAll}
            className="text-xs text-red-400 hover:text-red-600 dark:hover:text-red-300 cursor-pointer transition-colors"
            title="Clear all data"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
