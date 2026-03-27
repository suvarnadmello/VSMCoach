# 🎯 VSMCoach - Agile Value Stream Mapping Platform

A professional, AI-powered Agile coaching platform for guided Value Stream Mapping (VSM), bottleneck detection, and continuous improvement.

## ✨ Features

- 🎓 **Guided Workshop Mode**: Step-by-step coaching with digital sticky notes
- 📊 **Real-time Analytics**: Lead time, cycle time, flow efficiency calculations
- 🤖 **AI-Powered Insights**: Bottleneck detection and improvement suggestions
- 📈 **Enterprise Dashboard**: Multi-team view, dependency heatmaps, executive reports
- 🔄 **Team Dependencies**: Visualize cross-team collaboration bottlenecks
- 📑 **Export Reports**: PDF/CSV transformation roadmaps with recommendations
- 🔐 **Enterprise Security**: OAuth2, JWT authentication, role-based access

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- npm or yarn

### Installation

\`\`\`bash
# Clone repository
git clone https://github.com/suvarnadmello/VSMCoach.git
cd VSMCoach

# Copy environment file
cp .env.example .env

# Start all services with Docker Compose
docker-compose up -d
\`\`\`

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health**: http://localhost:5000/health

## 📁 Project Structure

\`\`\`
VSMCoach/
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
\`\`\`

## 🏗️ Architecture

### Backend Stack
- **Runtime**: Node.js + Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT + Role-based access control

### Frontend Stack
- **Framework**: React 18 + TypeScript
- **UI Library**: Material-UI
- **State Management**: Zustand
- **HTTP Client**: Axios

## 🚀 Running Locally

\`\`\`bash
# With Docker
docker-compose up -d

# Without Docker - Terminal 1 (Backend)
cd backend && npm install && npm run dev

# Without Docker - Terminal 2 (Frontend)
cd frontend && npm install && npm start
\`\`\`

## 🌐 Deployment

### Frontend (Vercel)
\`\`\`bash
npm install -g vercel
cd frontend
vercel
\`\`\`

### Backend (Render.com)
1. Connect GitHub repo to Render
2. Build command: \`npm run build\`
3. Start command: \`npm start\`

## 📝 License

MIT License

## 🆘 Support

- Issues: https://github.com/suvarnadmello/VSMCoach/issues
- Discussions: https://github.com/suvarnadmello/VSMCoach/discussions

---

**Built with ❤️ by Agile Transformation Engineers**
