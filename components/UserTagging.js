// components/UserTagging.js

import React from 'react';

const UserTagging = ({ users, onUserSelect }) => {
  return (
    <div className="absolute bg-white mt-1 p-1 rounded-lg shadow-lg z-10">
      {users.map((user) => (
        <div
          key={user}
          className="cursor-pointer py-1 px-2 hover:bg-gray-100"
          onClick={() => onUserSelect(user)}
        >
          @{user}
        </div>
      ))}
    </div>
  );
};

export default UserTagging;
