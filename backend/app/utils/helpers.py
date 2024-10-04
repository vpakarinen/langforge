from langdetect import detect, DetectorFactory, LangDetectException

DetectorFactory.seed = 0

def detect_language(text: str) -> str:
    """ Detect language of the given text """
    try:
        language = detect(text)
        return language
    except LangDetectException as e:
        return "en"
