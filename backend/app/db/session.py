from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

import logging

logger = logging.getLogger(__name__)

engine = create_engine(
    f"sqlite:///{settings.DATABASE_URL}",
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    """ Provides database session to the path operation functions """
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
