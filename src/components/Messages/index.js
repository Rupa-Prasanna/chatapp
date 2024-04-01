import React from 'react';
import "./index.css";


function Messages({ messages }) {
  return (
    <div className="message-con">
      
      <ul className="message-box">
        {messages.map((msg, index) => (
          <li className="li" key={index}><strong className="sender-name">{msg.sender}:</strong> {msg.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
