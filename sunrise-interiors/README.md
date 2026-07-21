# 🏡 Sunrise Interiors – AI Voice Agent

An AI-powered voice calling application that instantly calls users after they submit their phone number. The AI assistant interacts naturally with customers to understand their interior design requirements.

---

## Features

- 📞 Instant AI outbound calling
- 🤖 AI-powered voice conversation
- ☎️ Phone number validation
- ⚡ Real-time call initiation
- 🌐 React frontend
- 🚀 Express.js backend
- 🎙️ Vapi AI integration
- 📲 Twilio phone integration

---

## Tech Stack

Frontend
- React.js
- Axios

Backend
- Node.js
- Express.js

AI
- Vapi AI

Telephony
- Twilio

---

## Project Structure

```
sunrise-interiors
│
├── frontend
│   ├── src
│   └── package.json
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```
PORT=5000
VAPI_API_KEY=YOUR_API_KEY
VAPI_ASSISTANT_ID=YOUR_ASSISTANT_ID
PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID
```

---

## Workflow

1. User enters phone number.
2. React sends request to Express backend.
3. Backend calls Vapi API.
4. Vapi initiates an AI phone call.
5. AI speaks with the customer.

---

## Future Improvements

- Store call transcripts
- Dashboard for call history
- Appointment booking
- CRM integration
- Email notifications
- Admin panel