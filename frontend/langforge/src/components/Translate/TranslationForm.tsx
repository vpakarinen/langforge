/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';

import api from '../../utils/api';
import useTranslationStore from '../../store/useTranslationStore';

interface FormInputs {
  sourceText: string;
  sourceLanguage?: string;
  targetLanguage: string;
  model?: string;
}

interface LanguageOption {
  code: string;
  name: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabian' },
];

const models = [{ id: 'default', name: 'Default Model' }];

const TranslationForm = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTranslation = useTranslationStore((state) => state.addTranslation);

  const [selectedTargetLanguage, setSelectedTargetLanguage] =
    useState<LanguageOption>(languages[0]);
  const [selectedModel, setSelectedModel] = useState<{
    id: string;
    name: string;
  }>(models[0]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/translate', {
        source_text: data.sourceText,
        target_language: selectedTargetLanguage.code,
        source_language: data.sourceLanguage || undefined,
        model: selectedModel.id,
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
      setError(err.response?.data?.detail || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="sourceText">
          Source Text
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="sourceText"
          rows={4}
          placeholder="Enter text to translate"
          {...(register('sourceText'), { required: true })}
        ></textarea>
      </div>

      <div>
        <label htmlFor="sourceLanguage" className="block text-gray-700 mb-2">
          Source Language
        </label>
        <input
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="sourceLanguage"
          placeholder="e.g. en"
          {...register('sourceLanguage')}
        />
      </div>

      <div>
        <label className="block tect-gray-700 mb-2">Target Language</label>
        <Listbox
          value={selectedTargetLanguage}
          onChange={setSelectedTargetLanguage}
        >
          <div className="relative">
            <ListboxButton className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <span className="block truncate">
                {selectedTargetLanguage.name}
              </span>
              <span className="flex items-center absolute inset-y-0 right-0 p-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((language) => (
                <ListboxOption
                  key={language.code}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-white bg-blue-600' : 'text-gray-900'
                    }`
                  }
                  value={language}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {language.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-blue-600'
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Translation Model</label>
        <Listbox value={selectedModel} onChange={setSelectedModel}>
          <div className="relative">
            <ListboxButton className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <span className="block truncate">{selectedModel.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {models.map((model) => (
                <ListboxOption
                  key={model.id}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-white bg-blue-600' : 'text-gray-900'
                    }`
                  }
                  value={model}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {model.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-blue-600'
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        className={`w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          loading ? 'opacity-50 cursor-not-allowed' : '' }`}
        type="submit"
        disabled={loading}
      >
        {loading ? 'Translating' : 'Translate'}
      </button>
    </form>
  );
};

export default TranslationForm;
