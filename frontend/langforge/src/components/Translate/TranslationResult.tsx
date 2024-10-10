/* eslint-disable react/react-in-jsx-scope */
import useTranslationStore from '../../store/useTranslationStore';

const TranslationResult = () => {
  const translations = useTranslationStore((state) => state.translations);
  const latest = translations[0];

  if (!latest) return null;

  return (
    <div className="mt-6 p-4 border border-green-300 bg-green-50 rounded-lg">
      <h2 className="text-lg text-gray-800 font-semibold mb-2">Translation result:</h2>
      <p className="text-gray-800 mb-4">{latest.translatedText}</p>
      <div className="text-sm text-gray-600">
        <span>Source Language: {latest.sourceLanguage}</span>
        <span className="mx-2">|</span>
        <span>Target Language: {latest.targetLanguage}</span>
        <span className="mx-2">|</span>
        <span>Model Used: {latest.modelUsed}</span>
      </div>
      <div className="text-xs text-gray-500 mt-1">
        <span>
          Timestamp: {new Date(latest.timestamp).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default TranslationResult;
