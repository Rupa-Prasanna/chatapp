import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import UserList from './components/UserList';
import Messages from './components/Messages';
import MessageInput from './components/MessageInput';


function App() {
  
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLogin, setIsLogin]=useState(false);

  



  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  };

  const handleLogin = (name) => {
    setUsername(name);
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (!storedUsers.includes(name)) {
      storedUsers.push(name);
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }else{
      setIsLogin(true);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    fetchMessages(user);
  };

  const fetchMessages = (user) => {
    
    const storedMessages = JSON.parse(localStorage.getItem(`${username}_${user}`)) || [];
    setMessages(storedMessages);
  };

  const handleSendMessage = (message) => {
    
    const updatedMessages = [...messages, { sender: username, message }];
    setMessages(updatedMessages);
    localStorage.setItem(`${username}_${selectedUser}`, JSON.stringify(updatedMessages));
  };

  return (
    <div className="App">
      <h3> Welcome to the Chat Application</h3>
      <Login onLogin={handleLogin}/>
      {isLogin?
      <div id="chat-container">
      <UserList users={users} onSelectUser={handleUserSelect} />
      {selectedUser && (
        <div className="chat-con">
          <Messages messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      )}
      </div>:""
}
    </div>
  );
}

export default App;
