import { create } from 'zustand';

interface Translation {
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  modelUsed: string;
  timestamp: string;
}

interface TranslationState {
  translations: Translation[];
  addTranslation: (translation: Translation) => void;
}

const useTranslationStore = create<TranslationState>((set) => ({
  translations: [],

  addTranslation: (translation: Translation) =>
    set((state) => ({
      translations: [translation, ...state.translations],
    })),
}));

export default useTranslationStore;
