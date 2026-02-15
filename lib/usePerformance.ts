"use client";

import { useCallback, useEffect, useState } from "react";

export interface PerformanceRecord {
  wordId: number;
  correct: number;
  incorrect: number;
  skipped: number;
  lastSeen: number;
}

export interface SessionStats {
  totalAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalSkipped: number;
  streak: number;
  bestStreak: number;
}

const STORAGE_KEY = "derdiedas-performance";
const SESSION_KEY = "derdiedas-session";

function loadPerformance(): Record<number, PerformanceRecord> {
  if (typeof window === "undefined") return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function savePerformance(records: Record<number, PerformanceRecord>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function loadSession(): SessionStats {
  if (typeof window === "undefined") return defaultSession();
  try {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : defaultSession();
  } catch {
    return defaultSession();
  }
}

function saveSession(stats: SessionStats) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(stats));
}

function defaultSession(): SessionStats {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    totalSkipped: 0,
    streak: 0,
    bestStreak: 0,
  };
}

export function usePerformance() {
  const [records, setRecords] = useState<Record<number, PerformanceRecord>>({});
  const [session, setSession] = useState<SessionStats>(defaultSession());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRecords(loadPerformance());
    setSession(loadSession());
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recordCorrect = useCallback(
    (wordId: number) => {
      setRecords((prev) => {
        const existing = prev[wordId] || {
          wordId,
          correct: 0,
          incorrect: 0,
          skipped: 0,
          lastSeen: 0,
        };
        const updated = {
          ...prev,
          [wordId]: {
            ...existing,
            correct: existing.correct + 1,
            lastSeen: Date.now(),
          },
        };
        savePerformance(updated);
        return updated;
      });
      setSession((prev) => {
        const updated = {
          ...prev,
          totalAnswered: prev.totalAnswered + 1,
          totalCorrect: prev.totalCorrect + 1,
          streak: prev.streak + 1,
          bestStreak: Math.max(prev.bestStreak, prev.streak + 1),
        };
        saveSession(updated);
        return updated;
      });
    },
    []
  );

  const recordIncorrect = useCallback(
    (wordId: number) => {
      setRecords((prev) => {
        const existing = prev[wordId] || {
          wordId,
          correct: 0,
          incorrect: 0,
          skipped: 0,
          lastSeen: 0,
        };
        const updated = {
          ...prev,
          [wordId]: {
            ...existing,
            incorrect: existing.incorrect + 1,
            lastSeen: Date.now(),
          },
        };
        savePerformance(updated);
        return updated;
      });
      setSession((prev) => {
        const updated = {
          ...prev,
          totalAnswered: prev.totalAnswered + 1,
          totalIncorrect: prev.totalIncorrect + 1,
          streak: 0,
        };
        saveSession(updated);
        return updated;
      });
    },
    []
  );

  const recordSkip = useCallback(
    (wordId: number) => {
      setRecords((prev) => {
        const existing = prev[wordId] || {
          wordId,
          correct: 0,
          incorrect: 0,
          skipped: 0,
          lastSeen: 0,
        };
        const updated = {
          ...prev,
          [wordId]: {
            ...existing,
            skipped: existing.skipped + 1,
            lastSeen: Date.now(),
          },
        };
        savePerformance(updated);
        return updated;
      });
      setSession((prev) => {
        const updated = {
          ...prev,
          totalSkipped: prev.totalSkipped + 1,
        };
        saveSession(updated);
        return updated;
      });
    },
    []
  );

  const resetSession = useCallback(() => {
    const fresh = defaultSession();
    setSession(fresh);
    saveSession(fresh);
  }, []);

  const resetAll = useCallback(() => {
    setRecords({});
    savePerformance({});
    const fresh = defaultSession();
    setSession(fresh);
    saveSession(fresh);
  }, []);

  return {
    records,
    session,
    loaded,
    recordCorrect,
    recordIncorrect,
    recordSkip,
    resetSession,
    resetAll,
  };
}
