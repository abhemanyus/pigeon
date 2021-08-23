import React, { useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './ChatRoom.css';
import SignOut from './SignOut';
import ChatMessage from './ChatMessage';
import MessageBox from './MessageBox';

export function ChatRoom(props) {
  const messageRef = props.firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const sendMessage = async(e, message) => {
    e.preventDefault();
    await messageRef.add({
      createdAt: new Date(),
      text: message,
      uid: props.auth.currentUser.uid
    });
  };
  const scrollRef = useRef();
  const scroller = () => scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    return (
      <div>
        <h1>Chat Room</h1>
        {messages 
          && messages.map( message => 
              <ChatMessage 
                key={message.id} 
                message={message} 
                user={props.auth.currentUser.uid}
              />
          )
        }
        <MessageBox sendMessage={sendMessage} scroller={scroller}/>
        <SignOut auth={props.auth}/>
        <div ref={scrollRef}></div>
      </div>
    );
}

export default ChatRoom;
