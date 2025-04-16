import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import InputBox from './InputBox';

const socket = io();

function ChatContainer() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('botMessage', (message) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: message }]);
    });

    return () => socket.off('botMessage');
  }, []);
  const sendMessage = (message) => {
    setMessages((prev) => [...prev, { sender: 'user', text: message }]);
    socket.emit('userMessage', message);
  };
  return (
    <div className="card">
      <MessageList messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
}

export default ChatContainer;
