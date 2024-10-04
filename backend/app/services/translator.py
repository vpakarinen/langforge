from transformers import pipeline, AutoModelForSeq2SeqLM, AutoTokenizer
import logging

logger = logging.getLogger(__name__)

class Translator:
    """ Initialize translator with specific model """
    def __init__(self, model_name: str):
        self.model_name = model_name
        self.pipeline = self.load_model(model_name)

    def load_model(self, model_name: str):
        """ Load the translation model and tokenizer """
        try:
            tokenizer = AutoTokenizer.from_pretrained(model_name)
            model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
            translator = pipeline("translation", model=model, tokenizer=tokenizer)
            logger.info(f"Loaded translation model: {model_name}")

            return translator
        except Exception as e:
            logger.error(f"Error loading model {model_name}: {e}")
            raise

    def translate(self, text: str) -> str:
        """ Translate the given text to the target language """
        try:
            translation = self.pipeline(text, max_length=400)[0]['translation_text']
            return translation
        except Exception as e:
            logger.error(f"Translation failed: {e}")
            raise

class TranslatorFactory:
    """ Factory to manage and provide translator instances """
    def __init__(self):
        self.translators = {}

    available_models = {
        ("en", "es"): "Helsinki-NLP/opus-mt-en-es",
        ("en", "fr"): "Helsinki-NLP/opus-mt-en-fr",
    }

    def get_translator(self, source_language: str, target_language: str) -> Translator:
        """ Retrieve translator instance for the specified source and target language """
        key = (source_language, target_language)
        model_name = self.available_models.get(key)

        if not model_name:
            raise ValueError(f"No model available for translation from {source_language} to {target_language}")
        if key not in self.translators:
            self.translators[key] = Translator(model_name)
        return self.translators[key]
