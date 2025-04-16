import React, { useState } from 'react';

function InputBox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="card-footer">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about German traffic laws..."
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
    </form>
  );
}

export default InputBox;
