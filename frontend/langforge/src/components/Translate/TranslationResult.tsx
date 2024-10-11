/* eslint-disable react/react-in-jsx-scope */
import useTranslationStore from '../../store/useTranslationStore';

const TranslationResult = () => {
  const translations = useTranslationStore((state) => state.translations);
  const latest = translations[0];

  if (!latest) return null;

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-lg mb-2">Translation result:</h2>
      <p className="mb-4">{latest.translatedText}</p>
      <div className="text-gray-400 text-sm">
        <span>Source Language: {latest.sourceLanguage}</span>
        <span className="mx-2">|</span>
        <span>Target Language: {latest.targetLanguage}</span>
        <span className="mx-2">|</span>
        <span>Model Used: {latest.modelUsed}</span>
      </div>
      <div className="text-gray-400 text-xs mt-1">
        <span>
          Timestamp: {new Date(latest.timestamp).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default TranslationResult;
