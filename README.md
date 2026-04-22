# ALTA AI | Intelligence Nexus

ALTA AI is a cutting-edge, AI-powered content generation platform designed to architect complete content ecosystems from a single vision. Powered by Google Gemini, it transforms a simple topic into a multi-format suite of professional content including executive summaries, full editorial articles, and ready-to-post social media updates.

<p align="center">
  <img src="https://github.com/kumar-ayan/content-generator/raw/master/frontend/src/assets/hero.png" width="10%" alt="ALTA AI Hero">
</p>

## ✨ Key Features

- **Intelligence Synthesis:** Leverages Google's Gemini 2.0 Flash model for high-fidelity content generation.
- **Tone Customization:** Tailor your output with five distinct personas: *Professional, Creative, Witty, Academic, and Persuasive*.
- **Content Triple-Stack:** Every generation produces:
  - **Executive Summary:** A high-level briefing of the core concept.
  - **Full Editorial:** A detailed, long-form article ready for publication.
  - **Social Nexus:** An optimized LinkedIn post with relevant hashtags and engagement strategy.
- **Nexus Log (History):** Persistent storage of your generation history using `localStorage`.
- **Modern Interface:** A high-performance, glassmorphic UI featuring smooth animations and a responsive layout.
- **One-Click Copy:** Seamlessly move content to your workflow with built-in clipboard management.

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
  <img src="https://img.shields.io/badge/google_gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" alt="Google Gemini" />
</p>

### Frontend
- **React 19 & TypeScript:** Type-safe, component-based architecture.
- **Vite:** Next-generation frontend tooling for ultra-fast development.
- **Tailwind CSS:** Utility-first styling with custom glassmorphism.
- **Framer Motion:** High-end UI animations and spatial transitions.
- **Lucide React:** Minimalist, consistent iconography.

### Backend
- **Node.js & Express:** Robust, scalable server environment.
- **TypeScript:** Ensuring structural integrity across the API layer.
- **Google Generative AI:** Integration with Gemini API for advanced LLM capabilities.
- **CORS & Dotenv:** Secure and configurable environment management.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kumar-ayan/content-generator.git
   cd content-generator
   ```

2. **Backend Setup:**
   ```bash
   # Install root dependencies
   npm install
   
   # Setup environment variables
   cp .env.example .env
   ```
   *Edit `.env` and add your `GEMINI_API_KEY`.*

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   ```

---

## 🏃 Running the Application

### 1. Start the Backend Server
From the root directory:
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### 2. Start the Frontend Application
From the `frontend` directory:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

---

## 📁 Project Structure

```text
content_generator/
├── src/                # Backend source (TypeScript)
│   ├── routes/         # API endpoints
│   ├── services/       # AI logic (Gemini integration)
│   └── index.ts        # Server entry point
├── frontend/           # React frontend
│   ├── src/
│   │   ├── assets/     # Images and styles
│   │   ├── App.tsx     # Main application logic
│   │   └── main.tsx    # React entry point
│   └── tailwind.config.js
├── .env                # API Keys (gitignored)
└── package.json        # Project metadata
```

## 📜 License
This project is licensed under the ISC License.

---
*Created by [kumar-ayan](https://github.com/kumar-ayan)*
