from pydantic_settings import BaseSettings
from typing import Dict, Tuple
from pydantic import Field
from pathlib import Path

class Settings(BaseSettings):
    DATABASE_URL: str = Field("langforge.db", env="DATABASE_URL")
    LOG_LEVEL: str = Field("INFO", env="LOG_LEVEL")
    
    MODEL_EN_ES: str = Field(..., env="MODEL_EN_ES")
    MODEL_EN_FR: str = Field(..., env="MODEL_EN_FR")
    MODEL_EN_DE: str = Field(..., env="MODEL_EN_DE")
    MODEL_EN_IT: str = Field(..., env="MODEL_EN_IT")
    MODEL_EN_ZH: str = Field(..., env="MODEL_EN_ZH")
    MODEL_EN_RU: str = Field(..., env="MODEL_EN_RU")
    MODEL_EN_AR: str = Field(..., env="MODEL_EN_AR")
    MODEL_EN_HI: str = Field(..., env="MODEL_EN_HI")
    MODEL_EN_FI: str = Field(..., env="MODEL_EN_FI")

    @property
    def model_mappings(self) -> Dict[Tuple[str, str], str]:
        return {
            ("en", "es"): self.MODEL_EN_ES,
            ("en", "fr"): self.MODEL_EN_FR,
            ("en", "de"): self.MODEL_EN_DE,
            ("en", "it"): self.MODEL_EN_IT,
            ("en", "zh"): self.MODEL_EN_ZH,
            ("en", "ru"): self.MODEL_EN_RU,
            ("en", "ar"): self.MODEL_EN_AR,
            ("en", "hi"): self.MODEL_EN_HI,
            ("en", "fi"): self.MODEL_EN_FI
        }

    class Config:
        env_file = Path(__file__).resolve().parent.parent.parent.parent /".env"
        env_file_encoding = "utf-8"

settings = Settings()
