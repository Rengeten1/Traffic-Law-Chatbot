import React from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages }) {
  return (
    <div className="card-body" style={{ height: '400px', overflowY: 'scroll' }}>
      {messages.map((msg, index) => (
        <MessageItem key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}
export default MessageList;
