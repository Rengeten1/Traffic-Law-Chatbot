# Traffic Law Chatbot 

AI chatbot answering questions on German traffic laws using natural language.

## Features
- Q&A format with aggressive follow-up questions.
- Topics: speed limits, traffic signs, parking rules.
- Responsive UI with React and Bootstrap 5.
- Backend with Node.js, Express.js, and Socket.IO.
- Intent detection via keyword-spotting (Task 1) or Azure LUIS (Task 3).
- Deployed on Azure App Services with SSL.

## Setup
1. Clone: `git clone https://github.com/yourusername/traffic-law-chatbot.git`
2. Install: `npm install` (server) and `cd client && npm install` (client).
3. Run: `node server/index.js` (after building client: `cd client && npm run build`).

## Deployment
- Azure App Services: `https://traffic-law-chatbot.azurewebsites.net`
- GitHub Actions for CI/CD.

## Tasks
- **Task 1**: Keyword-spotting chatbot.
- **Task 2**: Azure deployment.
- **Task 3**: LUIS integration (optional, in branch `task3-luis`).
