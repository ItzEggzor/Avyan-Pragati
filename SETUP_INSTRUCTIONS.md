# Setup Instructions

This project requires **three external API keys** to run. All sensitive values have been replaced with placeholder strings in the codebase. Follow the steps below to configure your own instance.

---

## 1. Firebase (Primary App — Citizens & Contractors)

Used in `firebase-config.js` and `contractor.html`.

1. Go to [Firebase Console](https://console.firebase.google.com/) → Create a new project (or use an existing one).
2. Add a **Web App** → copy the `firebaseConfig` object.
3. Replace the following placeholders:

| Placeholder | Where to find the real value |
|---|---|
| `YOUR_FIREBASE_API_KEY` | Firebase Console → Project Settings → SDK setup → `apiKey` |
| `YOUR_PROJECT_ID` | Firebase Console → Project Settings → `projectId` |
| `YOUR_MESSAGING_SENDER_ID` | Firebase Console → Project Settings → `messagingSenderId` |
| `YOUR_FIREBASE_APP_ID` | Firebase Console → Project Settings → `appId` |
| `YOUR_GA_MEASUREMENT_ID` | Firebase Console → Project Settings → `measurementId` (optional) |

> Files to update: `firebase-config.js`, `contractor.html`

---

## 2. Firebase (Government Portal)

Used in `Gov/pages/govdashboard.html`, `govlogin.html`, `govdigital-twin.html`, `govproject-lifecycle.html`.

You can use the **same Firebase project** as above, or a separate one for isolation.

| Placeholder | Description |
|---|---|
| `YOUR_GOV_FIREBASE_API_KEY` | `apiKey` from the Gov Firebase app |
| `YOUR_GOV_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `YOUR_GOV_FIREBASE_APP_ID` | `appId` |
| `YOUR_PROJECT2_MESSAGING_SENDER_ID` | `messagingSenderId` for govproject-lifecycle |
| `YOUR_PROJECT2_FIREBASE_APP_ID` | `appId` for govproject-lifecycle |
| `YOUR_PROJECT2_GA_MEASUREMENT_ID` | `measurementId` for govproject-lifecycle |

> Files to update: `Gov/pages/govdashboard.html`, `Gov/pages/govlogin.html`, `Gov/pages/govdigital-twin.html`, `Gov/pages/govproject-lifecycle.html`

---

## 3. Google Maps JavaScript API

Used for maps and location features across the app.

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials.
2. Create an **API Key** and restrict it to **Maps JavaScript API**.
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in:
   - `Gov/pages/govdashboard.html`
   - `Gov/pages/govdigital-twin.html`
   - `Gov/pages/govproject-lifecycle.html`
   - `Gov/pages/govombudsman.html`
   - `contractor.html`
   - `contractor-signup.html`
   - `logged main.html`

---

## 4. Roboflow (AI Image Detection)

Used in `logged main.html` and `contractor.html` for the 7-layer AI verification pipeline.

1. Sign up at [Roboflow](https://roboflow.com/) and get your **Publishable API Key**.
2. Replace placeholders:
   - `YOUR_ROBOFLOW_PUBLISHABLE_KEY` → your primary publishable key (starts with `rf_`)
   - `YOUR_ROBOFLOW_API_KEY_2` → your secondary publishable key

> Files to update: `logged main.html`, `contractor.html`

---

## Required Firebase Services

Enable the following in your Firebase project:
- **Authentication** → Email/Password provider
- **Firestore Database** → copy `firestore.rules` from this repo
- **Storage** → for photo uploads
- **Hosting** → for deployment (`firebase.json` is pre-configured)

---

## Deployment

```bash
npm install -g firebase-tools
firebase login
firebase use --add        # select your project
firebase deploy
```
