from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import logging

from app.schemas.translation import TranslationRequest, TranslationResponse
from app.db.models.translation_log import TranslationLog
from app.services.translator import TranslatorFactory
from app.utils.helpers import detect_language
from app.db.session import get_db

router = APIRouter()

translator_factory = TranslatorFactory()
logger = logging.getLogger(__name__)

@router.post("/translate", response_model=TranslationResponse)
def translate_text(request: TranslationRequest, db: Session = Depends(get_db)) -> TranslationResponse:
    source_text = request.source_text
    target_language = request.target_language
    source_language = request.source_language or detect_language(source_text)

    try:
        translator = translator_factory.get_translator(source_language, target_language)
        translated_text = translator.translate(source_text)
    except ValueError as ve:
        logger.error(f"Translation error: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        logger.error(f"Unexpected error during translation: {e}")
        raise HTTPException(status_code=500, detail= "Translation service failed")
    
    translation_log = TranslationLog(
        source_text = source_text,
        translated_text = translated_text,
        source_language = source_language,
        target_language = target_language,
        model_used = translator.model_name
    )
    db.add(translation_log)
    db.commit()
    db.refresh(translation_log)

    response = TranslationResponse(
        translated_text = translated_text,
        source_language = source_language,
        target_language = target_language,
        timestamp = translation_log.timestamp
    )

    return response
