import React from 'react';
import moment from 'moment';
import Markdown from 'markdown-to-jsx';

function ChatMessage(props) {
  const { uid, text, createdAt} = props.message;
  const messageClass = uid === props.user ? 'sent' : 'recieved';
  return (
    <div className={`message ${messageClass}`}>
      <Markdown>{text || "Loading..."}</Markdown>
      <footer>{moment(createdAt.toDate()).fromNow()}</footer>
    </div>
  )
}

export default ChatMessage
