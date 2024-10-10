**LangForge** employs state-of-the-art language models fine-tuned specifically for translation tasks, this ensures that translations are not only accurate but also contextually relevant.

## Core Features
- **Wide Language Range:** Supports major global languages incl. Russian, Chinese, Hindi and Arabian
- **High Accuracy:** Delivers precise translations by leveraging advanced machine learning techniques
- **Automatic Language Detection:** Intelligently detects the source language of the input text
- **Context Awareness:** Understands and maintains the context of the source material

## Technology Stack
- SQL Alchemy
- Typescript
- Javascript
- Next.JS
- FastAPI
- Python
- SQLite

## Languages Supported
Important notice ⚠️ you can only use English as a source language atm.

- Spanish
- Chinese
- Russian
- Arabian
- German
- Finnish
- French
- Italian
- Hindi

## How to Run

### Environment Variables
Add the following variables to `.env` file:

```
DATABASE_URL=langforge.db
LOG_LEVEL=INFO

MODEL_EN_ES=Helsinki-NLP/opus-mt-en-es
MODEL_EN_FR=Helsinki-NLP/opus-mt-en-fr
MODEL_EN_DE=Helsinki-NLP/opus-mt-en-de
MODEL_EN_IT=Helsinki-NLP/opus-mt-en-it
MODEL_EN_ZH=Helsinki-NLP/opus-mt-en-zh
MODEL_EN_RU=Helsinki-NLP/opus-mt-en-ru
MODEL_EN_AR=Helsinki-NLP/opus-mt-en-ar
MODEL_EN_HI=Helsinki-NLP/opus-mt-en-hi
MODEL_EN_FI=Helsinki-NLP/opus-mt-en-fi
```

### Backend
1. Navigate to Backend Dir
   - `cd backend`
2. Install Dependencies
   - `pip install -r requirements.txt`
3. Run the Backend
   - `uvicorn main:app --reload`
### Frontend
1. Navigate to Frontend Dir
   - `cd frontend`
2. Install Dependencies
   - `npm install`
3. Run the Backend
   - `npm run dev`
  
## Support
If you would like to support the development of LangForge, consider donating or sponsoring the project.

[Buy Me a Coffee](https://www.buymeacoffee.com/pavi103)
<br/>
<br/>
[Ko-fi](https://ko-fi.com/pavi103)

## Author
- @vpakarinen
