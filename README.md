# 🤖 AI-Smart-Site: RAG-Powered Assistant

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0+-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)
![Gemini](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-orange.svg)

A modern Landing Page integrated with a **Retrieval-Augmented Generation (RAG)** chatbot. This application allows users to interact with an AI that provides context-aware responses based on documents uploaded via an Admin Portal.

---

## ✨ Key Features

* **🧠 Context-Aware AI:** Powered by Google's `gemini-2.0-flash` for high-speed, intelligent responses.
* **📄 Dynamic Knowledge Base:** Admins can upload PDFs which are automatically processed, chunked, and stored in a vector database.
* **🔐 Secure Authentication:** Full user lifecycle management including local signup/login and **Google OAuth** integration.
* **💬 Real-time Chat Widget:** A sleek, floating UI with typing indicators and persistent message history.
* **📱 Responsive Design:** Fully optimized for desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Backend:** Flask (Python)
* **Database:** MongoDB Atlas (Vector Search enabled)
* **AI/LLM:** Google Gemini API
* **Embeddings:** `text-embedding-004`
* **Frontend:** Vanilla JavaScript, CSS3 Variables, Jinja2 Templates

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the required dependencies:

```bash
git clone [https://github.com/yourusername/ai-smart-site.git](https://github.com/yourusername/ai-smart-site.git)
cd ai-smart-site
pip install -r requirements.txt

### 2. Environment Setup (.env)
Create a file named `.env` in the root directory and add your credentials.

```env
SECRET_KEY=your_flask_secret_key

# MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ai_website

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Google OAuth (For Social Login)
GOOGLE_CLIENT_ID=your_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret

---

### 2. The MongoDB Vector Index Code
Since this part is JSON, using the `json` tag will highlight the colors correctly on GitHub:

```markdown
### 3. Configure MongoDB Vector Search
Use the **JSON Editor** in MongoDB Atlas and paste this configuration:

```json
{
  "fields": [
    {
      "numDimensions": 768,
      "path": "embedding",
      "similarity": "cosine",
      "type": "vector"
    }
  ]
}

## 📂 File Structure

```text
.
├── app.py              # Main Flask server and RAG logic
├── requirements.txt    # Project dependencies
├── .env                # API keys and secrets (Keep private!)
├── static/             # Static assets
│   ├── css/
│   │   └── style.css   # Styles for Chat UI and Landing Page
│   └── js/
│       └── chat.js     # Frontend logic for AI interaction
└── templates/          # HTML Templates
    ├── index.html      # Landing Page
    ├── admin.html      # Document Upload Portal
    ├── login.html      # User Sign-in
    └── signup.html     # User Registration
---

### 3. The Tech Stack Table
If you want the "others" part to look organized, a table is the best way to do it:

```markdown
## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | Flask (Python 3.9+) |
| **LLM** | Google Gemini 2.0 Flash |
| **Database** | MongoDB Atlas (Vector Search) |
| **Frontend** | Jinja2, Vanilla JS, CSS3 |
| **Auth** | Flask-Login & Google OAuth 2.0 |

---
