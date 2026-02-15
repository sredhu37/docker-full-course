export type Article = "der" | "die" | "das";

export interface GermanWord {
  id: number;
  noun: string;
  translation: string;
  article: Article;
  imageUrl: string | null;
}

const words: GermanWord[] = [
  { id: 1, noun: "Tisch", translation: "table", article: "der", imageUrl: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&h=300&fit=crop" },
  { id: 2, noun: "Lampe", translation: "lamp", article: "die", imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop" },
  { id: 3, noun: "Buch", translation: "book", article: "das", imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop" },
  { id: 4, noun: "Hund", translation: "dog", article: "der", imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop" },
  { id: 5, noun: "Katze", translation: "cat", article: "die", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop" },
  { id: 6, noun: "Auto", translation: "car", article: "das", imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop" },
  { id: 7, noun: "Stuhl", translation: "chair", article: "der", imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop" },
  { id: 8, noun: "Blume", translation: "flower", article: "die", imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=300&fit=crop" },
  { id: 9, noun: "Haus", translation: "house", article: "das", imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop" },
  { id: 10, noun: "Baum", translation: "tree", article: "der", imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop" },
  { id: 11, noun: "Sonne", translation: "sun", article: "die", imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop" },
  { id: 12, noun: "Kind", translation: "child", article: "das", imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" },
  { id: 13, noun: "Apfel", translation: "apple", article: "der", imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2uj38?w=400&h=300&fit=crop" },
  { id: 14, noun: "Schule", translation: "school", article: "die", imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop" },
  { id: 15, noun: "Fenster", translation: "window", article: "das", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { id: 16, noun: "Schlüssel", translation: "key", article: "der", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
  { id: 17, noun: "Tür", translation: "door", article: "die", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
  { id: 18, noun: "Bett", translation: "bed", article: "das", imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop" },
  { id: 19, noun: "Berg", translation: "mountain", article: "der", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop" },
  { id: 20, noun: "Stadt", translation: "city", article: "die", imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" },
  { id: 21, noun: "Wasser", translation: "water", article: "das", imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
  { id: 22, noun: "Vogel", translation: "bird", article: "der", imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop" },
  { id: 23, noun: "Uhr", translation: "clock", article: "die", imageUrl: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=300&fit=crop" },
  { id: 24, noun: "Bild", translation: "picture", article: "das", imageUrl: "https://images.unsplash.com/photo-1513519245338-a3aac04e199b?w=400&h=300&fit=crop" },
  { id: 25, noun: "Fisch", translation: "fish", article: "der", imageUrl: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=300&fit=crop" },
  { id: 26, noun: "Straße", translation: "street", article: "die", imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop" },
  { id: 27, noun: "Telefon", translation: "telephone", article: "das", imageUrl: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&h=300&fit=crop" },
  { id: 28, noun: "Kuchen", translation: "cake", article: "der", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
  { id: 29, noun: "Brücke", translation: "bridge", article: "die", imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop" },
  { id: 30, noun: "Geld", translation: "money", article: "das", imageUrl: "https://images.unsplash.com/photo-1554672723-d42a16e533db?w=400&h=300&fit=crop" },
  { id: 31, noun: "Schuh", translation: "shoe", article: "der", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { id: 32, noun: "Milch", translation: "milk", article: "die", imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop" },
  { id: 33, noun: "Herz", translation: "heart", article: "das", imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" },
  { id: 34, noun: "Stern", translation: "star", article: "der", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop" },
  { id: 35, noun: "Musik", translation: "music", article: "die", imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop" },
  { id: 36, noun: "Kleid", translation: "dress", article: "das", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop" },
  { id: 37, noun: "Zug", translation: "train", article: "der", imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop" },
  { id: 38, noun: "Küche", translation: "kitchen", article: "die", imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { id: 39, noun: "Meer", translation: "sea", article: "das", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: 40, noun: "Computer", translation: "computer", article: "der", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" },
  { id: 41, noun: "Zeitung", translation: "newspaper", article: "die", imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=300&fit=crop" },
  { id: 42, noun: "Fahrrad", translation: "bicycle", article: "das", imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop" },
  { id: 43, noun: "Garten", translation: "garden", article: "der", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop" },
  { id: 44, noun: "Nacht", translation: "night", article: "die", imageUrl: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=300&fit=crop" },
  { id: 45, noun: "Brot", translation: "bread", article: "das", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },
  { id: 46, noun: "Mond", translation: "moon", article: "der", imageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400&h=300&fit=crop" },
  { id: 47, noun: "Hand", translation: "hand", article: "die", imageUrl: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=400&h=300&fit=crop" },
  { id: 48, noun: "Mädchen", translation: "girl", article: "das", imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" },
  { id: 49, noun: "Regen", translation: "rain", article: "der", imageUrl: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&h=300&fit=crop" },
  { id: 50, noun: "Tasche", translation: "bag", article: "die", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop" },
];

export function getShuffledWords(): GermanWord[] {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getAllWords(): GermanWord[] {
  return words;
}

export function getWordById(id: number): GermanWord | undefined {
  return words.find((w) => w.id === id);
}

export default words;
