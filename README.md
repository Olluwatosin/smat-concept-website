# SMAT Concept & Innovative Solutions Ltd.

> Mastering the Digital Frontier: Leading Africa in AI & Data-Driven Solutions

## 🚀 Project Overview

A world-class technology platform for SMAT Concept & Innovative Solutions Ltd. This project showcases our expertise in building high-performance workspace apps with AI capabilities, expert data analysis, and modern digital infrastructure.

## ✨ Core Services

- **AI Workspace Apps**: Custom internal tools supercharged with LLM integration and intelligent automation.
- **Data Analysis & Insights**: Turning raw business data into strategic, actionable intelligence through predictive modeling.
- **Web Development**: Fast, beautiful, and revenue-generating applications built with Next.js and FastAPI.
- **Smart Farming**: IoT-powered precision agriculture solutions for the modern African farm.
- **Digital Infrastructure**: Enterprise-grade networking, security, and document digitalization.

## 🛠️ Tech Stack

### Frontend
- **Next.js (App Router)** - React framework for the modern web.
- **TypeScript** - For robust, type-safe development.
- **Tailwind CSS** - Utility-first styling for a premium aesthetic.
- **Framer Motion** - Cinematic micro-interactions and animations.
- **Next Font (Inter)** - Premium typography for a world-class feel.

### Backend
- **FastAPI** - High-performance Python backend framework.
- **uv** - Ultra-fast Python package and project manager.
- **Pydantic** - Robust data validation.

## 📁 Project Structure

```
.
├── frontend/             # Next.js application
│   ├── src/app/          # App Router pages and components
│   └── public/           # Optimized assets
├── backend/              # FastAPI application (Managed by uv)
│   ├── main.py           # API entry point
│   └── pyproject.toml    # Modern Python dependencies
├── company_site/         # (Legacy) Django backend
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **Python 3.11+**
- **uv** (Install via `curl -LsSf https://astral.sh/uv/install.sh | sh`)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smat-concept-website.git
   cd smat-concept-website
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   uv sync
   uv run python main.py
   ```

## 🚢 Deployment

The frontend is automatically deployed to **Vercel** upon pushing to the `main` branch via GitHub Actions.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full production configuration details.

---

*Built for Africa's digital future by SMAT Concept & Innovative Solutions Ltd.*
