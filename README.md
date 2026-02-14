🤖 AI-Smart-Site: RAG-Powered AssistantA modern Landing Page integrated with a Retrieval-Augmented Generation (RAG) chatbot. This application allows users to interact with an AI that provides context-aware responses based on documents uploaded via an Admin Portal.✨ Key Features🧠 Context-Aware AI: Powered by Google's gemini-2.0-flash for high-speed, intelligent responses.📄 Dynamic Knowledge Base: Admins can upload PDFs which are automatically processed, chunked, and stored in a vector database.🔐 Secure Authentication: Full user lifecycle management including local signup/login and Google OAuth integration.💬 Real-time Chat Widget: A sleek, floating UI with typing indicators and persistent message history.📱 Responsive Design: Fully optimized for desktop and mobile devices.🛠️ Tech StackCategoryTechnologyBackendFlask (Python 3.9+)LLMGoogle Gemini 2.0 FlashDatabaseMongoDB Atlas (Vector Search)FrontendJinja2, Vanilla JS, CSS3AuthFlask-Login & Google OAuth 2.0🚀 Getting Started1. InstallationClone the repository and install the required dependencies:Bashgit clone https://github.com/yourusername/ai-smart-site.git
cd ai-smart-site
pip install -r requirements.txt
2. Environment Setup (.env)Create a file named .env in the root directory and add your credentials:PlaintextSECRET_KEY=your_flask_secret_key

# MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ai_website

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Google OAuth (For Social Login)
GOOGLE_CLIENT_ID=your_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
3. Configure MongoDB Vector SearchTo enable the "brain" of the chatbot, use the JSON Editor in MongoDB Atlas Search and paste this configuration:JSON{
  "fields": [
    {
      "numDimensions": 768,
      "path": "embedding",
      "similarity": "cosine",
      "type": "vector"
    }
  ]
}
Note: Ensure the index name is set to vector_index.📂 File StructurePlaintext.
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
🛡️ Admin SetupTo access the Knowledge Base Management portal (/admin):Register a new account via the Signup page.Open your MongoDB collection users.Locate your user document and manually update the field "is_admin": false to "is_admin": true.Refresh the website, and the Admin Portal link will appear in the navigation bar.
