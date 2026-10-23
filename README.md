# 🏛️ Grievance360 - AICTE AI-Powered Grievance Redressal Platform

An integrated dashboard for registering, monitoring, and tracking institution-related complaints across AICTE bureaus and cells, with status updates, automated alerts, analytics, and efficient grievance resolution.

---

## 🗂️ Monorepo Architecture

```
Grievance360/
├── apps/
│   ├── web/               # Next.js 14 App Router Frontend (Tailwind, Lucide, Framer Motion, Recharts)
│   └── api/               # FastAPI Python Backend (Torch, Sentence Transformers, Redis, Celery, Postgres)
├── packages/
│   └── db/                # PostgreSQL Schema, DDL, and Seeding Scripts
├── docs/                  # Architecture diagrams, specifications, and design system docs
├── docker/                # Multi-stage Dockerfiles for API and Web services
├── docker-compose.yml      # Local orchestration (PostgreSQL, Redis, API, Web)
└── .env.example           # Unified environment variable template
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.17+ / v20.x LTS
- **Python**: 3.10+ or 3.11+
- **Docker & Docker Compose**: (Optional, for containerized run)
- **PostgreSQL**: 15+ (if running locally without Docker)
- **Redis**: 7+ (if running locally without Docker)

### 2. Environment Configuration
Copy `.env.example` to `.env` in the root:
```bash
cp .env.example .env
```

### 3. Running with Docker Compose (Recommended)
Launch all dependencies (PostgreSQL, Redis, FastAPI, Next.js) with a single command:
```bash
docker-compose up --build
```
- **Web App**: [http://localhost:3000](http://localhost:3000)
- **API Swagger Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **API ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 🛠️ Local Development (Independent Services)

### Backend API (`apps/api`)
```bash
cd apps/api
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI development server
uvicorn main:app --reload --port 8000
```

### Frontend Web Client (`apps/web`)
```bash
cd apps/web
npm install
npm run dev
```

---

## 📦 Core Technology Stack

| Layer | Technology | Key Capabilities |
|---|---|---|
| **Frontend** | Next.js 14 (App Router), React 18, TypeScript | Server Components, SEO optimization, responsive layout |
| **Styling & UI** | Tailwind CSS, Framer Motion, Lucide-React | Glassmorphic design, smooth animations, accessible icon set |
| **Data Viz** | Recharts | Department resolution metrics, grievance SLA velocity charts |
| **Backend API**| FastAPI, Python 3.11+, Pydantic v2 | High-throughput async endpoints, auto OpenAPI generation |
| **AI / NLP** | Sentence-Transformers, PyTorch, NumPy | Semantic duplicate detection, automatic department routing |
| **Queue / Async**| Celery, Redis | Background PDF report generation, SLA escalation timers |
| **Database** | PostgreSQL, psycopg2-binary | Relational integrity, grievance life-cycle event log |
| **DevOps** | Docker, Docker Compose | Reproducible multi-service development and deployment |

---

## 📄 License
MIT License / AICTE Grievance360 Core Team.
