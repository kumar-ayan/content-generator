# LinkedIn Architect | Engagement Nexus

LinkedIn Architect is a specialized, AI-powered tool designed to transform simple ideas into high-performing LinkedIn content. Powered by Google Gemini, it generates three distinct variations of LinkedIn posts (Professional, Storytelling, and Punchy) optimized for reach and engagement.

<p align="center">
  <img src="https://github.com/kumar-ayan/content-generator/raw/master/frontend/src/assets/hero.png" width="10%" alt="LinkedIn Architect Hero">
</p>

## ✨ Key Features

- **LinkedIn Optimization:** Specifically tuned to generate content that resonates on the LinkedIn platform.
- **Triple-Variation Strategy:** Every generation produces:
  - **Professional Insight:** Structured, value-driven posts with clear takeaways.
  - **Personal Storytelling:** Relatable narratives that build authentic connection.
  - **Punchy / Viral:** Short, impactful sentences designed for maximum readability and "stopping the scroll."
- **Tone Personalization:** Choose from five distinct personas: *Professional, Thought Leader, Contrarian, Enthusiastic, and Empathetic*.
- **Blueprint Archive:** Persistent storage of your post history using `localStorage`.
- **Modern Interface:** A sleek, dark-themed UI featuring glassmorphism and smooth animations.
- **One-Click Copy:** Seamlessly move your drafts to LinkedIn with built-in clipboard management.

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

### 2. Start the Frontend Application
From the `frontend` directory:
```bash
npm run dev
```

## 📜 License
This project is licensed under the ISC License.

---
*Created by [kumar-ayan](https://github.com/kumar-ayan)*
