import FlashcardGame from "@/app/components/FlashcardGame";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-950 font-sans">
      <header className="w-full max-w-md mx-auto pt-8 pb-4 px-4 text-center">
        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 via-pink-500 to-gray-500 bg-clip-text text-transparent">
          der / die / das
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Practice German articles with flashcards
        </p>
      </header>
      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-8">
        <FlashcardGame />
      </main>
    </div>
  );
}
