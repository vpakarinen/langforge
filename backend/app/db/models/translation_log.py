from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class TranslationLog(Base):
    __tablename__ = 'translation_logs'

    id_key = Column(Integer, primary_key=True, index=True)
    source_text = Column(Text, nullable=False)
    translated_text = Column(Text, nullable=False)
    source_language = Column(String(10), nullable=True)
    target_language = Column(String(10), nullable=False)
    most_used = Column(String(50), nullable=False)
    timestamp = Column(DateTime, default=datetime.now)
