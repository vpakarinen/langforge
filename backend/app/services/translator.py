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
    """ Factory to provide default translator instance """
    def __init__(self):
        self.translator = Translator(self.default_model)

    default_model = "Helsinki-NLP/opus-mt-en-es"

    def get_translator(self) -> Translator:
        return self.translator
