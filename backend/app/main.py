from fastapi.middleware.cors import CORSMiddleware;
from fastapi import FastAPI

from app.api.v1.translate import router as translate_router
from app.db.models.translation_log import TranslationLog
from app.core.logger import setup_logger
from app.db.session import engine

setup_logger()

app = FastAPI(
    title="LangForge API",
    description="API for LangForge translation service",
    version="1.0.0"
)

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(translate_router, prefix="/api/v1", tags=["translate"])

TranslationLog.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Welcome to LangForge API"}
