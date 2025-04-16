const intents = require('./intents');
const conversationHistory = new Map();

function handleMessage(message, sessionId) {
  let history = conversationHistory.get(sessionId) || { messages: [], failedAttempts: 0 };

  let matchedIntent = intents.find((intent) =>
    intent.keywords.some((keyword) => message.toLowerCase().includes(keyword))
  );

  if (!matchedIntent) {
    history.failedAttempts++;
    if (history.failedAttempts >= 3) {
      history = { messages: [], failedAttempts: 0 };
      conversationHistory.set(sessionId, history);
      return { message: 'I’m having trouble understanding. Let’s start over. What do you want to know about German traffic laws?', followUp: null };
    }
    history.messages.push({ user: message, bot: 'Could you please rephrase your question?' });
    conversationHistory.set(sessionId, history);
    return { message: 'Could you please rephrase your question?', followUp: null };
  } 
	
  history.failedAttempts = 0;
  history.messages.push({ user: message, bot: matchedIntent.response });
  conversationHistory.set(sessionId, history);

  return { message: matchedIntent.response, followUp: matchedIntent.followUp };
}

module.exports = { handleMessage };
