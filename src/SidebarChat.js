import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className="sidebarChart__info">
          <h2>Room Name</h2>
          <p>This is the last message in the room</p>
      </div>
    </div>
  );
};

export default SidebarChat;
