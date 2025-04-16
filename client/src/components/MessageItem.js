import React from 'react';

function MessageItem({ sender, text }) {
  return (
    <div className={`d-flex ${sender === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
      <div className={`p-2 ${sender === 'user' ? 'bg-primary text-white' : 'bg-light'} rounded`}>
        {text}
      </div>
    </div>
  );
}

export default MessageItem;
