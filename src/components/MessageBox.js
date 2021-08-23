import React, { useState } from 'react'

function MessageBox(props) {
  const [text, settext] = useState('');
  return (
    <div>
      <form onSubmit={ (e) => {
        props.sendMessage(e, text);
        settext('');
        props.scroller();
      } } 
      autoComplete="off">
        <label htmlFor="message">Write message</label>
        <input type="text" name="message" id="message" 
          value={text}
          onChange={ e => settext(e.target.value)}
        />
        <button type="submit"><i className="material-icons">add</i></button>
      </form>
    </div>
  )
}

export default MessageBox
