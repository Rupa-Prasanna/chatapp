import React from 'react';
import "./index.css";

function UserList({ users, onSelectUser }) {
  return (
    <div className="user-list-con">
      <h2>Available Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user} onClick={() => onSelectUser(user)}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
