import logging
from app.core.config import settings

def setup_logger():
    """ Configure the logger for the application """
    logging.basicConfig(
        level=getattr(logging, settings.LOG_LEVEL, logging.INFO),
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    )
