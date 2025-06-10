// components/ChatSidebar.jsx
import React from 'react';
import './ChatSidebar.css'; // We'll create this for styling

const ChatSidebar = () => {
  // Sample chat history data
  const chatHistory = [
    { id: 1, name: "Support Team", lastMessage: "Hello, how can we help?", time: "10:30 AM" },
    { id: 2, name: "Parts Inquiry", lastMessage: "Your requested part is available", time: "Yesterday" },
    { id: 3, name: "Technical Help", lastMessage: "Have you tried resetting the device?", time: "Monday" },
    { id: 4, name: "Order #12345", lastMessage: "Your order has shipped", time: "Last week" },
    { id: 5, name: "Warranty Info", lastMessage: "Your warranty expires in 30 days", time: "Jun 12" }
  ];

  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <h3>Chat History</h3>
        <button className="new-chat-btn">
          <span>+</span> New Chat
        </button>
      </div>
      
      <div className="search-chats">
        <input type="text" placeholder="Search chats..." />
      </div>
      
      <div className="chats-list">
        {chatHistory.map(chat => (
          <div key={chat.id} className="chat-item">
            <div className="chat-avatar">{chat.name.charAt(0)}</div>
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-preview">{chat.lastMessage}</div>
            </div>
            <div className="chat-time">{chat.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;