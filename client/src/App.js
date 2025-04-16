import React from 'react';
import ChatContainer from './components/ChatContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Traffic Law Chatbot</h1>
      <ChatContainer />
    </div>
  );
}

export default App;
