# Avyan Pragati — Unified Digital Governance Portal

> A comprehensive digital ecosystem connecting **citizens**, **government officials**, and **contractors** for transparent, accountable, and efficient civic governance across India.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Portals](#portals)
  - [Citizen Portal](#citizen-portal)
  - [Contractor Portal](#contractor-portal)
  - [Government Officials Portal](#government-officials-portal)
- [Integrations](#integrations)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

**Avyan Pragati** is a multi-stakeholder digital governance platform built for India. It empowers citizens to file and track civic complaints, gives government officers real-time monitoring dashboards with geospatial analytics, and enables contractors to manage assigned infrastructure projects — all on a single, unified platform.

Core pillars of the system:

- **Transparency** — Blockchain-backed complaint records ensure tamper-proof audit trails.
- **Accountability** — AI-powered complaint validation prevents spam and prioritises genuine issues.
- **Accessibility** — Multi-language support and WhatsApp integration reach rural and non-tech users.
- **Efficiency** — Real-time dashboards, digital twin maps, and project lifecycle tracking accelerate resolution.

---

## Key Features

| Feature | Description |
|---|---|
| **Complaint Filing & Tracking** | Citizens submit civic complaints with photos; track status end-to-end |
| **AI Validation Engine** | 7-layer ML pipeline categorises and validates complaints (road damage, garbage, water leaks, etc.) with 80–92% accuracy |
| **Blockchain Immutability** | Every complaint is SHA-256 hashed and recorded on the Polygon network — tamper-proof and permanent |
| **Geospatial Heatmaps** | District-level complaint density maps using India TopoJSON/GeoJSON data |
| **Digital Twin Dashboard** | Government officers visualise infrastructure state and complaint hotspots in real time |
| **Project Lifecycle Management** | Full project tracking from initiation through completion with budget and timeline views |
| **Ombudsman Audit Module** | Transparent escalation paths, audit trails, and accountability records |
| **Government Schemes Registry** | Browse and filter central/state government schemes |
| **Chatbot Assistant** | "India Innovates Assistant" widget for guided complaint filing, status checks, and scheme discovery |
| **WhatsApp Integration** | Alternative access channel designed for rural outreach |
| **Multi-language Support** | i18n-ready translation layer via `translations.js` |
| **Leaderboard & Gamification** | Civic engagement scores encourage active participation |
| **Dark / Light Theme** | User-selectable interface themes across all portals |

---

## Tech Stack

### Frontend
- **HTML5 / CSS3 / Vanilla JavaScript** — Core platform
- **Google Maps JavaScript API** — Location selection and complaint mapping
- **TensorFlow.js** — Client-side ML inference for AI validation demos
- **ethers.js** — Ethereum/Polygon wallet and smart contract interaction

### Backend & Services
- **Firebase v10** — Authentication, Firestore database, Storage, Analytics, Hosting
- **Polygon (Amoy Testnet)** — Blockchain smart contract for complaint immutability
- **Roboflow API** — Cloud AI model inference for infrastructure image detection

### Data
- `india-districts.topojson` / `india_district_slim.geojson` / `india_district_raw.geojson` — Full district-level geographic data for India

---

## Project Structure

```
Avyan Pragati/
│
├── index.html                  # Landing / splash page
├── Main website.html           # Main citizen homepage
├── login.html                  # Citizen login
├── sign-up.html                # Citizen registration
├── profile.html                # User profile
├── logged main.html            # Authenticated citizen dashboard
│
├── contractor.html             # Contractor job dashboard
├── contractor-login.html       # Contractor authentication
├── contractor-signup.html      # Contractor registration
│
├── chatbot-component.html      # Embedded chatbot widget
├── ai-validation-demo.html     # AI complaint validation demo
├── whatsapp-integration-demo.html  # WhatsApp outreach demo
├── 404.html                    # Custom error page
│
├── firebase-config.js          # Firebase initialisation & helpers
├── blockchain-config.js        # Polygon smart contract config
├── blockchain.js               # Complaint hashing & on-chain logging
├── ai-detection-engine.js      # AI categorisation pipeline
├── translations.js             # i18n string definitions
├── main website.css            # Global citizen portal styles
│
├── blockchain/                 # Smart contract source & artifacts
│   ├── ComplaintRegistry.json  # Compiled ABI
│   ├── compile.js
│   ├── deploy.js
│   └── package.json
│
├── Gov/                        # Government officials portal
│   ├── pages/
│   │   ├── govlogin.html
│   │   ├── govdashboard.html
│   │   ├── govdigital-twin.html
│   │   ├── govproject-lifecycle.html
│   │   ├── govombudsman.html
│   │   └── govschemes.html
│   ├── assets/
│   │   ├── css/                # 10 modular stylesheets
│   │   └── js/                 # 8 feature modules
│   └── components/             # Shared navbar, sidebar, footer
│
├── india-districts.topojson
├── india_district_slim.geojson
├── india_district_raw.geojson
├── firebase.json               # Firebase Hosting config
├── firestore.rules             # Firestore security rules
└── .env.example                # Environment variable template
```

---

## Portals

### Citizen Portal

| Page | Purpose |
|---|---|
| `index.html` | Splash screen and service entry point |
| `Main website.html` | Overview of available government services |
| `login.html` / `sign-up.html` | Email/password authentication |
| `logged main.html` | Complaint submission, tracking, leaderboard |
| `profile.html` | Avatar, bio, and activity stats |

### Contractor Portal

| Page | Purpose |
|---|---|
| `contractor-login.html` | Contractor authentication |
| `contractor-signup.html` | Contractor registration |
| `contractor.html` | Assigned job dashboard and project updates |

### Government Officials Portal

Accessed at `Gov/pages/`. All pages share a common navbar, sidebar, and footer from `Gov/components/`.

| Page | Purpose |
|---|---|
| `govlogin.html` | Officer authentication with session persistence |
| `govdashboard.html` | Real-time complaint metrics and national command overview |
| `govdigital-twin.html` | Geographic heatmaps and location-based analytics |
| `govproject-lifecycle.html` | Project timeline, stage tracking, and budget monitoring |
| `govombudsman.html` | Audit trails, complaint escalation, and transparency records |
| `govschemes.html` | Central and state government scheme registry |

---

## Integrations

### Firebase
- **Auth** — Separate login flows for citizens, contractors, and government officers
- **Firestore** — Complaint records, user profiles, project data, scheme info
- **Storage** — Photo/document uploads attached to complaints and projects
- **Analytics** — Platform usage telemetry
- **Hosting** — Production deployment target

### Blockchain (Polygon Amoy Testnet)
- Smart contract deployed at `0x85E05a2395EbDf0982690ef1721a2e90e74D74B9`
- Each complaint is SHA-256 hashed and logged via `logComplaint(complaintId, dataHash)`
- Records are retrievable via `getComplaint(complaintId)`
- Provides a public, immutable audit trail independent of the central database

### AI Detection Engine
Eight infrastructure defect categories are supported:
`road_damage` · `garbage_dumping` · `water_leak` · `drainage_issue` · `electricity_hazard` · `street_light` · `fallen_tree` · `fire_hazard`

The pipeline combines keyword analysis and visual indicators to classify complaints, applying a confidence threshold of 0.30 before acceptance.

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- [Node.js](https://nodejs.org/) (for blockchain compilation/deployment only)
- A Firebase project with Auth, Firestore, and Storage enabled
- A Google Maps API key
- A Roboflow account and API key (optional — for live AI inference)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ItzEggzor/Avyan-Pragati.git
   cd Avyan-Pragati
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual API keys (see Environment Variables section)
   ```

3. **Open in browser**

   Open `index.html` directly in a browser, or use a local server for best results:
   ```bash
   npx serve .
   # then visit http://localhost:3000
   ```

4. **(Optional) Deploy the smart contract**
   ```bash
   cd blockchain
   npm install
   node compile.js
   node deploy.js
   ```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your credentials. Key variables include:

| Variable | Description |
|---|---|
| `FIREBASE_API_KEY` | Firebase project API key |
| `FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `FIREBASE_PROJECT_ID` | Firebase project ID |
| `FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `FIREBASE_APP_ID` | Firebase app ID |
| `GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key |
| `ROBOFLOW_API_KEY` | Roboflow model inference API key |
| `POLYGON_RPC_URL` | Polygon network RPC endpoint |
| `CONTRACT_ADDRESS` | Deployed smart contract address |

> **Never commit real API keys.** Always use `.env` (which is git-ignored) for secrets.

---

## Deployment

The project is configured for **Firebase Hosting** via `firebase.json`.

```bash
# Install Firebase CLI if needed
npm install -g firebase-tools

# Login and deploy
firebase login
firebase deploy
```

The `firestore.rules` file contains security rules applied automatically on deploy.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

*Avyan Pragati — Empowering citizens, enabling governance.*
