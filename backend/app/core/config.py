from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    DATABASE_URL: str = Field("langforge.db", env="DATABASE_URL")
    LOG_LEVEL: str = Field("INFO", env="LOG_LEVEL")
    DEFAULT_MODEL: str = Field("Helsinki-NLP/opus-mt-en-es", env="DEFAULT_MODEL")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()
