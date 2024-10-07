import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import api from '../../utils/api';
import useTranslationStore from '../../store/useTranslationStore';

interface FormInputs {
  sourceText: string;
  sourceLanguage?: string;
  targetLanguage: string;
  model?: string;
}

const TranslationForm = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTranslation = useTranslationStore((state) => state.addTranslation);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/translate', {
        source_text: data.sourceText,
        target_language: data.targetLanguage,
        source_language: data.sourceLanguage,
      });
      addTranslation({
        translatedText: response.data.translated_text,
        sourceLanguage: response.data.source_language || 'auto-detected',
        targetLanguage: response.data.target_language,
        modelUsed: response.data.model_used,
        timestamp: response.data.timestamp,
      });

      reset();
    } catch (err: any) {
      setError(err.response?.data?.detail || 'An unxepected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Form Fields */}
        {/* ... */}
    </form>
  )
};

export default TranslationForm;
