import React, { useState } from 'react';
import "./index.css";

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input-con">
      <input type="text" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
}

export default MessageInput;
