from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class TranslationRequest(BaseModel):
    source_text: str = Field(..., example="Hello world")
    target_language: str = Field(..., example="es")
    source_language: Optional[str] = Field(None, example="en")
    model: Optional[str] = Field("default", example="default")

class TranslationResponse(BaseModel):
    translated_text: str
    source_language: Optional[str]
    target_language: str
    model_used: str
    timestamp: datetime

    class Config:
        orm_mode = True
