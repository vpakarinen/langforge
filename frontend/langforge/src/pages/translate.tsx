/* eslint-disable react/react-in-jsx-scope */
import TranslationResult from '../components/Translate/TranslationResult';
import TranslationForm from '../components/Translate/TranslationForm';

const TranslatePage = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl text-white font-bold mb-4 text-center">Translate Text</h1>
      <TranslationForm />
      <TranslationResult />
    </div>
  );
};

export default TranslatePage;
