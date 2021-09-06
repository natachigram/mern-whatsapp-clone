import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chatarea.css';
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined
} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

const Chatarea = () => {
  return (
    <div className='chatarea'>
      <div className='chatarea__header'>
        <Avatar />

        <div className='chatarea__headerInfo'>
          <h3>Room name</h3>
          <p>Last Seen at...</p>
        </div>

        <div className='chatarea__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chatarea__body'>
        <p className='chatarea__message'>
          <span className='chatarea__name'>Natachi</span>
          this is a message
          <span className='chatarea__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatarea__message chatarea__reciever'>
          <span className='chatarea__name'>Natachi</span>
          this is a message
          <span className='chatarea__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chatarea__message'>
          <span className='chatarea__name'>Natachi</span>
          this is a message
          <span className='chatarea__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className='chatarea__footer'>
        <InsertEmoticon />
        <form>
          <input
            type='search'
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
          />
          <button>Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
};

export default Chatarea;
