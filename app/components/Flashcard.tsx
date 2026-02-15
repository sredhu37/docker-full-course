"use client";

import type { Article, GermanWord } from "@/lib/words";
import { useEffect, useRef, useState } from "react";

const DEFAULT_IMAGE = "/default-noun.svg";

interface FlashcardProps {
  word: GermanWord;
  onCorrect: () => void;
  onIncorrect: () => void;
  onSkip: () => void;
  onNext: () => void;
}

const articleColors: Record<Article, { bg: string; text: string; border: string }> = {
  der: { bg: "bg-blue-500", text: "text-white", border: "border-blue-500" },
  die: { bg: "bg-pink-500", text: "text-white", border: "border-pink-500" },
  das: { bg: "bg-gray-500", text: "text-white", border: "border-gray-500" },
};

const articleButtonStyles: Record<Article, { base: string; selected: string; correct: string; wrong: string }> = {
  der: {
    base: "border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-300 dark:hover:bg-blue-950",
    selected: "bg-blue-500 text-white border-blue-500",
    correct: "bg-blue-500 text-white border-blue-500 ring-2 ring-blue-300",
    wrong: "bg-red-500 text-white border-red-500",
  },
  die: {
    base: "border-pink-300 text-pink-700 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-300 dark:hover:bg-pink-950",
    selected: "bg-pink-500 text-white border-pink-500",
    correct: "bg-pink-500 text-white border-pink-500 ring-2 ring-pink-300",
    wrong: "bg-red-500 text-white border-red-500",
  },
  das: {
    base: "border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
    selected: "bg-gray-500 text-white border-gray-500",
    correct: "bg-gray-500 text-white border-gray-500 ring-2 ring-gray-300",
    wrong: "bg-red-500 text-white border-red-500",
  },
};

const articles: Article[] = ["der", "die", "das"];

export default function Flashcard({ word, onCorrect, onIncorrect, onSkip, onNext }: FlashcardProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [imgError, setImgError] = useState(false);

  const flipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
    };
  }, []);

  const handleArticleSelect = (article: Article) => {
    if (answered) return;
    setSelectedArticle(article);
    setAnswered(true);
    const correct = article === word.article;
    setIsCorrect(correct);
    if (correct) {
      onCorrect();
    } else {
      onIncorrect();
    }
    flipTimerRef.current = setTimeout(() => {
      setIsFlipped(true);
    }, 600);
  };

  const handleFlip = () => {
    if (!answered) return;
    setIsFlipped(!isFlipped);
  };

  const handleSkip = () => {
    if (answered) return;
    onSkip();
    onNext();
  };

  const handleNext = () => {
    onNext();
  };

  const getButtonStyle = (article: Article) => {
    const styles = articleButtonStyles[article];
    if (!answered) return styles.base;
    if (article === word.article) return styles.correct;
    if (article === selectedArticle && !isCorrect) return styles.wrong;
    return styles.base + " opacity-50";
  };

  const correctColor = articleColors[word.article];
  const imageUrl = imgError || !word.imageUrl ? DEFAULT_IMAGE : word.imageUrl;

  return (
    <div className="w-full max-w-md mx-auto perspective-1000">
      <div
        className={`relative w-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ minHeight: "460px" }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden flex flex-col ${
            answered ? "cursor-pointer" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Image */}
          <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={word.translation}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          </div>

          {/* Word */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {word.noun}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              ({word.translation})
            </p>

            {/* Article buttons */}
            <div className="flex gap-3 w-full justify-center">
              {articles.map((article) => (
                <button
                  key={article}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArticleSelect(article);
                  }}
                  disabled={answered}
                  className={`px-6 py-3 text-lg font-semibold rounded-xl border-2 transition-all duration-200 ${getButtonStyle(
                    article
                  )} ${answered ? "cursor-default" : "cursor-pointer active:scale-95"}`}
                >
                  {article}
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-2">
              {!answered && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkip();
                  }}
                  className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 underline underline-offset-2 cursor-pointer transition-colors"
                >
                  Skip →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer ${correctColor.bg}`}
          onClick={handleFlip}
        >
          <div className="text-center p-8">
            <p className={`text-2xl font-medium ${correctColor.text} opacity-80 mb-2`}>
              {word.article === "der" ? "Masculine" : word.article === "die" ? "Feminine" : "Neuter"}
            </p>
            <h2 className={`text-6xl font-bold ${correctColor.text} mb-4`}>
              {word.article} {word.noun}
            </h2>
            <p className={`text-xl ${correctColor.text} opacity-80`}>
              ({word.translation})
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-colors cursor-pointer backdrop-blur-sm"
          >
            Next Card →
          </button>
        </div>
      </div>
    </div>
  );
}
